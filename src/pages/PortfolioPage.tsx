import Multi from '../assets/images/portfolio/multiplayer.webp'
import Brain from '../assets/images/portfolio/cerveau.webp'
import Relax from '../assets/images/portfolio/relax.webp'
import Satellite from '../assets/images/portfolio/satellite.webp'
import Vaisseau from '../assets/images/portfolio/vaisseau.webp'
import PageTitle from '../components/PageTitle'
import AboutCard from '../components/AboutCard'
import MedDot from '../components/MedDot'

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


      <section className='full-width-split-screen slideUpFade'>
        <img src={Vaisseau} />
        <div>
          <a href='/portfolio/vaisseau'><h2>Vaisseau Spatial</h2></a>
          <p>Une animation procédurale <strong><em>JavaScript</em></strong> pouvant être contrôlée depuis le clavier.</p>
          <a href='/portfolio/vaisseau'>Plus d'information ...</a>
        </div>
      </section>

      <section className='full-width-split-screen slideUpFade'>
        <div>
          <a href='/portfolio/multiplayer'><h2>Multiplayer Adventure</h2></a>
          <p>Jeu <em><strong>JavaScript</strong></em> conçu en trois sprints <strong><em>Agile</em></strong> au sein d'une équipe de programmeurs
            à partir d’une base de code non-optimale préexistante.</p>
          <a href='/portfolio/multiplayer'>Plus d'information ...</a>
        </div>
        <img src={Multi} />
      </section>

      <section className='full-width-split-screen slideUpFade'>
        <img src={Relax} />
        <div>
          <a href='/portfolio/relaxation'><h2>Relaxation</h2></a>
          <p>Une animation simple codée en <strong><em>SVG (SMIL).</em></strong></p>
          <a href='/portfolio/relaxation'>Plus d'information ...</a>
        </div>
      </section>

      <section className='full-width-split-screen slideUpFade'>
        <div>
          <a href='/portfolio/satellite'><h2>Simulation de l'orbite du téléscope James Webb</h2></a>
          <p>Animation <strong><em>OpenGL</em></strong> démontrant un satellite en orbite autour de la terre,
            elle-même en orbite autour du soleil. Les étoiles dans le ciel sont générées de façon procédurale.
          </p>
          <a href='/portfolio/satellite'>Plus d'information ...</a>
        </div>
        <img src={Satellite} />
      </section>

      <section className='full-width-split-screen slideUpFade'>
        <img src={Brain} />
        <div>
          <a href='/portfolio/cerveau'><h2>Cerveau</h2></a>
          <p>Visualisation <em><strong>ThreeJS</strong></em> de vaisseaux sanguins à l'intérieur du cerveau d'une souris.</p>
          <a href='/portfolio/cerveau'>Plus d'information ...</a>
        </div>
      </section>
      
      <div className='container'>
        <AboutCard className="slideUp" />
      </div>
    </>
  );
};

export default Portfolio;
