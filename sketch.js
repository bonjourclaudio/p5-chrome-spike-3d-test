let shape, textureImg;

let renderer;
let gid = 'custom';

function preload() {
  shape = loadModel('./assets/3.obj');
  textureImg = loadImage('./assets/scape.jpg');
}

function setup() {
  renderer = createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
}

function draw() {
  background(0);
  orbitControl();


  drawNum(shape);
}


// ****************************
// Display number objects
function drawNum(obj) {

  // Scaling and placement
  scale(20);
  rotateX(PI); // flip upside down

  // Chrome Effect
  imageLight(textureImg);
  specularMaterial(50);
  shininess(200);
  metalness(100);


  model(obj);
  updateGeometry(obj)
}

// ****************************
// Alter geometry and extrude spikes
function updateGeometry(geometry) {

  // Get all vertices
  for (let v of geometry.vertices) {
    // Draw a sphere to mark the vertex.
    v.x += random(-0.1, 0.1);
    v.y += random(-0.1, 0.1);
  }

  // Update normals and redraw in real time
  geometry.computeNormals(SMOOTH);
  renderer.createBuffers(gid, geometry);
  renderer.drawBuffers(gid);
}

