import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav className="text-2xl font-medium my-10">
                {/* reload the page */}
                {/* <a className="m-6" href="/">Home</a>
                <a className="m-6" href="/users">Users</a>
                <a className="m-6" href="/about">About</a>
                <a className="m-6" href="/contact">Contact Us</a> */}
                
                {/* thats why use Link */}
                <Link className="m-10" to="/">Home</Link>
                <Link className="m-10" to="/users">Users</Link>
                <Link className="m-10" to="/about">About</Link>
                <Link className="m-10" to="/contact">Contact Us</Link>
            </nav>
        </div>
    );
};

export default Header;