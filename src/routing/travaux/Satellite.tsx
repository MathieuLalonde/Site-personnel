import { Link } from "react-router-dom";
import PageTitle from "../../components/PageTitle";

const Satellite = () => {
  return (
    <div className="container">
      <PageTitle>Satellite</PageTitle>
      <article>
        <ul className="breadcrumb">
          <li><Link to="/portfolio" >Portfolio</Link></li>
          <li>OpenGL</li>
        </ul>
        {/* <div className='preheading'>Portfolio &nbsp;&#62;&nbsp; OpenGL</div> */}
        <h1>Simulation de l'orbite du telescope James Webb.</h1>
        <div className="videocontainer">
          <iframe className="videoplayer" src="/travaux/opengl_satellite/index.html" />
        </div>
        <p className="tiny">
          <b>Légende :</b> Points de Lagrange L1 (rouge), L2 (vert), L3 (bleu), L4 (jaune)
          et L5 (cyan) pour le système Terre-Soleil.
        </p>

        <h2>Description</h2>

        <p>Animation OpenGL démontrant un satellite en orbite autour de la terre,
          elle-même en orbite autour du soleil. Il faut notter que les étoiles dans le ciel sont générées de façon procédurale.
        </p>

        <h2>Instructions</h2>

        <p>L'animation peut être contrôlée avec la souris</p>
      </article>
    </div>
  )
};

export default Satellite