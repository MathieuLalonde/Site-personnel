import AboutCard from '../components/AboutCard';
import PageTitle from '../components/PageTitle';
import TVLogos from '../components/TVLogos';
import VideoStore from '../components/VideoStore';
import VideoPlayer from '../components/VideoPlayer';

import Gemeaux from '../assets/logos/Gemeaux.svg'
import Laurels from '../assets/logos/Laurel_Wreath.svg'

import Mirror from '../assets/images/mirroir.jpg'
import Interrogatoire from '../assets/images/interrogatoire.jpg'
import Jimmy from '../assets/images/jimmy.jpg'
import Fermier3 from '../assets/images/fermier3.jpg'



const Montage = () => {
  return (
    <>
      <div className='container'>
        <PageTitle>Montage</PageTitle>

        <h1>Montage.</h1>
        <div className='subheading'>Comment je suis arrivé ici.</div>

      </div>


      <div >
        <img src={Mirror} style={{ width: '100%', height: '12rem', objectFit: 'cover', objectPosition: '0 53%' }} />
        <br />
      </div>


      <div className='container'>
        <p>
          J'ai commencé à faire de la vidéo vers l'âge de 12 ans.
        </p>

        <p>
          J'ai écrit des scénarios, tourné des court-métrages, réalisé des
          captations de pièces de théâtre, de concerts et de mariages; tout ça
          avant d'avoir 20 ans.
        </p>
        {/* 
      <div className="citation">
        <span className="guillemets">&#8220;</span>
        C'est très bon, c'est très drôle...
        <span className="guillemets">&#8221;</span>
      </div>
      <p className="source">&#8212; François Jobin, <br />La Bande Magnétique 1994, TFO</p> */}

        <div className="citation">
          <span className="guillemets">&#8220;</span>
          C'est une super vidéo... Bravo!
          <span className="guillemets">&#8221;</span>
        </div>
        <p className="source">&#8212; Jean-Sébastien Busque, <br />La Bande Magnétique 1994, TFO</p>


        <img src={Fermier3} style={{ width: '100%', height: '12rem', objectFit: 'cover', objectPosition: '0 63%' }} />
        <br />

        <p>
          Plus tard, j'ai obtenu un diplôme en production télévisuelle et je suis
          devenu monteur de séries documentaires, magasines et de publicités.
        </p>

        <div className='center'>
          <img src={Laurels} className='gemeaux center' style={{ height: '3rem' }} />
          <p>GAGNANT Prix REEL 1996 :</p>
          <p><em>L'interrogatoire</em>, Meilleure production étudiante
            <p className='tiny'>Association du film et de la télévision d'Ottawa-Hull (OHFTA)</p>
          </p>
        </div>

        <img src={Interrogatoire} style={{ width: '100%', height: '12rem', objectFit: 'cover', objectPosition: '0 56%' }} />
        <br />

        <p>
          Avec l'arrivée d'internet, j'ai commencé à construire des sites webs pour mes employeurs...
          et pour le plaisir.
        </p>

        <p>
          J'ai toujours aimé raconter des histoires; la résolution de problème,
          le rythme, le contraste, l'émotion.
        </p>


        <img src={Gemeaux} className='gemeaux center' />

        <div className='center'>
          <p>FINALISTE Prix Gémeaux 2005 :</p>
          <p><em>
            {/* Coeurs Batailleurs
            :  */}
            Il était une fois Jimmy Meaux
          </em>,
            Meilleur montage : <br />
            <p>
              <span className='small' >documentaire, affaires publiques, reportage, biographie &#8212; série</span>
              <br/>
              <span className='tiny'>Académie canadienne du cinéma et de la télévision (ACCT)</span>
            </p>

          </p>
        </div>

        <img src={Jimmy} style={{ width: '100%', height: '12rem', objectFit: 'cover' }} />

        <p>J'ai travaillé sur des émissions diffusées partout à travers le monde.</p>

        <TVLogos />

        <p>
          En voici quelques extraits :
        </p>


        <VideoPlayer src="https://player.vimeo.com/video/244261388?h=d4a2cd0241" />






        {/* Visionnez quelques unes de mes productions dans la salle de projection : (lien) */}

        Dernièrement, sur le blog:





        <h3>Quelques vidéos</h3>

        <VideoStore />

        <h3>Sur le blog en ce moment</h3>


        <AboutCard />

        <p></p>
      </div>
    </>
  );
};

export default Montage;
