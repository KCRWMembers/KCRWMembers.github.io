function navOnHover(self) {
    select('body').setAttribute('style', 'background-color:#129CB2');
}

function navOffHover(self) {
    select('body').setAttribute('style', 'background-color:#f46020');
}

function playPauseOnClick(self) {
    const playPauseIcon = select('#btn-play-pause > i');
    const streamAudio = select("#kcrw-stream");
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
// use p5 loadJSON() -- https://p5js.org/reference/#/p5/loadJSON
// create an element to contain our audio
const el = document.createElement('audio');
el.id = "kcrw-stream";
el.crossOrigin = 'anonymous';
el.src = 'http://kcrw.streamguys1.com/kcrw_192k_mp3_on_air_internet_radio';
el.autoplay = false;
document.getElementById('radio-stream').appendChild(el);


// TODO: for poster, figure out 300 DPI: https://gokcetaskan.com/artofcode/high-quality-export
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

let typeface;
let formatDropdown;

const INSTAGRAM = "Instagram";
const STORY = "Story";
const WIDESCREEN = "Widescreen";
const POSTER = "Poster";
const OPTIONS = [INSTAGRAM, STORY, WIDESCREEN, POSTER];

// TODO: probably need more variations or math to pull these values dynamically
const mbp_width = 640;
const mbp_height = 480;

let K_SVG;
let C_SVG;
let R_SVG;
let W_SVG;

const colors = [
    {text: "#f46220", background: "#560011"},
    {text: "#560011", background: "#f46220"},
    {text: "#82ced8", background: "#103138"},
    {text: "#103138", background: "#82ced8"},
    {text: "#ffce00", background: "#6d4900"},
    {text: "#6d4900", background: "#ffce00"}
];

let currentColors = colors[0];

function preload() {
    typeface = loadFont('../../fonts/PPCirka-Bold.otf');
    K_SVG = loadImage("../../img/KCRW_K_white.svg");
    C_SVG = loadImage("../../img/KCRW_C_white.svg");
    R_SVG = loadImage("../../img/KCRW_R_white.svg");
    W_SVG = loadImage("../../img/KCRW_W_white.svg");
}

function savePNGClick() {
    saveCanvas(c, `KCRW-template-${Date.now()}.png`);
}

function resizeStory() {
    c.resize(1080/2, 1920/2);
    video.size(height * mbp_width / mbp_height, height);
}

function resizeWidescreen() {
    c.resize(1920/2, 1080/2);
    video.size(width, width * mbp_height / mbp_width);
}

function resizeSquare() {
    c.resize(1080/2, 1080/2);
    video.size(height * mbp_width / mbp_height, height);
}

function resizePoster() {
    c.resize(1080/2, 1620/2);
    video.size(height * mbp_width / mbp_height, height);
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
    noStroke();
    fill(currentColors.text);
}

let video;

function setup() {
    // Setup inputs
    select("#btn-save").mousePressed(savePNGClick);
    select("#btn-change-colors").mousePressed(changeColors);

    formatDropdown = createSelect(select("#format-dropdown"));
    for (let o of OPTIONS) {
        formatDropdown.option(o);
    }
    formatDropdown.changed(formatChanged);

    // General setup
    frameRate(60);
    pixelDensity(2);

    video = createCapture(VIDEO);
    c = createCanvas(1080/2, 1080/2);
    c.position(10, 160);
    video.hide();

    changeColors();
    resizeSquare();
    textFont(typeface);
}


function drawLogoFrame() {
    const svgSize = 100;
    const svgMargin = 16; // TODO: This will need to change for IG story and posters

    push();
    tint(currentColors.text);
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

let data = {};

function draw() {
    background(currentColors.background);

    // Center the video to the canvas
    push();
    imageMode(CENTER);
    image(video, width/2, height/2);
    pop();

    drawLogoFrame();

    fill(currentColors.text);
    push();
    textAlign(CENTER);
    textSize(20);
    text(data.title, width/2, height/2.1);
    text(data.artist, width/2, height/1.9);
    pop();

    if (frameCount % 60 === 0) {
        let newdata = loadJSON("https://tracklist-api.kcrw.com/Music");
        if (data && data.title && data.artist) {
            select("#song-text").html(data.title);
            select("#artist-text").html(data.artist);
        }
        data = newdata;
    }
}
