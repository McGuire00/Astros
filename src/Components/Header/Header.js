import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <h1 className="header-title">Baseball Data</h1>
      <nav className="header-nav">
        <ul className="header-nav-list">
          <li className="header-nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="header-nav-item">
            <Link to="/games" className="nav-link">
              Games
            </Link>
          </li>
          <li className="header-nav-item">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
