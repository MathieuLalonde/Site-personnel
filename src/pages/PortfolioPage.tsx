import Multi from '../assets/images/portfolio/multiplayer.webp'
import Brain from '../assets/images/portfolio/cerveau.webp'
import Relax from '../assets/images/portfolio/relax.webp'
import Satellite from '../assets/images/portfolio/satellite.webp'
import Vaisseau from '../assets/images/portfolio/vaisseau.webp'
import PageTitle from '../components/PageTitle'
import AboutCard from '../components/AboutCard'
import PostList from '../components/PostList'

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
            la technologie et l'informatique ont été une partie prenante de ma vie &mdash;
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
          <a href='/webdev/vaisseau'><h2 className='lineHeightUp'>Vaisseau Spatial</h2></a>
          <p className='lineHeightUp'>Une animation procédurale <strong><em>JavaScript</em></strong> pouvant être contrôlée depuis le clavier.</p>
          <a href='/webdev/vaisseau'>Plus d'information ...</a>
        </div>
      </section>

      <section className='full-width-split-screen slideUpFade'>
        <div>
          <a href='/webdev/multiplayer'><h2 className='lineHeightUp'>Multiplayer Adventure</h2></a>
          <p className='lineHeightUp'>Jeu <em><strong>JavaScript</strong></em> conçu en trois sprints <strong><em>Agile</em></strong> au sein d'une équipe de programmeurs
            à partir d’une base de code non-optimale préexistante.</p>
          <a href='/webdev/multiplayer'>Plus d'information ...</a>
        </div>
        <img src={Multi} />
      </section>

      <section className='full-width-split-screen slideUpFade'>
        <img src={Relax} />
        <div>
          <a href='/webdev/relaxation'><h2 className='lineHeightUp'>Relaxation</h2></a>
          <p className='lineHeightUp'>Une animation simple codée en <strong><em>SVG (SMIL).</em></strong></p>
          <a href='/webdev/relaxation'>Plus d'information ...</a>
        </div>
      </section>

      <section className='full-width-split-screen slideUpFade'>
        <div>
          <a href='/webdev/satellite'><h2 className='lineHeightUp'>Simulation de l'orbite du téléscope James Webb</h2></a>
          <p className='lineHeightUp'>Animation <strong><em>OpenGL</em></strong> démontrant un satellite en orbite autour de la terre,
            elle-même en orbite autour du soleil. Les étoiles dans le ciel sont générées de façon procédurale.
          </p>
          <a href='/webdev/satellite'>Plus d'information ...</a>
        </div>
        <img src={Satellite} />
      </section>

      <section className='full-width-split-screen slideUpFade'>
        <img src={Brain} />
        <div>
          <a href='/webdev/cerveau'><h2 className='lineHeightUp'>Cerveau</h2></a>
          <p className='lineHeightUp'>Visualisation <em><strong>ThreeJS</strong></em> de vaisseaux sanguins à l'intérieur du cerveau d'une souris.</p>
          <a href='/webdev/cerveau'>Plus d'information ...</a>
        </div>
      </section>

      <br />
      <div className='container slideUp'>
        <h2>Dernièrement, sur le blogue :</h2>
        <div className="postlist--bestof">
          <PostList label='top3' quantity={3} />
        </div>

        <AboutCard />
      </div>
    </>
  );
};

export default Portfolio;
