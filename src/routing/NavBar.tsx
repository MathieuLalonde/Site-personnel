import { NavLink } from "react-router-dom";

import './NavBar.css'
import Logo from '../assets/logo.svg'

const NavBar = () => {
  return (
    <>
      <div className='en_tete' >
        <NavLink to="/" className="nav-link">
          <img src={Logo} className='head-logo' alt="Le super logo de Mathieu Lalonde"/>
        </NavLink>
      </div>
      <nav
        className="navbar navbar-expand-lg"
        style={{ background: '#f0f0f0', marginBottom: '1rem' }}
      >
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">

              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Accueil
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/dev" className="nav-link">
                  Developpeur
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/montage" className="nav-link">
                  Monteur
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/blog" className="nav-link">
                  Blog
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink to="/blog" className="nav-link">
                  Résumé
                </NavLink>
              </li> */}

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
