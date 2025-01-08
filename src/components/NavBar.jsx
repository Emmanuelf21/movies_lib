import { Link } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi';
import './NavBar.css'
const NavBar = () => {
    return (
        <nav id="navBar">
            <h2>
                <Link to="/"><BiCameraMovie />Movies Library</Link>
            </h2>
            <Link to="/movie/1">Movie</Link>
            <Link to="/search">Search</Link>
            <form>
                <input type="text" id="" placeholder="Busque um filme" />
                <button type="submit">
                    <BiSearchAlt2 />
                </button>
            </form>
        </nav>
    )
}

export default NavBar