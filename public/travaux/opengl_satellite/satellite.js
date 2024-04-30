let camera;
let last_render = Date.now();

// Proprietes des etoiles
let n_stars = 64;
let star_color = [1,1,1,1]
let star_size = 2.0
let stars = {x: [], y: [], z: []}

// Propriete du systeme solaire
let orbit_angle = 0.0; // theta2
let orbit_duration = 15; // seconds
let orbit_n_segments = 64;

// Proprietes de la planete
let sphereIFS;
let fichier_sphere = "sphere.obj"
let fichier_texture = "texture_planete.jpg"
let planete_tx = 0;
let planete_day_duration = 5; // second
let planete_angle = 0;

// Proprietes du satellite
let satelliteIFS;
let fichier_satellite = "satellite.obj"
let satellite_orbit_duration = 3; // seconds
let satellite_orbit_angle = 0; // theta1


function generate_randomStars() {
    // Generation de coordonnes d'etoiles aleatoires.

    // Pour chaque etoile, on calcule les coordonnes xyz a partir de 3 nombres
    // aleatoires: une distance et deux angles 
    for (let i = 0; i < n_stars; i++) {
        let rayon = Math.random() + 1;
        let angle_theta = 2 * Math.PI * Math.random();
        let angle_phi   = 2 * Math.PI * Math.random();

        stars.x[i] = rayon * Math.sin(angle_theta) * Math.cos(angle_phi);
        stars.y[i] = rayon * Math.sin(angle_theta) * Math.sin(angle_phi);
        stars.z[i] = rayon * Math.cos(angle_theta);
    }
}

function generate_pyramid_IFS() {
    // Generation du modele IFS pour les pyramides (points de Lagrange)
    
    // Sommets
    let v0 = { x: Math.sqrt(8 / 9), y: 0, z: -1 / 3 };
    let v1 = { x: -Math.sqrt(2 / 9), y: Math.sqrt(2 / 3), z: - 1 / 3 };
    let v2 = { x: -Math.sqrt(2 / 9), y: - Math.sqrt(2 / 3), z: -1 / 3 };
    let v3 = { x: 0, y: 0, z: 1 };
    
    // Calcule vecteurs normaux:
    let n0 = vecteur_normal(v0, v2, v1);
    let n1 = vecteur_normal(v0, v1, v3);
    let n2 = vecteur_normal(v1, v2, v3);
    let n3 = vecteur_normal(v0, v3, v2);

    // Regroupe les donnees:
    let model = {
        vertexPositions: new Float32Array([
            v0.x, v0.y, v0.z,
            v1.x, v1.y, v1.z,
            v2.x, v2.y, v2.z,
            v3.x, v3.y, v3.z,
        ]),
        faces: new Uint16Array([
            0, 2, 1,
            0, 1, 3,
            1, 2, 3,
            0, 3, 2
        ]),
        normals: new Float32Array([ 
            n0.x, n0.y, n0.z,
            n1.x, n1.y, n1.z,
            n2.x, n2.y, n2.z,
            n3.x, n3.y, n3.z
        ])
    };
    
  return model;   
}

function vecteur_normal(p1, p2, p3) {
  return produit_croise_points(difference_points(p3, p2), difference_points(p1, p2));
}

function difference_points(p1, p2) {
    return {
        x: p1.x - p2.x,
        y: p1.y - p2.y,
        z: p1.z - p2.z
    };
}

function produit_croise_points(p1, p2) {
    return {
        x: p1.y * p2.z - p1.z * p2.y,
        y: p1.z * p2.x - p1.x * p2.z,
        z: p1.x * p2.y - p1.y * p2.x,
    };
}

function draw_pyramid(model, position, scale, color) {
    // Fonction pour dessiner une pyramide.
    // Input : model (format ifs), position (array), scale (float), color (array)

    glPushMatrix(); // sauvegarde la matrice de transformation actuelle dans la pile

        glMaterialfv(GL_FRONT, GL_EMISSION, color);
        
        glTranslatef(position[0], position[1], position[2]);
        glScalef(scale, scale, scale);
        glRotatef(-90, 1, 0, 0);

        glEnableClientState(GL_VERTEX_ARRAY);
        glVertexPointer(3, GL_FLOAT, 0, model.vertexPositions);

        glEnableClientState(GL_NORMAL_ARRAY);
        glNormalPointer(GL_FLOAT, 0, model.normals);

        glDrawElements(GL_TRIANGLES, model.faces.length, GL_UNSIGNED_BYTE, model.faces);
        
        glDisableClientState(GL_VERTEX_ARRAY);
        glDisableClientState(GL_NORMAL_ARRAY);

        glMaterialfv(GL_FRONT, GL_EMISSION, [0, 0, 0, 1]);

    glPopMatrix(); // revient a la matrice de transformation sauvegardee
}

function draw_sun(model, scale) {
    // Fonction pour dessiner le soleil
    // Input : model (format ifs), scale (float)

    glPushMatrix(); // sauvegarde la matrice de transformation actuelle dans la pile

        glMaterialfv(GL_FRONT, GL_EMISSION, [1, 0.75, 0, 1]);
                
        glScalef(scale, scale, scale);

        glEnableClientState(GL_VERTEX_ARRAY);
        glVertexPointer(3, GL_FLOAT, 0, model.vertexPositions);

        glEnableClientState(GL_NORMAL_ARRAY);
        glNormalPointer(GL_FLOAT, 0, model.vertexNormals);

        glDrawElements(
            GL_TRIANGLES,
            model.parts["Sphere_Sphere.001"].length,
            GL_UNSIGNED_BYTE,
            model.parts["Sphere_Sphere.001"]
        );
        glDisableClientState(GL_VERTEX_ARRAY);
        glDisableClientState(GL_NORMAL_ARRAY);

        glMaterialfv(GL_FRONT, GL_EMISSION, [0,0,0,1]);
    
    glPopMatrix(); // revient a la matrice de transformation sauvegardee
}

function draw_earth(model, scale) {
    // Fonction pour dessiner le soleil
    // Input : model (format ifs), scale (float)

    glPushMatrix(); // sauvegarde la matrice de transformation actuelle dans la pile

        glMaterialfv(GL_FRONT, GL_AMBIENT_AND_DIFFUSE, [1, 1, 1, 1]);
        glMaterialfv(GL_FRONT, GL_SPECULAR, [0.5, 0.2, 0, 1]);  
        glMaterialf(GL_FRONT, GL_SHININESS, 32); 
        
        glTranslated(1, 0, 0);
        glScalef(scale, scale, scale);
            
        glEnableClientState(GL_VERTEX_ARRAY);
        glVertexPointer(3, GL_FLOAT, 0, model.vertexPositions);

        glEnableClientState(GL_NORMAL_ARRAY);
        glNormalPointer(GL_FLOAT, 0, model.vertexNormals);

        // Applique la texture de la planete:
        glTexCoordPointer(2, GL_FLOAT, 0, model.texturePositions);
        glEnableClientState(GL_TEXTURE_COORD_ARRAY);

        glMatrixMode(GL_TEXTURE);
        glLoadIdentity(); // S'assurer de commencer avec une matrice identite
        glTranslatef(-planete_tx, 1, 1); // Simule la rotation en deplacant la texture
        glMatrixMode(GL_MODELVIEW)
        

        glDrawElements(
            GL_TRIANGLES,
            model.parts["Sphere_Sphere.001"].length,
            GL_UNSIGNED_BYTE,
            model.parts["Sphere_Sphere.001"]
        );
        
        // Desactive etats pour ne pas affecter autres elements:
        glDisableClientState(GL_VERTEX_ARRAY);
        glDisableClientState(GL_NORMAL_ARRAY);
        glDisableClientState(GL_TEXTURE_COORD_ARRAY);

        glMaterialfv(GL_FRONT, GL_AMBIENT_AND_DIFFUSE, [0, 0, 0, 1]);
        glMaterialfv(GL_FRONT, GL_SPECULAR, [0, 0, 0, 1]);  
        glMaterialf(GL_FRONT, GL_SHININESS, 0); 

    glPopMatrix(); // revient a la matrice de transformation sauvegardee
}

function draw_stars() {
    // Dessine les etoiles aletoires generees par generate_randomStars()

    glPushMatrix(); // sauvegarde la matrice de transformation actuelle dans la pile
    
        glMaterialfv(GL_FRONT_AND_BACK, GL_EMISSION, star_color); 
        glPointSize(star_size);
            
        glBegin(GL_POINTS);
        for (let i = 0; i < n_stars; i++) {
            glVertex3f(stars.x[i], stars.y[i], stars.z[i]);
        }
        glEnd(); 

        glMaterialfv(GL_FRONT_AND_BACK, GL_EMISSION, [0,0,0,1]);

    glPopMatrix(); // revient a la matrice de transformation sauvegardee
}

function draw_orbit(color){
    // Dissine une orbite circulaire
    // Input : color (array)

    var rayon = 1;

    glPushMatrix(); // sauvegarde la matrice de transformation actuelle dans la pile

        glMaterialfv(GL_FRONT, GL_EMISSION, color); 
        
        glBegin(GL_LINE_LOOP);
        for (i = 0; i < orbit_n_segments; i++) {
            let angle = (2 * Math.PI * i) / orbit_n_segments;
            let x = rayon * Math.cos(angle);
            let y = 0;
            let z = rayon * Math.sin(angle);
            glVertex3f(x, y, z);
        }
        glEnd();

        glMaterialfv(GL_FRONT, GL_EMISSION, [0,0,0,1]); 

    glPopMatrix(); // revient a la matrice de transformation sauvegardee
}

function draw_satellite(position, scale){
    // Fonction pour dessiner le satellite
    // Input : position (array), scale (float)

    model = satelliteIFS;

    glPushMatrix(); // sauvegarde la matrice de transformation actuelle dans la pile
    
        glTranslated(position[0], position[1], position[2]);
            
        glScalef(scale, scale, scale);

        glRotatef(90, 1, 0, 0); // Place le satelite a la verticale
            
        glEnableClientState(GL_VERTEX_ARRAY);
        glVertexPointer(3, GL_FLOAT, 0, model.vertexPositions);

        glEnableClientState(GL_NORMAL_ARRAY);
        glNormalPointer(GL_FLOAT, 0, model.vertexNormals);

        glTexCoordPointer(2, GL_FLOAT, 0, model.texturePositions);

        // Dessine le satellite en gris metallique:
        glMaterialfv(GL_FRONT, GL_AMBIENT_AND_DIFFUSE, [0.3, 0.3, 0.3, 1]);
        glMaterialfv(GL_FRONT, GL_SPECULAR, [0.3, 0.3, 0.3, 1]);

        glDrawElements(GL_TRIANGLES, model.parts["Antenne"].length, GL_UNSIGNED_BYTE, model.parts["Antenne"]);
        glDrawElements(GL_TRIANGLES, model.parts["Coupole"].length, GL_UNSIGNED_BYTE, model.parts["Coupole"]);

        glDrawElements(GL_TRIANGLES, model.parts["Cube"].length, GL_UNSIGNED_BYTE, model.parts["Cube"]);
        glDrawElements(GL_TRIANGLES, model.parts["Cylindre_1"].length, GL_UNSIGNED_BYTE, model.parts["Cylindre_1"]);
        glDrawElements(GL_TRIANGLES, model.parts["Cylindre_2"].length, GL_UNSIGNED_BYTE, model.parts["Cylindre_2"]);

        // Descine les pannaux en bleu:
        glMaterialfv(GL_FRONT, GL_AMBIENT_AND_DIFFUSE, [0, 0, 1, 1]);
        glMaterialfv(GL_FRONT, GL_SPECULAR, [1, 1, 1, 1]);  
        glMaterialf(GL_FRONT, GL_SHININESS, 128); 

        glDrawElements(GL_TRIANGLES, model.parts["Paneau_1"].length, GL_UNSIGNED_BYTE, model.parts["Paneau_1"]);
        glDrawElements(GL_TRIANGLES, model.parts["Paneau_2"].length, GL_UNSIGNED_BYTE, model.parts["Paneau_2"]);

        // Desactivation
        glDisableClientState(GL_VERTEX_ARRAY);
        glDisableClientState(GL_NORMAL_ARRAY);

        glMaterialfv(GL_FRONT, GL_AMBIENT_AND_DIFFUSE, [0, 0, 0, 1]);
        glMaterialfv(GL_FRONT, GL_SPECULAR, [0, 0, 0, 1]);  
        glMaterialf(GL_FRONT, GL_SHININESS, 0);  

    glPopMatrix(); // revient a la matrice de transformation sauvegardee
}

function draw() {
    // Fonction principale pour dessiner la scene complete
    glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
    camera.apply();

    // Trouver les coordonnes sur l'orbitre pour un angle de 60 degres:
    let soixante_deg = Math.PI / 3
    let coor_x = Math.cos(soixante_deg);
    let coor_z = Math.sin(soixante_deg);

    draw_sun(sphereIFS, 0.15);
    draw_orbit([0.5, 0.5, 0.5]); // Orbite de la terre

    glPushMatrix(); // sauvegarde la matrice de transformation actuelle dans la pile

        glRotatef(orbit_angle, 0, 1, 0);
        
        draw_earth(sphereIFS, 0.09);
        
        draw_pyramid(pyramidIFS, [0.7, 0, 0], 0.025, [1, 0, 0, 1]); // L1
        draw_pyramid(pyramidIFS, [1.3, 0, 0], 0.025, [0, 1, 0, 1]); // L2
        draw_pyramid(pyramidIFS, [-1,  0, 0], 0.025, [0, 0, 1, 1]); // L3
        draw_pyramid(pyramidIFS, [coor_x, 0, -coor_z], 0.025, [1, 1, 0, 1]);  // L4
        draw_pyramid(pyramidIFS, [coor_x, 0,  coor_z], 0.025, [0, 1, 1, 1]);  // L5
        
        glLightfv(GL_LIGHT0, GL_POSITION, [-1, 0, 0, 1]);
        
            glPushMatrix(); // sauvegarde la matrice de transformation actuelle dans la pile
    
                glTranslated(1.3, 0, 0);
    
                glRotatef(satellite_orbit_angle, 0, 1, 0);
        
                glScalef(1/8, 1/8, 1/8);
                    draw_orbit([1, 1, 1]); // Orbite du satelite
                    draw_satellite([-1, 0, 0], 0.07);
                    
            glPopMatrix(); // revient a la matrice de transformation sauvegardee
                
    glPopMatrix(); // revient a la matrice de transformation sauvegardee

    draw_stars();

    last_render = Date.now();
}

function update() {
    // Fonction pour animer la scene 3D

    // Temps depuis le dernier dessin
    let dt = Date.now() - last_render; // ms

    // Angle de deplacement pour une vitesse de 1 tour/sec
    let angle = (360 * dt) / 1000;

    // Incrementation des angles en fonction des durees de rotation
    orbit_angle += angle / orbit_duration;
    orbit_angle = orbit_angle % 360;

    satellite_orbit_angle += angle / satellite_orbit_duration;
    satellite_orbit_angle = satellite_orbit_angle % 360;

    planete_tx += (dt / 1000) / planete_day_duration; 
    planete_tx %= 1;

    draw();
    requestAnimationFrame(update);
}

function init() {
    try {
        glsimUse("canvas");
    }
    catch (e) {
        document.getElementById("canvas-holder").innerHTML="<p><b>Sorry, an error occurred:<br>" +
            e + "</b></p>";
        return;
    }

    // Etats d'OpenGL a activer
    glEnable(GL_POINT_SMOOTH);
    glEnable(GL_LIGHTING);
    glEnable(GL_NORMALIZE);
    glEnable(GL_DEPTH_TEST);
    glEnable(GL_COLOR_MATERIAL);
    glLightModeli(GL_LIGHT_MODEL_LOCAL_VIEWER, 1);
    glMateriali(GL_FRONT_AND_BACK, GL_SHININESS, 32);
    
    glClearColor(0, 0, 0, 1);
    
    // Caméara
    camera = new Camera();
    camera.setScale(0.75);
    camera.lookAt(0, 1, 5);
    
    // Lumiere
    glEnable(GL_LIGHT0);
    glLightfv(GL_LIGHT0, GL_DIFFUSE,  [1, 1, 1, 1]);
    glLightfv(GL_LIGHT0, GL_SPECULAR, [1, 1, 1, 1]);
    glLightfv(GL_LIGHT0, GL_AMBIENT, [0.1, 0.1, 0.1, 1]); // Ambiance minimale
    
    // Met les parametres d'illumination des materiaux a 0 par defaut:
    glMaterialfv(GL_FRONT_AND_BACK, GL_AMBIENT_AND_DIFFUSE, [0, 0, 0, 1]);
    glMaterialfv(GL_FRONT_AND_BACK, GL_SPECULAR, [0, 0, 0, 1]);  
    glMaterialf(GL_FRONT_AND_BACK, GL_SHININESS, 0); 
    
    // Creation d'une pyramide
    pyramidIFS = generate_pyramid_IFS();

    // Creation du modele IFS pour la planete et le soleil (sphere).
    sphereIFS = loadOBJFile(fichier_sphere);

    // Load the satellite
    satelliteIFS = loadOBJFile(fichier_satellite);

    // Generation d'etoiles
    generate_randomStars();

    // Importe les textures
    txture_planete = new Image();
    txture_planete.onload = function () {
        glEnable(GL_TEXTURE_2D);
        glTexImage2D(
            GL_TEXTURE_2D,
            0,
            GL_RGBA,
            txture_planete.width,
            txture_planete.height,
            0,
            GL_RGBA,
            GL_UNSIGNED_BYTE,
            txture_planete
        );
        glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_LINEAR);
        draw();
    };
    txture_planete.src = fichier_texture;

    // Pour l'interactivite avec la souris.
    camera.installTrackball(draw);

    // Premier appel de update()
    update();
}