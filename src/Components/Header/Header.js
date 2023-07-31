import "./Header.css";

function Header() {
  return (
    <div className="header">
      <h1 className="header-title">Baseball Data</h1>
      <nav className="header-nav">
        <ul className="header-nav-list">
          <li className="header-nav-item">Players</li>
          <li className="header-nav-item">Games</li>
          <li className="header-nav-item">Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
