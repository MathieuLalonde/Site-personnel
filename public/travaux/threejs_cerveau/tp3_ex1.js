// Testé sur Google Chrome 107

"use strict";

let scene, camera, renderer;  // Bases pour le rendu Three.js
let controls; // Pour l'interaction avec la souris
let canvas;  // Le canevas ou est dessinee la scene
let brainMaterial; // Materiau pour la surface du cerveau

/* Creation de la scene 3D */
function createScene() {
    scene = new THREE.Scene();

    // Creer une camera, sur l'axe des Z positif
    let fov = 45;
    let aspect = canvas.width / canvas.height;
    let near = 0.1;
    let far = 100;
    camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(-1, 2, 2);

    // Ajout d'une lumiere liee a la camera
    let light1 = new THREE.DirectionalLight(0xffffff, 0.8);
    light1.position.set(camera.position.x, camera.position.y, camera.position.z);
    camera.add(light1);     // On lie la lumiere a la camera
    scene.add(camera);      // Ajout de la camera a la scene
    
    // Ajout d'une lumiere ambiante
    scene.add(new THREE.AmbientLight(0xffffff, 0.2));

    // Modelisation du cerveau
    add_brainMesh("./allenMouseBrain.obj")

    // Modelisation du volume d'injection
    add_injectionVolumeMesh("./volumeInjection.obj");

    // Modelisation des streamlines
    add_streamlines("./streamlines_100149109.json")
}

function add_brainMesh(url) {
    const vertices = [];
    const faces = [];
    const normals = [];
    const geometry = new THREE.BoxBufferGeometry();

    // Importation de la surface du cerveau
    let brainIFS = loadBrain(url); 

    // Ajout des sommets
    for (let i = 0; i < brainIFS.vertexPositions.length; i++) {
            for (let j = 0; j < 3; j++) {
                vertices.push(brainIFS.vertexPositions[i][j]);
        }
    }
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

    // Ajout des faces
    for (let i = 0; i < brainIFS.faces.length; i++) {
            for (let j = 0; j < 3; j++) {
                faces.push(brainIFS.faces[i][j]);
        }
    }
    geometry.setIndex(faces);

    // Calcul des normales
    for (let i = 0; i < geometry.index.count; i++){
        let index = i * 3;
        let a = geometry.attributes.position[index];
        let b = geometry.attributes.position[index + 1];
        let c = geometry.attributes.position[index + 2];

        let triangle = new THREE.Triangle(a, b, c);

        normals.push(new THREE.Vector3());
        triangle.getNormal(normals[i]);
    }
    geometry.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
    geometry.computeVertexNormals();

    // Creation du materiau
    brainMaterial = new THREE.MeshPhongMaterial({
        color: 0x888888,
        transparent: true,
        opacity: 0.25,
        flatShading: false,     // valeur par defaut
        reflectivity: 1.0,      // valeur par defaut
        refractionRatio: 0.25
    });
    
    // Creation du maillage
    let cerveau = new THREE.Mesh(geometry, brainMaterial); 

    // Rotation pour s'assurer que le dessus du cerveau est vers le haut.
    cerveau.rotateX(Math.PI);

    // Ajout du modele a la scene.
    scene.add(cerveau);
}

function add_injectionVolumeMesh(url){
    const vertices = [];
    const faces = [];
    const normals = [];
    const geometry = new THREE.BufferGeometry();

    // Importation du volume d'injection
    let injectionIFS = loadInjection(url); 

    // Ajout des sommets
    for (let i = 0; i < injectionIFS.vertexPositions.length; i++) {
            for (let j = 0; j < 3; j++) {
                vertices.push(injectionIFS.vertexPositions[i][j]);
        }
    }
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

    // Ajout des faces
    for (let i = 0; i < injectionIFS.faces.length; i++) {
            for (let j = 0; j < 3; j++) {
                faces.push(injectionIFS.faces[i][j]);
        }
    }
    geometry.setIndex(faces);

    // Calcul des normales
    for (let i = 0; i < geometry.index.count; i++){
        let index = i * 3;
        let a = geometry.attributes.position[index];
        let b = geometry.attributes.position[index + 1];
        let c = geometry.attributes.position[index + 2];

        let triangle = new THREE.Triangle(a, b, c);

        normals.push(new THREE.Vector3());
        triangle.getNormal(normals[i]);
    }
    geometry.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
    geometry.computeVertexNormals();

    // Creation du materiau
    let injectionMaterial = new THREE.MeshPhongMaterial({
        color: 0x006600,
        flatShading: false,     // valeur par defaut
        shininess: 30           // valeur par defaut
    });
   
    // Creation du maillage
    let injection = new THREE.Mesh(geometry, injectionMaterial); 

    // Rotation pour s'assurer que le dessus du cerveau est vers le haut.
    injection.rotateX(Math.PI);

    // Ajout du modele a la scene.
    scene.add(injection);
}

/* Fonction ajoutant a la scene 3D toutes les streamlines 
   contenues dans le fichier fourni */
function add_streamlines(url){
    let streamlines = loadStreamlines(url)

    for (let i=0; i < streamlines.length; i++){
        add_singleStreamline(streamlines[i]);
    }
}

/* Fonction permettant d'ajouter un seul streamline a la scene 3D */
function add_singleStreamline(line){
    // line est un array dont chaque element est un object JavaScript ayant les 
    // propriete x, y et z pour la position d'un point de ce streamline.
    const points = new Float32Array(line.length * 3);
    const colors = new Float32Array(line.length * 3);

    let current = new THREE.Vector3(line[0].x, line[0].y, line[0].z);
    let prev = current;
    let next = new THREE.Vector3(line[1].x, line[1].y, line[1].z);

    for (let i = 0; i < line.length; i++){
        let index = i * 3;
        
        // Ajout d'un point dans l'array points.
        points[index] = current.x;
        points[index + 1] = current.y;
        points[index + 2] = current.z;   
        
        // Calcul de la couleur du point
        let average = prev.sub(next).normalize();
        colors[index] = Math.abs(average.z);
        colors[index + 1] = Math.abs(average.y);
        colors[index + 2] = Math.abs(average.x);

        // Copie les points pour la prochaine iteration
        prev = current;
        current = next;
        // On va chercher le prochain point seulement s'il existe. Sinon on garde le dernier.
        if ((i + 1) < line.length) {
            next = new THREE.Vector3(line[i + 1].x, line[i + 1].y, line[i + 1].z);
        }
    }
        
    // Creation d'une geometrie pour contenir les sommets et les couleurs
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(points, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3, true));
    
    // Creation d'un materiau de type LineBasicMaterial
    const material = new THREE.LineBasicMaterial({
        vertexColors: true,
        linewidth: 2
    });

    // Creation d'un modele
    const model = new THREE.Line(geometry, material);

    // Rotation pour s'assurer que le dessus du cerveau est vers le haut.
    model.rotateX(Math.PI);

    // Ajout du modele a la scene.
    scene.add(model);
}

// Fontion d'initialisation. Elle est appelee lors du chargement du body html.
function init() {
    try {
        canvas = document.getElementById("glcanvas");
        renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true});
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
    catch (e) {
        document.getElementById("canvas-holder").innerHTML =
            "<h3><b>Sorry, WebGL is required but is not available.</b><h3>";
        return;
    }

    // Creation de la scene 3D
    createScene();

    // Ajout des textures du cubemap (skybox)
    scene.background = new THREE.CubeTextureLoader().load([
		'posx.svg',
		'negx.svg',
		'posy.svg',
		'negy.svg',
		'posz.svg',
		'negz.svg'
    ]);

    // Ajout de l'interactivite avec la souris
    controls = new THREE.TrackballControls(camera, canvas);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;
    controls.autoRotate = true;
    
    // Animation de la scene (appelee toutes les 30 millisecondes)
    animate();
}

/* Animation de la scene */
function animate()
{
    controls.update();
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
