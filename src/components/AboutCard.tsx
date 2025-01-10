import { IconContext } from "react-icons";

// import { BiCameraMovie } from "react-icons/bi";
import { FaImdb } from "react-icons/fa"
import {
  FaFlickr,
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
import { GrDocumentPdf } from "react-icons/gr";

import Selfie from '../assets/images/selfie_sm.webp';

interface Props {
  className?: string;
}

const AboutCard = ({ className }: Props) => {
  return (
    <aside className={`about_card ${className}`}>

      <img src={Selfie} className='selfie' alt="Photo de Mathieu"></img>

      <div>

        <h3>
          Mathieu Lalonde
        </h3>
        Monteur&nbsp;télévisuel et&nbsp;Développeur web (B.Sc.A.)
        <hr />
        <div className="about_coordonnes">
          <div className="about_coor_icon">
            <IoMdMail size="15" title="Courriel" />
          </div>
          <div>
            moi<span className="obfuscate"> so .long </span>
            @<span className="obfuscate"> and </span>
            mathieu<span className="obfuscate"> thanks </span>
            lalonde<span className="obfuscate"> for </span>
            .<span className="obfuscate"> @all </span>
            com<span className="obfuscate"> the fish. </span>
          </div>

          <div className="about_coor_icon">
            <FaPhone size="13" title="Téléphone" />
          </div>
          <div>
            514&#8209;842<span className="obfuscate">6 * 9 </span>
            &#8209;7<span className="obfuscate"> = 42</span>178
          </div>


          <div className="about_coor_icon">
            <FaLocationDot size="15" title="Adresse" />
          </div>
          <div>
            Montréal, QC
          </div>
        </div>

        <div className="about_coordonnes">
          <div className="about_coor_icon">
            <GrDocumentPdf size="16" title="Document PDF" />
          </div>
          <div>
            CV de monteur&nbsp;:&nbsp;
            <a href="/CV_Mathieu_Lalonde_Monteur.pdf" target="_blank">
              Français
            </a>
            &nbsp;/&nbsp; 
            <a href="/CV_Mathieu_Lalonde_Editor.pdf" target="_blank">
              English
            </a>
          </div>

          <div className="about_coor_icon">
            <GrDocumentPdf size="16" title="Document PDF" />
          </div>
          <div>
            CV de développeur&nbsp;:&nbsp;
            <a href="/CV_Mathieu_Lalonde_FR.pdf" target="_blank">
              Français
            </a>
            &nbsp;/&nbsp;
            <a href="/CV_Mathieu_Lalonde_EN.pdf" target="_blank">
              English
            </a>
          </div>
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
          <a href="https://flickr.com/photos/mathieulalonde/" target="_blank">
            <FaFlickr className="about_link_icon" title="Flickr" />
          </a>
          {/*  <Gi3DGlasses />  */}
        </div>
      </IconContext.Provider>

    </aside>
  )
}

export default AboutCard