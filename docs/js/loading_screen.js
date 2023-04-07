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

let K_SVG;
let C_SVG;
let R_SVG;
let W_SVG;

// Filters are computed here: https://codepen.io/sosuke/pen/Pjoqqp
// Forked here, ideally bring this into the codebase: https://codepen.io/shakeelmohamed-the-vuer/pen/XWxJmGE
const colors = [
    {text: "#f46020", background: "#97d8e7", CSSclass: 'filter1'},
    {text: "#97d8e7", background: "#f46020", CSSclass: 'filter2'},
    {text: "#FFCE00", background: "#129CB2", CSSclass: 'filter3'},
    {text: "#129CB2", background: "#FFCE00", CSSclass: 'filter4'},
    {text: "#F46020", background: "#BF3100", CSSclass: 'filter5'}
];

let currentColors = colors[0];

function preload() {
    K_SVG = loadImage("../../img/KCRW_K_black.svg");
    C_SVG = loadImage("../../img/KCRW_C_black.svg");
    R_SVG = loadImage("../../img/KCRW_R_black.svg");
    W_SVG = loadImage("../../img/KCRW_W_black.svg");
}

function changeColors() {
    currentColors = random(colors);

    select('html').style('background-color', currentColors.background);

    // Applying a class on a non-fixed parent breaks the position of children
    // See: https://stackoverflow.com/questions/52937708/why-does-applying-a-css-filter-on-the-parent-break-the-child-positioning
    for (let letter of "KCRW") {
        // Remove existing color first
        for (let col of colors) {
            select(`#${letter}_svg`).removeClass(col.CSSclass);
        }
        select(`#${letter}_svg`).addClass(currentColors.CSSclass);
    }
}

function setupHTML() {
  select("#K_svg").html('<object type="image/svg+xml" data="../../img/KCRW_K_black.svg" width="100"></object>');
  select("#C_svg").html('<object style="float:right" type="image/svg+xml" data="../../img/KCRW_C_black.svg" width="100"></object>');
  select("#R_svg").html('<object type="image/svg+xml" data="../../img/KCRW_R_black.svg" width="100"></object>');
  select("#W_svg").html('<object style="float:right" type="image/svg+xml" data="../../img/KCRW_W_black.svg" width="100"></object>');
}

function setup() {
    setupHTML();
    changeColors();
    pixelDensity(2);
}

function draw() {
    if (frameCount >= 600) {
        window.location.href = window.location.href.replace("/loading", "");
    }

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

    // Color cycle only at certain points
    switch (scaleFrame) {
        case 0:
        case 30:
        case 60:
        case 90:
            changeColors();
            break;
    }

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

    if (sizeFrame < 60) { // top/bottom/left/right = 1rem

    } else if (sizeFrame < 120) { // top/bottom/left = 1rem; right = 50%
        cRight = wRight = half;

    } else if (sizeFrame < 180) { // top/left = 1rem; right/bottom = 50%
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
