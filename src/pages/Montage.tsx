import AboutCard from '../components/AboutCard';
import PageTitle from '../components/PageTitle';
import TVLogos from '../components/TVLogos';

import BlogHeader from '../components/BlogHeader';
import Glitch from '../components/glitch';
import PostList from '../components/PostList';
import MedDot from '../components/MedDot';
import VideoPlayer from '../components/VideoPlayer';



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

        <div className='container'>
          <p>
            Voilà déjà plus de 20 ans déjà que j’œuvre dans les médias à titre de monteur et de réalisateur-monteur dans les domaines du documentaire, de la publicité, de la corpo et du magazine&nbsp;télé.
          </p>

          <p>
            Autant que possible, j'aime suivre un projet du début à la fin; monter le contenu, la structure, le rythme, ajouter de la musique et des sons, faire les effets, la finition, l'étalonnage des couleurs...
          </p>

          <VideoPlayer src="https://player.vimeo.com/video/244261388?h=d4a2cd0241" />

          <p>
            Au fil du temps, j'ai eu la chance de travailler sur des productions qui ont été retransmises ici et partout à travers le&nbsp;monde.
          </p>

          <TVLogos />
        </div>


        <section className='portfolio-montage'>
          <div>
            <h3>
              Campagne de socio-financement
            </h3>
            <h2>
              Masson Village
            </h2>
            <p>
              Réalisation, caméra, montage, couleur, mix sonore (...et une grande partie des photos)
            </p>
            <p>
              Le défi ici était de concevoir une vidéo promotionelle autour de photographies d'évènements sans trop en perdre l'énergie et le mouvement. 
            </p>
          </div>
            <VideoPlayer src="https://player.vimeo.com/video/1004492200?h=d4a2cd0241" />
        </section>

        <section className='portfolio-montage'>
            <VideoPlayer src="https://www.youtube.com/embed/hG2L0N7FVPk?si=D60Hwy7lB-kVoeA6" />
          <div>
            <h3>Série docu-réalité</h3>
            <h2>
              Mordus de course
            </h2>
            <p>
              Montage
            </p>
            <p>
              Cette série était tournée à 6 caméras dont un drone et 3 GoPros pour capturer tous les aspects d'une course, mais à la fin, l'histoire passe toujours par l'émotion. 
            </p>

          </div>
        </section>

        <section className='portfolio-montage'>
          <div>
            <h3>Magazine jeunesse</h3>
            <h2>
              Brigade Animo
            </h2>
            <p>
              Montage, couleur, finition
            </p>
            <p>
              <em>
                Prix d'excellence Alliance Médias Jeunesse 2014&nbsp;: Meilleure émission de télévision&nbsp;- Acquisition de connaissances et développement du sens critique.
              </em>
            </p>
            <p>
              Visionnez les premières saisons gratuitement sur <a href='https://www.tfo.org/serie/brigade-animo/002032433'>TFO</a>
            </p>
          </div>
            <VideoPlayer src="https://www.youtube.com/embed/8qpk6wW0LuQ?si=jkk9-AvAxsX-sYpa" />
        </section>

        <section className='portfolio-montage'>
            <VideoPlayer src="https://www.youtube.com/embed/NRX_yeGoMw0?si=B2U7cm6sNQvWAT8q" />
          <div>
            <h3>
              Série docu-portrait
            </h3>
            <h2>
              De père en fils
            </h2>
            <p>
              Montage
            </p>
            <p>
              Portraits de pères et de fils unis par la passion de leur métier commun. Chaque épisode trace les contours, l'histoire et l'évolution du métier qui les fait vivre et auquel ils ont tous deux donné un visage humain.
            </p>
            <p>
              Visionnez la série complète gratuitement sur <a href='https://www.tv5unis.ca/de-pere-en-fils/saisons/1'>TV5 Unis</a>
            </p>
          </div>
        </section>

        <section className='portfolio-montage'>
          <div>
            <h3>
              Publicité (version longue)
            </h3>
            <h2>
              Les&nbsp;Éleveurs de porcs du&nbsp;Québec
            </h2>
            <p>
              Montage
            </p>
            <p>
              Une histoire mémorable de relève familiale : Kim Loranger raconte comment elle a repris la ferme familiale.
            </p>
          </div>
            <VideoPlayer src="https://www.youtube.com/embed/_WGSCVTkvzg?si=cDWxh34mfzIQ236A" />
        </section>

        

        <div className='container'>
          <p>
            Vous pouvez aussi visionner quelques unes de mes productions antérieures sur <em><a href='https://www.youtube.com/@mathieulalonde' target='_blank'>
            ma chaîne YouTube.
            </a></em>
          </p>

        </div>
      </article>

      <MedDot />

      <div className='container'>




        {/* <h3>Quelques vidéos</h3> */}

        {/* <VideoStore /> */}


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
