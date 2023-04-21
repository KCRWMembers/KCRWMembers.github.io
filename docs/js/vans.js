let shoe;
let shoeUVMap;
let textureContainer;

function preload() {
  shoe = loadModel("../img/Blue_Vans_Shoe_SF.obj");
  shoeUVMap = loadImage("../img/editv4.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  textureContainer = createGraphics(2000, 2000);
  textureContainer.background(shoeUVMap);
}

function draw() {
  clear();

  translate(0, 0, -1000);
  scale(-200, 200); // -200 for x flips it so text reads properly
  
  rotateZ(PI); // Turn the model upright
  
  rotateY(frameCount * -0.01); // Slow rotation
  
  noStroke();
  model(shoe);
  texture(textureContainer);
}