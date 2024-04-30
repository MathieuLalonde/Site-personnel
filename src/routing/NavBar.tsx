import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div >
        <div>
          <ul>

            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                (Accueil)
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/dev" className="nav-link">
                (portfolio)
                {/* travaux pratiques */}
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/montage" className="nav-link">
                {/* À propos de moi */}
                (en bref - cv)
              </NavLink>
            </li>

            {/* <li className="nav-item">
                <NavLink to="/blog" className="nav-link">
                  Logiciels
                </NavLink>
              </li> */}
            {/* 
              <li className="nav-item">
                <NavLink to="/montage" className="nav-link">
                  Monteur
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/projection" className="nav-link">
                  Salle de projection
                </NavLink>
              </li> */}

            <li className="nav-item">
              <NavLink to="/blog" className="nav-link">
                Blogue
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/blog" className="nav-link">
                Contact
              </NavLink>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
