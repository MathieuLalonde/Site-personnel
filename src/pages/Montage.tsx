import AboutCard from '../components/AboutCard';
import PageTitle from '../components/PageTitle';
import TVLogos from '../components/TVLogos';
import VideoStore from '../components/VideoStore';
import VideoPlayer from '../components/VideoPlayer';

import Gemeaux from '../assets/logos/Gemeaux.svg'
import Laurels from '../assets/logos/Laurel_Wreath.svg'

// import Mirror from '../assets/images/mirroir.jpg'
import Interrogatoire from '../assets/images/montage/interrogatoire.webp'
import Jimmy from '../assets/images/montage/jimmy.webp'
import Fermier3 from '../assets/images/montage/fermier3.webp'
import BlogHeader from '../components/BlogHeader';
import Glitch from '../components/glitch';
import PostList from '../components/PostList';
import MedDot from '../components/MedDot';



const Montage = () => {
  return (
    <>
      <PageTitle>Montage</PageTitle>

      <article>
        <BlogHeader photo={'../mirroir.webp'}>
          <div>
            <Glitch>
              <h1>Montage.</h1>
              <div className='subheading'>Comment je suis arrivé ici.</div>
            </Glitch>
          </div>
        </BlogHeader>

        <section className='container'>
          <p>
            J'ai commencé à m'intéresser à la vidéo vers l'âge de 12 ans; à peu
            près au même moment que j'ai découvert l'informatique.
            J'ai écrit des scénarios, tourné des court-métrages, réalisé des
            captations de pièces de théâtre, de concerts et de mariages; tout ça
            avant d'avoir 20 ans.
          </p>

        </section>
        {/* 
          <div className="citation">
            <span className="guillemets">&#8220;</span>
            C'est très bon, c'est très drôle...
            <span className="guillemets">&#8221;</span>
          </div>
          <p className="source">&#8212; François Jobin, <br />La Bande Magnétique 1994, TFO</p> */}

        <div className='wide-image-with-text-overlay'>
          <div>
            <div className="citation blurFadeIn">
              <span className="guillemets">&#8220;</span>
              C'est une super vidéo... Bravo!
              <span className="guillemets">&#8221;</span>
            </div>
            <p className="source blurFadeIn">&#8212; Jean-Sébastien Busque, <br />La Bande Magnétique 1994, TFO</p>
          </div>

          <img src={Fermier3} style={{ objectPosition: '50% 58%' }} />
        </div>

        <section className='container'>
          <p>
            Plus tard, j'ai obtenu un diplôme en production télévisuelle et je suis
            devenu monteur de séries documentaires, magasines et de publicités.
            C'est aussi à ce moment là que j'ai commencé à construire des sites webs pour mes employeurs...
            et pour le plaisir.
          </p>
        </section>

        <div className='wide-image-with-text-overlay'>
          <img src={Interrogatoire} style={{ objectPosition: '50% 74%' }} />

          <br />
          <div className='center'>
            <img src={Laurels} className='gemeaux center fadeIn' style={{ height: '3rem' }} />
            <p className='blurFadeIn'>GAGNANT Prix REEL 1996 :
              <br />
              <em>L'interrogatoire</em>, Meilleure production étudiante
              <p className='tiny'>Association du film et de la télévision d'Ottawa-Hull (OHFTA)</p>
            </p>
          </div>
        </div>

        <section className='container'>
          <p>
            J'ai toujours aimé raconter des histoires : l'image, le&nbsp;contraste, le&nbsp;rythme, l'émotion; oui ...
            mais aussi la&nbsp;structure, la&nbsp;planification, la&nbsp;résolution de&nbsp;problème et la&nbsp;communication avec le public.
          </p>
        </section>

        <div className='wide-image-with-text-overlay'>
          <div className='center'>
            <img src={Gemeaux} className='gemeaux center fadeIn' style={{ objectPosition: '50% 55%' }} />
            <p className='blurFadeIn'>
              FINALISTE Prix Gémeaux 2005 :<br />
              <em>
                Coeurs Batailleurs
                :
                Il était une fois Jimmy Meaux
              </em>,
              <br />
              <span className='small' > Meilleur montage : documentaire, affaires&nbsp;publiques,&nbsp;reportage,&nbsp;biographie &#8212; série</span>
              <br />
              <span className='tiny'>Académie canadienne du cinéma et de la télévision (ACCT)</span>
            </p>
          </div>

          <img src={Jimmy} />
        </div>

        <div className='container'>

          <p>Au fil du temps, j'ai eu la chance de travaillr sur des émissions retransmises partout à travers le&nbsp;monde.</p>

          <TVLogos />

          <p>
            En voici quelques points saillants :
          </p>


          <VideoPlayer src="https://player.vimeo.com/video/244261388?h=d4a2cd0241" />


        </div>
      </article>

      <MedDot />

      <div className='container'>

        {/* Visionnez quelques unes de mes productions dans la salle de projection : (lien) */}


        {/* <h3>Quelques vidéos</h3> */}

        <VideoStore />


        <br />
        <h2>Dernièrement, sur le blogue :</h2>

        <div className="postlist--bestof">
          <PostList label='montage' quantity={3} />
        </div>

        <AboutCard />
      </div>
    </>
  );
};

export default Montage;
