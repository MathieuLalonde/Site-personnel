

const Satellite = () => {
  return (
    <div className="container">
      <h1>Simulation du télescope James Webb</h1>
      <div className="videocontainer">
        <iframe className="videoplayer" src="/travaux/opengl_satellite/index.html" />
      </div>
      <p className="tiny">
        <b>Légende :</b> Points de Lagrange L1 (rouge), L2 (vert), L3 (bleu), L4 (jaune)
        et L5 (cyan) pour le système Terre-Soleil.
      </p>

      <h2>Description</h2>
      
      <p>Animation OpenGL démontrant un télescope en orbite autour de la terre,
        elle-même en orbite autour du soleil.
      </p>
    </div>
  )
};

export default Satellite