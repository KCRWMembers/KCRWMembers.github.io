// TODO: figure out 300 DPI: https://gokcetaskan.com/artofcode/high-quality-export
// TODO: PDF support: https://github.com/zenozeng/p5.js-pdf
// colors; orange: #f46020; blue: #97d8e7

/**
 * Week 11 TODOs
 * - do 4 random type treatments using the compass idea
 * - cycle through 5 color combos
 * - make it available for 4 aspect ratios:
 *     1:1
 *     16:9 video thumbnail
 *     9:16 IG story
 *     2:3 for poster
 */

let c;
let headline = "KCRW";//"Headline";

let typeface;
let formatDropdown;

const INSTAGRAM = "Instagram";
const STORY = "Story";
const WIDESCREEN = "Widescreen";
const POSTER = "Poster";

const colors = [
    {text: "#f46020", background: "#97d8e7"},
    {text: "#97d8e7", background: "#f46020"},
    {text: "#0CBA1C", background: "#17E530"},
    {text: "#AD098A", background: "#EF35C8"},
    {text: "#FFCE00", background: "#129CB2"},
    {text: "#F46020", background: "#BF3100"}
];

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

    let pickColors = random(colors);
    background(pickColors.background);
    noStroke();
    fill(pickColors.text);
}

function setup() {
    pixelDensity(2);

    const savePNGBtn = createButton('Save PNG');
    savePNGBtn.mousePressed(savePNGClick);
    savePNGBtn.position(10, 10);

    const headlineInput = createInput('Headline');
    headlineInput.position(110, 10)
    headlineInput.size(200);
    headlineInput.value(headline);
    headlineInput.input(headlineChange);

    formatDropdown = createSelect();
    formatDropdown.position(360, 10);
    formatDropdown.option(INSTAGRAM);
    formatDropdown.option(STORY);
    formatDropdown.option(WIDESCREEN);
    formatDropdown.option(POSTER);
    formatDropdown.selected(INSTAGRAM);
    formatDropdown.changed(formatChanged);

    c = createCanvas(1080/2, 1080/2);
    c.position(10, 40);

    formatChanged();
}

function drawWord(word) {
    // TODO: have this adjust the type based on formatDropdown.value()
    // maybe just the type size
    // width and height can be use hmm
    // 
    
    push();

    rectMode(CORNER);
    angleMode(DEGREES);
    const sz = Math.min(width, height)/5;
    textSize(sz);

    // TODO: need a different Y adjustment for story and poster modes
    push();
    rotate(-15);
    text("K", 0, height/10 + sz/3);
    pop();

    push();
    rotate(15);
    text("C", width - width/10, -sz/2);
    pop();

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

    return;
    
    if (word.toUpperCase() === "KCRW") {
        // 1: headline is KCRW
        // TODO: add some randomness or motion to it
        push();

        rectMode(CORNER);
        angleMode(DEGREES);
        
        push();
        textSize(375);
        text("K", -40, height * .45);
        pop();

        push();
        textSize(300);
        rotate(-17.5)
        text("C", width*.25, height*.65);
        pop();

        push();
        textSize(350);
        rotate(14.5)
        text("R", width*.15, height*.9);
        pop();

        push();
        textSize(275);
        rotate(-15)
        text("W", width*0.2, height*1.2);
        pop();

        pop();
    } else {
        // 2: headline is a word; split into pairs?
        
    }
}

function drawSentence() {
    // 3: headline is multiple words; split into pairs/quarters?
}

function draw() {
    textFont(typeface);

    if (headline.trim().indexOf(" ") === -1) {
        drawWord(headline.trim());
    } else {
        drawSentence(headline);
    }
}
