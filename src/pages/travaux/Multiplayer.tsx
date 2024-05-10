import { Link } from "react-router-dom";
import PageTitle from "../../components/PageTitle";
import Multi from '../../assets/images/portfolio/multiplayer.webp'

const Multiplayer = () => {
  return (
    <div className="container">
      <PageTitle>Multiplayer Adventure</PageTitle>
      <article>
        <ul className="breadcrumb">
          <li><Link to="/portfolio" >Portfolio</Link></li>
          <li>JavaScript</li>
          <li>Jeu vidéo 2D</li>
        </ul>
        <h1>Multiplayer Adventure.</h1>
        <div className="subheading">Un jeu vidéo 2D que vous pouvez essayer maintenant !</div>
        <img className="blogphoto" src={Multi} />
        <p className="tiny">
        </p>

        <h2>Description</h2>

        <p>
          Jeu <em>JavaScript</em> conçu en trois sprints <em>Agile</em> au sein d'une équipe de programmeurs à partir d’une base de code
          non-optimale préexistante.
        </p>

        <h2>Accomplissements</h2>
        <ul>
          <li>
            Implémentation de nouveaux niveaux de jeu modulaires pouvant être enchaînés les uns
            après les autres durant le jeu.
          </li>
          <br />
          <li>
            Un ensemble de fonctions aide à la construction d’éléments plus complexes
            à partir des tuiles de construction de base. (Chaque niveau utilise maintenant une thématique graphique interchangeable
            : jungle, désert, ville, neige, volcans…)
          </li>
          <br />
          <li>
            La description de chacun de ces niveaux et personnages est stockée en format JSON.
          </li>
        </ul>


        <h2>Instructions</h2>

        <p>
          Rendez-vous sur
          <code><a href="http://mpa.mathieulalonde.com" target='_blank'> mpa.mathieulalonde.com</a></code>,
          choisissez votre niveau de difficulté et sélectionnez <code>play</code>; c'est aussi simple que ça !</p>

        <p>
          Les touches <code>A</code> et <code>D</code> permettent d'avancer, l'<code>espace</code> de sauter,
          et <code>E</code> d'attaquer ses ennemis.
        </p>

        <p></p>
      </article>
    </div>
  )
};

export default Multiplayer