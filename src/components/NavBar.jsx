import { Link } from "react-router-dom";
import './NavBar.css';

function NavBar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/manchester-united">Manchester United</Link>
            <Link to="/fixtures">Fixtures</Link>
            <Link to="/players">Players</Link>
            <Link to="/not-found">Not Found</Link>
        </nav>
    )
}

export default NavBar;