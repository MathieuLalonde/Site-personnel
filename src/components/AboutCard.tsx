import { IconContext } from "react-icons";

// import { BiCameraMovie } from "react-icons/bi";
import { FaImdb } from "react-icons/fa"
import {
    FaGithub,
    FaLinkedin,
    FaLocationDot,
    FaPhone,
    FaVimeo,
    FaYoutube
} from "react-icons/fa6";
// import { FiExternalLink } from "react-icons/fi";
// import { Gi3DGlasses } from "react-icons/gi"
import { IoMdMail } from "react-icons/io";
// import { IoCutSharp } from "react-icons/io5";
// import { MdAlternateEmail } from "react-icons/md";

import './AboutCard.css'

const AboutCard = () => {
    return (
        <div className='about_card'>

            <img src='/selfie.jpg' className='selfie' alt="Photo de Mathieu"></img>

            <h5>
                Mathieu Lalonde
            </h5>
            Développeur logiciel (et monteur télévisuel)
            <hr />
            <div className="about_coordonnes">
                <div className="about_coor_icon">
                    <IoMdMail size="15" title="Courriel" />
                </div>
                <div>
                    moi@mathieulalonde.com
                </div>

                <div className="about_coor_icon">
                    <FaPhone size="13" title="Téléphone" />
                </div>
                <div>
                    514 842-7178
                </div>

                <div className="about_coor_icon">
                    <FaLocationDot size="15" title="Adresse" />
                </div>
                <div>
                    Montréal, QC <br />
                </div>
            </div>


            <IconContext.Provider value={{ size: "25" }}>
            <div className="about_link_icon_flex">
                <a href="https://linkedin.com/in/mathieu-lalonde" target="_blank">
                    <FaLinkedin className="about_link_icon" title="LinkedIn" />
                </a>
                <a href="https://github.com/MathieuLalonde" target="_blank">
                    <FaGithub className="about_link_icon" title="GitHub" />
                </a>
                <a href="https://imdb.com/name/nm7324790/" target="_blank">
                    <FaImdb className="about_link_icon" title="IMDB" />
                </a>
                <a href="https://youtube.com/@mathieulalonde" target="_blank">
                    <FaYoutube className="about_link_icon" title="Youtube" />
                </a>
                <a href="https://vimeo.com/levraimathieulalonde" target="_blank">
                    <FaVimeo className="about_link_icon" title="Vimeo" />
                </a>
                {/*  <Gi3DGlasses />  */}
            </div>
            </IconContext.Provider>

        </div>
    )
}

export default AboutCard