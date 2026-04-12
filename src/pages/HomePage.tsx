import AboutCard from '../components/AboutCard';

import MedDot from '../components/MedDot';
// import { Link } from "react-router-dom";
import PageTitle from '../components/PageTitle';
import PostList from '../components/PostList';
import VideoPlayer from '../components/VideoPlayer';

function HomePage() {
  return (
    <>
      <PageTitle></PageTitle>

      <article>
        <div className="container">
          <h1 id="intro">Introduction.</h1>
          <div className="subheading">Permettez-moi de me présenter.</div>

          <p>
            Bonjour, c'est moi Mathieu. Je suis un passionné de technologie; monteur, vidéaste, développeur web,
            et parfois même photographe et graphiste sur les bords...
          </p>
          {/* <p>
            Si tu veux en savoir plus, cette vidéo résume plutôt bien qui je suis :
          </p> */}
          <p>
            Pendant plus de 20 ans, j’ai travaillé dans les médias à titre de monteur dans les domaines de
            la télévision, du documentaire et de la publicité. C’est un métier qui m’a appris à travailler
            aussi bien en équipe que de manière autonome, à résoudre des problèmes, à gérer projets, exigences
            et échéanciers.
          </p>
          <VideoPlayer src="https://www.youtube.com/embed/Nj51ciLQonI?si=ZqinYkaZO1-4j8vg" />
          <p>

            Entre temps, j'ai étendu mes horizons jusqu'à la photographie et le développement web.

            Je viens tout juste de compléter un baccalauréat en informatique et génie logiciel et je veux toujours en apprendre encore plus !
          </p>

          <p>
            Pour plus d'informations et des exemples de mes productions, consultez les liens en haut de la page !
          </p>

          {/* <p>
            Je suis très à l’aise avec la programmation orientée-objet, aussi bien sur Windows que Linux.
            Je maîtrise l’utilisation de Git, les bases de données SQL, la programmation
            Java, Python, JS/React, les API REST et les Microservices.
          </p> */}
          {/* <h3>Quelques exemples logiciels...</h3> */}
          {/* <p>Jetez un coup d’œil à mon <a href="/webdev">portfolio</a> pour voir quelques petits projets sur lesquels j'ai eu la
            chance de travailler</p> */}
        </div>
      </article>

      <MedDot />

      <section className="container">
        <h2>Dernièrement, sur le blogue :</h2>

        <div className="postlist--bestof">
          <PostList quantity={3} />
        </div>
      </section>

      <div className="container">
        <AboutCard />
      </div>
    </>
  );
}

export default HomePage;
