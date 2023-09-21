import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h2 className="text-5xl font-bold my-6">Navbar</h2>
            <nav className="text-2xl font-medium mb-10">
                {/* reload the page */}
                {/* <a className="m-6" href="/">Home</a>
                <a className="m-6" href="/users">Users</a>
                <a className="m-6" href="/about">About</a>
                <a className="m-6" href="/contact">Contact Us</a> */}
                
                {/* thats why use Link */}
                <Link className="m-6" to="/">Home</Link>
                <Link className="m-6" to="/users">Users</Link>
                <Link className="m-6" to="/about">About</Link>
                <Link className="m-6" to="/contact">Contact Us</Link>
            </nav>
        </div>
    );
};

export default Header;