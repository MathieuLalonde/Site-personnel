import { NavLink } from "react-router-dom";

import Logo from '../assets/logo.svg'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <NavLink to="/">
        <img src={Logo} alt="Le petit logo de Mathieu Lalonde" />
      </NavLink>
      <br />
      {/* © Mathieu Lalonde */}
    </footer>
  );
};

export default Footer;
