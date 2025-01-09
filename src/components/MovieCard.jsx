import { Link } from "react-router-dom";

import { FaStar, FaVoteYea } from 'react-icons/fa';

const imageUrl = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {
    return (
        <div className="movie-card">
            {/* pega a url da imagem e concatena com o endpoint do poster */}
            <img src={imageUrl + movie.poster_path} alt="#" />
            <h2>{movie.title}</h2>
            <p>
                <FaStar />{movie.vote_average.toFixed(2)}
            </p>
            <p>
                <FaVoteYea />Votos: {movie.vote_count}
            </p>
            {/* faz o redirecionamento para os detalhes do filme e passa o id na url */}
            {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>} 
        </div>
    )
}

export default MovieCard