// import { BiCameraMovie } from "react-icons/bi";
import {
    FaGithub,
    FaImdb,
    FaLinkedin,
    // FaLocationDot,
    FaPhone,
    FaVimeo,
    FaYoutube
} from "react-icons/fa6"
// import { FiExternalLink } from "react-icons/fi";
// import { Gi3DGlasses } from "react-icons/gi"
import { IoMdMail } from "react-icons/io";
// import { IoCutSharp } from "react-icons/io5";
// import { MdAlternateEmail } from "react-icons/md";

import './AboutCard.css'

const AboutCard = () => {
  return (
      <div className='about_card'>
          <img src='/selfie.jpg' className='selfie'></img>
          <h5>
              Mathieu Lalonde 
          </h5>
          Développeur logiciel (et monteur télévisuel)
          <hr />
          <IoMdMail /> moi@mathieulalonde.com<br />
          <FaPhone /> 514 842-7178<br />
          <br />
          <FaLinkedin /> &nbsp;&nbsp;&nbsp;
          {/* linkedin.com/in/mathieu-lalonde */}
          
          <FaGithub /> &nbsp;&nbsp; <FaImdb /> &nbsp;&nbsp; <FaYoutube /> &nbsp;&nbsp; <FaVimeo /> 
          {/* github.com/MathieuLalonde */}
          <br />
          {/* <FaLocationDot />
          <Gi3DGlasses />  */}

      </div>
  )
}

export default AboutCard