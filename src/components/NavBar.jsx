import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi';
import './NavBar.css'
const NavBar = () => {
    const[search, setSearch] = useState(""); // string vazia
    const navigate = useNavigate();

    // função executada ao fazer um submit
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(!search) return 

        // passa um valor para a busca e redireciona para a página de busca
        navigate(`/search?q=${search}`, { replace: true });
        setSearch(""); 
    }

    return (
        <nav id="navBar">
            <h2>
                <Link to="movies_lib"><BiCameraMovie />Movies Library</Link>
            </h2>
            <form onSubmit={handleSubmit}>
                <input type="text" id="" placeholder="Busque um filme" onChange={(e) => setSearch(e.target.value)} value={search} />
                <button type="submit">
                    <BiSearchAlt2 />
                </button>
            </form>
        </nav>
    )
}

export default NavBar