import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieCard from "../components/MovieCard";

import "./MovieGrid.css"

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {

  const [searchParams] = useSearchParams(); //passa um array de funções
  const [pagina, setPagina] = useState(1);
  const [movies, setMovies] = useState([]);
  const [totalPgs, setTotalPgs] = useState();

  const query = searchParams.get("q"); //parâmetro que está na url que foi definido no NavBar.jsx

  const getPaginas = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTotalPgs(data.total_pages);
  };

  const getSearchedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    
    setMovies(data.results);
  };

  const handleClick = async (e) => {
    const op = e.target.name;
    
    console.log(totalPgs);

    if (pagina == 1 && op === '-') {
      alert('Você já está na primeira página!')
      setPagina(pagina);
    }else if(pagina==totalPgs && op === '+'){
      alert('Você chegou na ultima página!')
      setPagina(pagina);
    }
    else if (op === '-' && pagina > 1) {
      setPagina(pagina - 1);
      searchParams.set('page', pagina);
    }
    else if (op === '+') {
      setPagina(pagina + 1);
      searchParams.set('page', pagina);
    }
  }

  // ao carregar a página o useEffect será executado sempre que o query ou a pagina mudar
  useEffect(() => {
    setPagina(1);
    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}&page=${pagina}`;
    getPaginas(searchWithQueryURL);
    getSearchedMovies(searchWithQueryURL);
  }, [query])

  useEffect(() =>{
    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}&page=${pagina}`;

    getSearchedMovies(searchWithQueryURL);
  }, [pagina])


  return (
    <div className='container'>
      <h2 className='title' id='topo'>Resultados para: <span className="query-text">{query}</span></h2>
      <div className='topo-avancar-retroceder-pagina'>
        <a href="#topo" onClick={handleClick} name='-'>{'<<<<'}</a>
        {pagina}
        <a href="#topo" onClick={handleClick} name='+'>{'>>>>'}</a>
      </div>
      <div className="movies-container">
        {movies.length===0 && <p>Carregando...</p>}
        {/* key é uma chave única que precisa ser passada */}
        {movies.length>0 && movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
      </div>
      <div className='avancar-retroceder-pagina'>
        <a href="#topo" onClick={handleClick} name='-'>{'<<<<'}</a>
        {pagina}
        <a href="#topo" onClick={handleClick} name='+'>{'>>>>'}</a>
      </div>
    </div>
  )
}

export default Search