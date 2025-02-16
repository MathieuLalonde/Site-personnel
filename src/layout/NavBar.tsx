// import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul className="navbar">

        {/* TODO: convertir les items en components */}

        <li className="nav-item">
          <a href="/introduction" className="nav-link">
            intro
          </a>
        </li>

        {/* <li className="nav-item">
          <NavLink to="/montage" className="nav-link">
            en bref
          </NavLink>
        </li> */}

        <li className="nav-item">
          <a href="/montage" className="nav-link">
            {/* À propos de moi */}
            montage
          </a>
        </li>

        <li className="nav-item">
          <a href="/webdev" className="nav-link">
            web
            {/* travaux pratiques */}
          </a>
        </li>

        <li className="nav-item">
          <a href="https://flickr.com/photos/mathieulalonde/" className="nav-link" target="_blank">
            photo
          </a>
        </li>

        {/* <li className="nav-item">
                <NavLink to="/blog" className="nav-link">
                  Logiciels
                </NavLink>
              </li>

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
          <a href="/blog" className="nav-link">
            Blogue
          </a>
        </li>

        {/* <li className="nav-item">
          <a href="/coordonnees" className="nav-link">
            Contact
          </a>
        </li> */}

      </ul>
    </nav>
  );
};

export default NavBar;
