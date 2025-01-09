import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieCard from "../components/MovieCard";

import "./MovieGrid.css"

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {

  const [searchParams] = useSearchParams(); //passa um array de funções
  
  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q"); //parâmetro que está na url que foi definido no NavBar.jsx

  const getSearchedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovies(data.results);

  };

  // ao carregar a página o useEffect será executado por não possuir dependências para modificar no []
  useEffect(() => {
    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;

    getSearchedMovies(searchWithQueryURL);
  }, [query])

  return (
    <div className='container'>
      <h2 className='title'>Resultados para: <span className="query-text">{query}</span></h2>
      <div className="movies-container">
        {movies.length===0 && <p>Carregando...</p>}
        {/* key é uma chave única que precisa ser passada */}
        {movies.length>0 && movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
      </div>
    </div>
  )
}

export default Search