import { Link, NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <div className="nav-container">
            <nav className="text-2xl font-medium my-10">
                {/* reload the page */}
                {/* <a className="m-6" href="/">Home</a>
                <a className="m-6" href="/users">Users</a>
                <a className="m-6" href="/about">About</a>
                <a className="m-6" href="/contact">Contact Us</a> */}
                
                {/* thats why use Link */}
                {/* <Link className="m-10" to="/">Home</Link>
                <Link className="m-10" to="/users">Users</Link>
                <Link className="m-10" to="/about">About</Link>
                <Link className="m-10" to="/contact">Contact Us</Link> */}

                {/* active navlink  */}
                <NavLink className="m-10" to="/">Home</NavLink>
                <NavLink className="m-10" to="/users">Users</NavLink>
                <NavLink className="m-10" to="/about">About</NavLink>
                <NavLink className="m-10" to="/contact">Contact Us</NavLink>
            </nav>
        </div>
    );
};

export default Header;