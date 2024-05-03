import { NavLink } from "react-router-dom";

import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <div className="en_tete">
    <NavLink to="/" className="nav-link">
        <img src={Logo} className="head-logo" alt="Le super logo de Mathieu Lalonde" />
    </NavLink>
    </div>
  );
};

export default Header;
