import PageTitle from '../components/PageTitle';
import TVLogos from '../components/TVLogos';
import VideoStore from '../components/VideoStore';
import VideoPlayer from '../components/VideoPlayer';

import Gemeaux from '../assets/logos/Gemeaux.svg'

      


const Montage = () => {
  return (
    <div className='container'>
      <PageTitle>Montage</PageTitle>
      
      <h1>Montage...</h1>
      <h3>Texte intro</h3>
      <p>Historique</p>

      <p>
        J'ai commencé à m'intéresser à la vidéo vers l'âge de 12 ans.
      </p>

      <p>
        J'ai écrit des scénarios, tourné des court-métrages, réalisé des
        captations de pièces de théâtre, de concerts et de mariages; tout ça
        avant d'avoir 20 ans.
      </p>

      *"C'est très bon, c'est très drôle"*
      -- François Jobin, La Bande Magnétique 1994, TFO

      *"C'est une super vidéo... Bravo!"*
      -- Jean-Sébastien Busque, La Bande Magnétique 1994, TFO

      <p>(photo)</p>

      <p>
        Plus tard, j'ai obtenu un diplôme en production télévisuelle et je suis
        devenu monteur de séries documentaires, magasines et de publicités.
      </p>

      GAGNANT Prix REEL Awards 1996 :
      L'interrogatoire
      Meilleure production étudiante,
      Ottawa-Hull Film and Television Association (OHFTA)

      <p>(photo)</p>

      <p>
        J'ai toujours aimé raconter des histoires; la résolution de problème,
        le rythme, le contraste, l'émotion.
      </p>

      
      <img src={Gemeaux} className='gemeaux' />

      Finaliste Prix Gémeaux 2005 :
      Coeurs Batailleurs: Il était une fois Jimmy Meaux
      Meilleur montage : Documentaire, affaires publiques, reportage, biographie -- série
      Académie canadienne du cinéma et de la télévision (ACCT)

      <p>(photo)</p>

      <VideoPlayer src="https://player.vimeo.com/video/244261388?h=d4a2cd0241" />

      J'ai travaillé sur des émissions diffusées partout à travers le monde...

      <TVLogos />

      {/* Visionnez quelques unes de mes productions dans la salle de projection : (lien) */}

      Dernièrement, sur le blog:

      

      

      <h3>Quelques vidéos</h3>

      <VideoStore />

      <h3>Sur le blog en ce moment</h3>


      <p>Lien vers IMDB</p>
      <p>LinkedIn</p>

      <h3>Contact</h3>

      <p></p>
    </div>
  );
};

export default Montage;
