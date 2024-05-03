import { Link } from "react-router-dom";

const Respiration = () => {
  return (
    <div className="container">
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

        <p>Animation SVG simple.</p>
      </article>
    </div>
  )
};

export default Respiration
