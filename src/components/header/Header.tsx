import "./Header.css";
const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h4 className="header-title">Flavio Pegoraro</h4>
        <h4 className="header-title">Frontend Developer</h4>
        <nav className="header-nav">
          <ul className="header-list">
            <li className="header-item">
              <a href="#" className="header-link">
                Sobre Mi
              </a>
            </li>
            <li className="header-item">
              <a href="#" className="header-link">
                Proyectos
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
