import { NavLink } from "react-router-dom";

import Logo from "../assets/logo.svg";
import Glitch from "../components/glitch";

const Header = () => {
  return (
    <div className="en_tete">
    <NavLink to="/introduction" className="nav-link">
        <Glitch>
          <img src={Logo} className="head-logo" alt="Le super logo de Mathieu Lalonde" />
        </Glitch>
    </NavLink>
    </div>
  );
};

export default Header;
