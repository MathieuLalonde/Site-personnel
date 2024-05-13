import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import PageTitle from '../components/PageTitle';
import Footer from '../layout/Footer';

import VideoPlayer from '../components/VideoPlayer';
import NavBar from '../layout/NavBar';
import AboutCard from '../components/AboutCard';
import PostList from "../components/PostList";
import MedDot from "../components/MedDot";

const HomePage = () => {
  const [count, setCount] = useState(0);
  const [splashVariant, setSplashVariant] = useState(0);
  const words: String[] = ["Créer. ", "Coder. ", "Communiquer. ", "Collaborer. ", "Captiver. ", "Concevoir. "];

  useEffect(() => {
    // Setting the interval
    const interval = setInterval(() => {
      count + 1 < words.length ? setCount(count + 1) : setCount(0);
      splashVariant < 1 ? setSplashVariant(1) : setSplashVariant(0);
    }, 1200);

    // Clearing the interval
    return () => clearInterval(interval);
  }, [count]);

  return (
    <>
      <PageTitle></PageTitle>

      <NavBar />

      <div className='splash' >
        <div className='splash__text'>
          {words[count]}
        </div>

        <div className={`splash__shadow splash__glitch${splashVariant}`}>
          {words[count]}
        </div>

        {/* <div className='hide-text'>
          {words}
        </div> */}

        <div className="arrow--delay">
          <div className='arrow' aria-hidden="true">
            &darr;
          </div>
        </div>

      </div>

      <article>
        <div className='splash--fade'>
          <div className='container'>

            <h1 id='intro'>Introduction.</h1>
            <div className='subheading'>Permettez-moi de me présenter.</div>

            <p>
              Bonjour, c'est moi Mathieu. Je suis un passionné de technologie; développeur logiciel, vidéaste,
              et parfois photographe et graphiste sur les bords...

              Je viens tout juste de compléter un baccalauréat en informatique et génie logiciel et j'ai
              hâte d'en apprendre encore plus !
            </p>
            <p>
              Si tu veux en savoir plus, je crois que cette vidéo résume pas mal bien qui je suis. :
            </p>
          </div>
        </div>

        <div className='container'>
          <VideoPlayer src="https://www.youtube-nocookie.com/embed/DXUfddvlo8Q?si=0W6tFwgVAGDSc1o7" />
          <p>
            Je suis très à l’aise avec la programmation orienté-objet, aussi bien sur Windows que Linux.
            Je suis très confortable avec l’utilisation de Git, les bases de données SQL, la programmation
            Java, Python, JS/React, les API REST et les Microservices.
          </p><p>
            Pendant plus de 20 ans, j’ai travaillé dans les médias à titre de monteur dans les domaines de
            la télévision, du documentaire et de la publicité. C’est un métier qui m’a appris à travailler
            aussi bien en équipe que de manière autonome, à résoudre des problèmes, à gérer projets, exigences
            et échéanciers.
          </p>

          {/* <h3>Quelques exemples logiciels...</h3> */}
          <p>Jetez un coup d’œil à mon portfolio pour voir quelques petits projets sur lesquels j'ai eu la
            chance de travailler</p>
        </div>
      </article>

      <MedDot />

      <section className='container'>
        <br />
        <h2>Dernièrement, sur le blogue :</h2>

        <div className="postlist--bestof">
          <PostList quantity={3} />
        </div>
      </section>

      <div className='container'>
        <AboutCard />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
