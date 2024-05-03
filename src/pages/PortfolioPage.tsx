import Multi from '../assets/images/portfolio_thumbs/thumb_multiplayer.jpg'
import Brain from '../assets/images/portfolio_thumbs/thumb_cerveau.jpg'
import Relax from '../assets/images/portfolio_thumbs/thumb_relax.jpg'
import Satellite from '../assets/images/portfolio_thumbs/thumb_satellite.jpg'
import Vaisseau from '../assets/images/portfolio_thumbs/thumb_vaisseau.jpg'

const Portfolio = () => {
  return (
    <>
      <div className='container'>
        <article>
          <h1>Portfolio.</h1>
          <div className='subheading'>Le meilleur de mes travaux.</div>

          <p>
            Bien avant de développer une passion pour le cinéma et la télévision,
            la technologie et l'informatique ont été une partie prenante de ma vie;
            au point où je me souviens encore de toutes les spécifications techniques de mes
            premiers ordinateurs (beiges!).
          </p>
          <p>
            L'informatique pour moi, c'est un outil; un outil de communication, un canevas sur
            lequel on peut tout créer. C'est aussi un formidable outil qui permet de créer d'autres outils...
          </p>
        </article>

        <div>
          <div className="post-card">
            <img src={Multi} className='blogphoto' />
            <a href='/portfolio/multiplayer'>Multiplayer Adventure</a>
            <hr />
            Un jeu vidéo 2D en JavaScript.
          </div>

          <div className="post-card">
            <img src={Brain} className='blogphoto' />
            <a href='/portfolio/cerveau'>Cerveau</a>
            <hr />
            Visualisation ThreeJS d'un cerveau de souris.
          </div>

          <div className="post-card">
            <img src={Relax} className='blogphoto' />
            <a href='/portfolio/relaxation'>Relaxation</a>
            <hr />
            Une animation simple codée en SVG.
          </div>

          <div className="post-card">
            <img src={Satellite} className='blogphoto' />
            <a href='/portfolio/satellite'>Simulation de l'orbite du téléscope James Webb</a>
            <hr />
            Une animation OpenGL démontrant un satellite en orbite.
          </div>

          <div className="post-card">
            <img src={Vaisseau} className='blogphoto' />
            <a href='/portfolio/vaisseau'>Vaisseau Spatial</a>
            <hr />
            Une animation procédurale JavaScript pouvant être contrôlée depuis le clavier.
          </div>
        </div>


      </div>
    </>
  );
};

export default Portfolio;
