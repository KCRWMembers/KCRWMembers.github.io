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

// TODO: can probably generalize this to drawChar(context)
//       which takes all the dimensions needed
function drawK(sz) {
    push();
    rotate(-15);

    let xPos = 0;
    let yPos = 0;

    switch(formatDropdown.value()) {
        case INSTAGRAM:
            xPos = 0;
            yPos = height/10 + sz/3;
            break;
        case STORY:
            // Rotating from top left
            // xPos = 0;
            // yPos = height / 5;
            
            // Rotating from center of canvas
            xPos = -width/3;
            yPos = -height/2.5;
            break;
        case WIDESCREEN:
            break;
        case POSTER:
            break;
    }

    text("K", xPos, yPos);

    pop();
}

function drawC(sz) {
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
    
    push();

    rectMode(CORNER);
    angleMode(DEGREES);
    translate(width/2, height/2);
    const sz = Math.min(width, height)/5;
    textSize(sz);

    // TODO: need a different Y adjustment for story and poster modes
    drawK(sz);

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
    textFont(typeface);
    background(currentColors.background);
    fill(currentColors.text);

    logoFrame();

    // if (headline.trim().indexOf(" ") === -1) {
    //     drawWord(headline.trim());
    // } else {
    //     drawSentence(headline);
    // }
}
