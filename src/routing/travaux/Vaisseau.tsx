

const Vaisseau = () => {
    return (
        <div className="container">
            <h1>Vaisseau spatial</h1>
            <div className="videocontainer">
                <iframe className="videoplayer" src="/travaux/js_vaisseau/index.html" />
            </div>
            <p className="tiny">
                <b>Légende :</b> Points de Lagrange L1 (rouge), L2 (vert), L3 (bleu), L4 (jaune)
                et L5 (cyan) pour le système Terre-Soleil.
            </p>

            <h2>Description</h2>

            <p>Animation d'un vaisseau spatial survolant une ville. Les bâtiments en parallaxe ainsi que les constellations dans le ciel sont construits de façon procédurale. </p>

            <h2>Instructions</h2>

            <p>L'animation peut être contrôlée comme un jeu vidéo en utilisant les touches WASD pour déplacer le vaisseau et la touche ESPACE pour accélérer sa vitesse de déplacement.</p>
        </div>
    )
};

export default Vaisseau