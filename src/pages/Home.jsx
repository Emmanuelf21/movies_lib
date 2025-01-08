import { useState, useEffect } from 'react';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setTopMovies(data.results);

  };

  // ao carregar a página o useEffect será executado por não possuir dependências para modificar no []
  useEffect(() => {
    const topRatedURL = `${moviesURL}top_rated?${apiKey}`;

    getTopRatedMovies(topRatedURL);
  }, [])

  return (
    <div>
      {topMovies && topMovies.map((movie) => <p>{ movie.title}</p>)}
    </div>
  )
}

export default Home