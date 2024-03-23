import { Link, NavLink } from 'react-router-dom';
import './header.css'

const Header = () => {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <Link to="/contact">Contact</Link>
            <Link to="/user">User</Link>
        </nav>
    );
};

export default Header;