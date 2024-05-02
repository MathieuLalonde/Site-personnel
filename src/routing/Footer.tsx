import { NavLink } from "react-router-dom";

import Logo from '../assets/logo.svg'

const Footer = () => {
  return (
    <footer>
      <NavLink to="/">
        <img src={Logo} alt="Le petit logo de Mathieu Lalonde" />
      </NavLink>
      © Mathieu Lalonde
    </footer>
  );
};

export default Footer;
