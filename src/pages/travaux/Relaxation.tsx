import { Link } from "react-router-dom";
import PageTitle from "../../components/PageTitle";

const Relaxation = () => {
  return (
    <div className="container">
      <PageTitle>Relaxation</PageTitle>
      <article>
        <ul className="breadcrumb">
          <li><Link to="/portfolio" >Portfolio</Link></li>
          <li>SVG</li>
          <li>Animation</li>
        </ul>
        <h1>Relaxation.</h1>
        <div className="squarecontainer" >
          <img
            src="/travaux/svg_respiration/respiration.svg"
            style={{
              backgroundImage: 'url("/travaux/svg_respiration/ciel.jpg")',
              backgroundSize: 'cover',
            }} />
        </div>
        <p className="tiny">
        </p>

        <h2>Description</h2>

        <p>Animation simple codée en <strong><em>SVG (SMIL)</em>.</strong> Tout est créé par section et certains éléments, tels les yeux, sont réutilisés. </p>
      </article>
    </div>
  )
};

export default Relaxation
