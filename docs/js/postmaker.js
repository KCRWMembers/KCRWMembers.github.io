// TODO: figure out 300 DPI: https://gokcetaskan.com/artofcode/high-quality-export
// TODO: PDF support: https://github.com/zenozeng/p5.js-pdf
// colors; orange: #f46020; blue: #97d8e7

let c;
let headline = "KCRW";//"Headline";

let typeface;

function preload() {
    typeface = loadFont('../../fonts/AttilaSansSharpTrial-Regular.otf');
}

function savePNGClick() {
    saveCanvas(c, `KCRW-template-${Date.now()}.png`);
}

function headlineChange() {
    headline = this.value();
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

    c = createCanvas(1080/2, 1080/2);
    c.position(10, 40);

    background('#97d8e7');
    noStroke();
    fill('#f46020');
    textFont(typeface);
}

function drawWord(word) {
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
    if (headline.trim().indexOf(" ") === -1) {
        drawWord(headline.trim());
    } else {
        drawSentence(headline);
    }
}
