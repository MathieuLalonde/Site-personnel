const Respiration = () => {
  return (
    <div className="container">
      <h1>Relaxation</h1>
      <div className="squarecontainer">
        <img
          className="videoplayer"
          src="/travaux/svg_respiration/respiration.svg"
          style={{
            backgroundImage: 'url("/travaux/svg_respiration/ciel.jpg")',
            backgroundSize: 'cover'
          }} />
      </div>
      <p className="tiny">
      </p>

      <h2>Description</h2>

      <p>Animation SVG simple.</p>
    </div>
  )
};

export default Respiration
