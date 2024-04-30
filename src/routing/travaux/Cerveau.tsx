

const Cerveau = () => {
    return (
        <div className="container">
            <h1>Cerveau</h1>
            <div className="videocontainer">
                <iframe className="videoplayer" src="/travaux/threejs_cerveau/index.html" />
            </div>
            <p className="tiny">
            </p>

            <h2>Description</h2>

            <p>Visualisation ThreeJS de vaisseaux sanguins à l'intérieur du cerveau d'une souris.</p>

                <h2>Instructions</h2>

            <p>L'animation peut être contrôlée avec la souris, la roulette servant à contrôler le zoom.</p>
        </div>
    )
};

export default Cerveau