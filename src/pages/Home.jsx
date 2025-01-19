import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';

import './MovieGrid.css'

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;



const Home = () => {
  const [topMovies, setTopMovies] = useState([]); //topMovies começa com um array vazio
  const [pagina, setPagina] = useState(1);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results);
  };

  const handleClick = async (e) => {
    const op = e.target.name;
    console.log(op);
    if (pagina == 1 && op === '-') {
      setPagina(pagina);
    }
    else if (op === '-' && pagina > 1) {
      setPagina(pagina - 1);
    }
    else if (op === '+') {
      setPagina(pagina + 1);
    }
  }

  // ao carregar a página o useEffect será executado por não possuir dependências para modificar no []
  useEffect(() => {
    const topRatedURL = `${moviesURL}top_rated?${apiKey}&page=${pagina}`;

    getTopRatedMovies(topRatedURL);
  }, [pagina])

  return (
    <div className='container'>
      <h2 className='title' id='topo'>Melhores Filmes:</h2>
      <div className='topo-avancar-retroceder-pagina'>
        <a href="#topo" onClick={handleClick} name='-'>{'<<<<'}</a>
        {pagina}
        <a href="#topo" onClick={handleClick} name='+'>{'>>>>'}</a>
      </div>
      <div className="movies-container">
        {topMovies.length === 0 && <p>Carregando...</p>}
        {/* key é uma chave única que precisa ser passada */}
        {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
      <div className='avancar-retroceder-pagina'>
        <a href="#topo" onClick={handleClick} name='-'>{'<<<<'}</a>
        {pagina}
        <a href="#topo" onClick={handleClick} name='+'>{'>>>>'}</a>
      </div>
    </div>
  )
}

export default Home