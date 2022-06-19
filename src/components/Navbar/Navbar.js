import "./Navbar.css";
import logo from "./../../images/logo.png";

function Navbar() {
    return (
        <nav className="nav">
            <div className="brand">
                <img src={logo} alt="" className="brand-logo" />
                <h3>ReactFacts</h3>
            </div>
            <h4>React Course - Project 1</h4>
        </nav>
    );
}

export default Navbar;
