function navOnHover(self) {
    document.querySelector('body').setAttribute('style', 'background-color:#129CB2');
}

function navOffHover(self) {
    document.querySelector('body').setAttribute('style', 'background-color:#f46020');
}

function playPauseOnClick(self) {
    const playPauseIcon = document.querySelector('#btn-play-pause > i');
    const streamAudio = document.querySelector("#kcrw-stream");
    if (streamAudio.paused) {
        streamAudio.play();
        playPauseIcon.setAttribute('class', 'gg-play-pause');
    } else {
        streamAudio.pause();
        playPauseIcon.setAttribute('class', 'gg-play-button');
    }
}

// TODO: pull in live streaming song titles, etc.
// https://tracklist-api.kcrw.com/Music

// create an element to contain our audio
const el = document.createElement('audio');
el.id = "kcrw-stream";
el.crossOrigin = 'anonymous';
el.src = 'http://kcrw.streamguys1.com/kcrw_192k_mp3_on_air_internet_radio';
el.autoplay = false;
document.getElementById('radio-stream').appendChild(el);




/// Post generator code below
/// 
/// 
/// 

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

function setup() {
    pixelDensity(2);

    select("#btn-save").mousePressed(savePNGClick);

    // const headlineInput = createInput('Headline');
    // headlineInput.position(110, 10)
    // headlineInput.size(200);
    // headlineInput.value(headline);
    // headlineInput.input(headlineChange);
    


    // formatDropdown = select("#format-dropdown");
    formatDropdown = createSelect(select("#format-dropdown"));
    // formatDropdown.position(360, 10);
    for (let o of OPTIONS) {
        formatDropdown.option(o);
    }
    formatDropdown.changed(formatChanged);

    // const changeColorsBtn = createButton('Change Colors');
    // changeColorsBtn.mousePressed(formatChanged);
    // changeColorsBtn.position(460, 10);
    select("#btn-change-colors").mousePressed(changeColors);

    c = createCanvas(1080/2, 1080/2);
    c.position(10, 160);

    changeColors();
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
    // scale(map(frameCount % 30, 0, 30, 1, 2));


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

function logoFrame2() {
    // Assume each letter SVG has the same dimensions [TODO: production work]
    // 
    // TODO: swap out colors, probably need to swap out SVG references
    // ideally load everything at once

    const svgSize = 100;
    const svgMargin = 16; // This will need to change for IG story and posters

    push();
    imageMode(CORNER);
    
    push();
    image(K_SVG, svgMargin, svgMargin, svgSize, svgSize);
    pop();

    push();
    image(C_SVG, width-svgMargin-svgSize, svgMargin, svgSize, svgSize);
    pop();

    push();
    image(R_SVG, svgMargin, height-svgMargin-svgSize, svgSize, svgSize);
    pop();

    push();
    image(W_SVG, width-svgMargin-svgSize, height-svgMargin-svgSize, svgSize, svgSize);
    pop();

    pop();
}

function draw() {
    textFont(typeface);
    background(currentColors.background);
    fill(currentColors.text);

    logoFrame2();

    return;

    logoFrame();

    // if (headline.trim().indexOf(" ") === -1) {
    //     drawWord(headline.trim());
    // } else {
    //     drawSentence(headline);
    // }
}
