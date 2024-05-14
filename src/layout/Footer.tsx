// import { Link } from "react-router-dom";

import Logo from '../assets/logo.svg'

const Footer = () => {
  return (
    <footer>
      <a href="/introduction">
        <img src={Logo} alt="Le petit logo de Mathieu Lalonde" />
      </a>
      © Mathieu Lalonde
    </footer>
  );
};

export default Footer;
