import { useState } from "react";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/" className="link">
            {/* <img src={logo} alt="logo" /> */}
            <div className="logo">
              <span id="one">Beach</span>
              <span id="two">Buddy</span>
            </div>
          </Link>
          <button className="nav-btn" type="button" onClick={handleToggle}>
            <FaAlignRight className="nav-icon" />
          </button>
        </div>
        <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rooms">Rooms</Link>
          </li>
          {/* <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}
