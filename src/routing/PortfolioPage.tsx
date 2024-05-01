import { Outlet, ScrollRestoration } from 'react-router-dom';
// import NavBar from './NavBar';
// import Footer from './Footer';
// import Header from './Header';

const Portfolio = () => {
  return (
    <>
      <div className='container'>
        <h2>
          Portfolio
        </h2>

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

      </div>
      <ScrollRestoration />
      <Outlet />
    </>
  );
};

export default Portfolio;
