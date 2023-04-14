let shoe;
let img;
let pg;

function preload() {
  // shoe = loadModel("simplify_Blue_Vans_Shoe_SF_58pct.obj");
  // shoe = loadModel("shaak.obj");
  // shoe = loadModel("wee_vans.obj");
  shoe = loadModel("../img/Blue_Vans_Shoe_SF.obj");
  // img = loadImage("../img/Blue_Vans_Shoe copy_SHRUNK.png");
  img = loadImage("../img/editv3.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  pg = createGraphics(2000, 2000);
  pg.background(img);
}

function draw() {
  background("darkgray");

  translate(0, 0, -1000);
  scale(-200, 200); // -200 for x flips it so text reads properly
  
  rotateZ(PI); // Turn the model upright
  
  rotateY(frameCount * -0.01); // Slow rotation
  
  noStroke();
  model(shoe);
  texture(pg);


}