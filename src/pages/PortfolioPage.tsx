import Multi from '../assets/images/portfolio_thumbs/thumb_multiplayer.jpg'
import Brain from '../assets/images/portfolio_thumbs/thumb_cerveau.jpg'
import Relax from '../assets/images/portfolio_thumbs/thumb_relax.jpg'
import Satellite from '../assets/images/portfolio_thumbs/thumb_satellite.jpg'
import Vaisseau from '../assets/images/portfolio_thumbs/thumb_vaisseau.jpg'
import PageTitle from '../components/PageTitle'

const Portfolio = () => {
  return (
    <>
      <PageTitle>Portfolio</PageTitle>
      <div className='container'>
        <section>
          <h1>Portfolio.</h1>
          <div className='subheading'>Quelques projets sélectionnés</div>

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
        </section>
      </div>


      <section className='full-width-split-screen'>
        <img src={Vaisseau} />
        <div>
          <a href='/portfolio/vaisseau'><h2>Vaisseau Spatial</h2></a>
          Une animation procédurale JavaScript pouvant être contrôlée depuis le clavier.
        </div>
      </section>

      <section className='full-width-split-screen'>
        <div>
          <a href='/portfolio/multiplayer'><h2>Multiplayer Adventure</h2></a>
          Un jeu vidéo 2D en JavaScript.
        </div>
        <img src={Multi} />
      </section>

      <section className='full-width-split-screen'>
        <img src={Relax} />
        <div>
          <a href='/portfolio/relaxation'><h2>Relaxation</h2></a>
          Une animation simple codée en SVG.
        </div>
      </section>

      <section className='full-width-split-screen'>
        <div>
          <a href='/portfolio/satellite'><h2>Simulation de l'orbite du téléscope James Webb</h2></a>
          Une animation OpenGL démontrant un satellite en orbite.
        </div>
        <img src={Satellite} />
      </section>

      <section className='full-width-split-screen'>
        <img src={Brain} />
        <div>
          <a href='/portfolio/cerveau'><h2>Cerveau</h2></a>
          Visualisation ThreeJS d'un cerveau de souris.
        </div>
      </section>

    </>
  );
};

export default Portfolio;
