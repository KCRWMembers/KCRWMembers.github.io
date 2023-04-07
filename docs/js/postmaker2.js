// TODO: figure out 300 DPI: https://gokcetaskan.com/artofcode/high-quality-export
// TODO: PDF support: https://github.com/zenozeng/p5.js-pdf

/**
 * Week 11 TODOs
 * - do 4 random type treatments using the compass idea
 *
 * CRIT:
 * - how can I incorporate motion or sound?
 * - what are the other type treatments?
 * - how else would copy live within these compositions?
 * - what about motion?
 */

let c;
let headline = "KCRW";

let typeface;
let formatDropdown;

const INSTAGRAM = "Instagram";
const STORY = "Story";
const WIDESCREEN = "Widescreen";
const POSTER = "Poster";
const OPTIONS = [INSTAGRAM, STORY, WIDESCREEN, POSTER];

let K_SVG;
let C_SVG;
let R_SVG;
let W_SVG;

const colors = [
    {text: "#f46020", background: "#97d8e7"},
    {text: "#97d8e7", background: "#f46020"},
    {text: "#0CBA1C", background: "#17E530"},
    {text: "#AD098A", background: "#EF35C8"},
    {text: "#FFCE00", background: "#129CB2"},
    {text: "#F46020", background: "#BF3100"}
];

let currentColors = colors[0];

function preload() {
    typeface = loadFont('../../fonts/FTCalhernTrial-CondensedSemibold.otf');
    K_SVG = loadImage("../../img/KCRW_K_black.svg");
    C_SVG = loadImage("../../img/KCRW_C_black.svg");
    R_SVG = loadImage("../../img/KCRW_R_black.svg");
    W_SVG = loadImage("../../img/KCRW_W_black.svg");
}

function savePNGClick() {
    saveCanvas(c, `KCRW-template-${Date.now()}.png`);
}

function headlineChange() {
    headline = this.value();
}

function resizeStory() {
    c.resize(1080/2, 1920/2);
}

function resizeWidescreen() {
    c.resize(1920/2, 1080/2);
}

function resizeSquare() {
    c.resize(1080/2, 1080/2);
}

function resizePoster() {
    c.resize(1080/2, 1620/2);
}

function formatChanged() {
    switch(formatDropdown.value()) {
        case INSTAGRAM:
            resizeSquare();
            break;
        case STORY:
            resizeStory();
            break;
        case WIDESCREEN:
            resizeWidescreen();
            break;
        case POSTER:
            resizePoster();
            break;
    }
}

function changeColors() {
    currentColors = random(colors);
    background(currentColors.background);
    noStroke();
    fill(currentColors.text);
}

function setupHTML() {
  // const row1 = select('#row1');
  // let row1HTML = '';
  // row1HTML += '<object type="image/svg+xml" data="../../img/KCRW_K_black.svg" width="100"></object>';
  // row1HTML += '<object type="image/svg+xml" data="../../img/KCRW_C_black.svg" width="100"></object>';
  // row1.html(row1HTML);

  // const row2 = select('#row2');
  // let row2HTML = '';
  // row2HTML += '<object type="image/svg+xml" data="../../img/KCRW_R_black.svg" width="100"></object>';
  // row2HTML += '<object type="image/svg+xml" data="../../img/KCRW_W_black.svg" width="100"></object>';
  // row2.html(row2HTML);

  select("#K_svg").html('<object type="image/svg+xml" data="../../img/KCRW_K_black.svg" width="100"></object>');
  select("#C_svg").html('<object style="float:right" type="image/svg+xml" data="../../img/KCRW_C_black.svg" width="100"></object>');
  select("#R_svg").html('<object type="image/svg+xml" data="../../img/KCRW_R_black.svg" width="100"></object>');
  select("#W_svg").html('<object style="float:right" type="image/svg+xml" data="../../img/KCRW_W_black.svg" width="100"></object>');
}

function setup() {
    setupHTML();

    pixelDensity(2);

    // select("#btn-save").mousePressed(savePNGClick);

    // const headlineInput = createInput('Headline');
    // headlineInput.position(110, 10)
    // headlineInput.size(200);
    // headlineInput.value(headline);
    // headlineInput.input(headlineChange);
    


    // formatDropdown = select("#format-dropdown");
    // formatDropdown = createSelect(select("#format-dropdown"));
    // // formatDropdown.position(360, 10);
    // for (let o of OPTIONS) {
    //     formatDropdown.option(o);
    // }
    // formatDropdown.changed(formatChanged);

    // // const changeColorsBtn = createButton('Change Colors');
    // // changeColorsBtn.mousePressed(formatChanged);
    // // changeColorsBtn.position(460, 10);
    // select("#btn-change-colors").mousePressed(changeColors);

    // c = createCanvas(1080/2, 1080/2);
    // c.position(10, 160);

    // changeColors();
}

function convertedK() {
    // SVG from Illustrator converted with https://svg2p5.com/

    beginShape();
    vertex(0,24.65);
    vertex(10.21,14.379999999999999);
    vertex(30.7,35);
    vertex(13.11,11.45);
    vertex(24.49,0);
    vertex(40.51,27.97);
    vertex(78.27,53.33);
    vertex(66.89,64.78);
    vertex(42.94,45.11);
    vertex(46.55,50.96);
    vertex(63.589999999999996,68.1);
    vertex(53.379999999999995,78.36999999999999);
    vertex(0,24.65);
    endShape();
}

function convertedC() {
    beginShape();
    vertex(4.34,39.2);
    vertex(38.88,4.44);
    bezierVertex(44.85,-1.5599999999999996,52.7,-1.88,60.47,5.94);
    bezierVertex(68.32,13.84,67.77,21.5,61.8,27.51);
    vertex(52.379999999999995,36.99);
    vertex(42.41,26.96);
    vertex(52.62,16.69);
    bezierVertex(53.559999999999995,15.740000000000002,53.41,14.64,52.62,13.850000000000001);
    bezierVertex(51.91,13.14,50.809999999999995,12.980000000000002,49.87,13.930000000000001);
    vertex(13.76,50.27);
    bezierVertex(12.9,51.14,12.969999999999999,52.32,13.68,53.03);
    bezierVertex(14.469999999999999,54.99,14.549999999999999,55.86,13.68,NaN);
    bezierVertex(23.89,NaN,23.65,NaN,4.26,NaN);
    bezierVertex(-1.63,NaN,-9.24,NaN,-17.090000000000003,NaN);
    bezierVertex(-24.860000000000003,NaN,-24.550000000000004,NaN,-18.660000000000004,NaN);
    vertex(-18.670000000000005,NaN);
    endShape();
}

let smol = true;

// TODO: can probably generalize this to drawChar(context)
//       which takes all the dimensions needed
function drawK() {
    // push();

    // translate(16, 16);

    // fill(currentColors.text);
    // convertedK();
    
    // pop();

    push();
    imageMode(CORNER);
    stroke('pink');
    image(K_SVG, 16, 16, 100, 100);
    pop();
}

function drawC(sz) {

    push();

    translate(width-16, 16);

    fill(currentColors.text);
    convertedC();
    
    pop();

    return;

    push();
    rotate(15);

    let xPos = 0;
    let yPos = 0;

    switch(formatDropdown.value()) {
        case INSTAGRAM:
            xPos = width - width/10;
            yPos = -sz/2;
            break;
        case STORY:
            // xPos = width - width/5;
            // yPos = -sz/2;
            break;
        case WIDESCREEN:
            break;
        case POSTER:
            break;
    }

    text("C", xPos, yPos);
    pop();
}

function logoFrame(word) {
    // TODO: have this adjust the type based on formatDropdown.value()
    // maybe just the type size
    // width and height can be use hmm
    // 
    push();
    
    // TODO: have it reverse rather than loop scale
    scale(map(frameCount % 30, 0, 30, 1, 2));


    drawK();
    drawC();

    pop();
    return;
    
    push();
    translate(width/2, height/2);
    const sz = Math.min(width, height)/5;
    textSize(sz);

    // TODO: need a different Y adjustment for story and poster modes
    // drawK(sz);

    // push();
    // rotate(15);
    // text("C", width - width/10, -sz/2);
    // pop();
    drawC(sz);

    push();
    rotate(15);
    text("R", width/4, height - sz * .3);
    pop();

    // TODO: only works on square
    push();
    rotate(-15);
    text("W", width - width * .4, height + sz * .9);
    pop();

    pop();
}

function drawSentence() {
    // 3: headline is multiple words; split into pairs/quarters?
}

function draw() {
    // Loop runs every 2 seconds @ 60fps
    // Map out scale, by letter, based on mod of framecount
    // 
    // Frame ranges:
    // 0-30: K, W 2x
    // 30-60: C, R 2x
    // 60-90: K, W 4x; K 1x 
    // 90-120: all 1x
    // 
    // Also, change colors within each case, each "scene change"
    const scaleFrame = frameCount % 120;
    // const small = "50px";
    // const medium = "100px";
    // const large = "200px";

    const small = `${.15 * width}%`;
    const medium = `${.30 * width}%`;
    const large = `${.60 * width}%`;

    let k = c = r = w = small;

    if (scaleFrame < 30) {
        k = w = medium;
    } else if (scaleFrame < 40) {
        k = c = r = w = medium;
    } else if (scaleFrame < 60) {
        c = r = medium;
        k = w = large;
    } else if (scaleFrame < 80) {
        k = c = r = w = large;
    } else if (scaleFrame < 90) {
       w = c = r = large;
    }

    select("#K_svg > object").style('width', k)
    select("#C_svg > object").style('width', c)
    select("#R_svg > object").style('width', r)
    select("#W_svg > object").style('width', w)

    // Adjust the overall frame

    const sizeFrame = frameCount % 240;

    // TODO: swap these out for tailwind classes, need to ensure they actually make it to the build...
    // const full = "4"; 
    // const half = "1/2";
    // const quarter = "1/4";
    
    const full = "1rem"; 
    const half = "50%";
    const quarter = "25%";
    let rBottom = wBottom = full;
    let cRight = wRight = full;

    // top/bottom/left/right = 1rem
    // top/bottom/left = 1rem; right = 50%
    // top/left = 1rem; right/bottom = 50%
    if (sizeFrame < 60) {
    } else if (sizeFrame < 120) {
        cRight = wRight = half;
    } else if (sizeFrame < 180) {
       cRight = wRight = half;
       rBottom = wBottom = half;
    }

    // K fixed pos
    select("#K_svg").style('top', full)
    select("#K_svg").style('left', full)

    // C fixed pos
    select("#C_svg").style('top', full)
    select("#C_svg").style('right', cRight)
    
    // R fixed pos
    select("#R_svg").style('bottom', rBottom)
    select("#R_svg").style('left', full)
    
    // W fixed pos
    select("#W_svg").style('bottom', wBottom)
    select("#W_svg").style('right', wRight)
}
