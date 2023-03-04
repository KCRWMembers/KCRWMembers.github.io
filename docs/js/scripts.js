/**
 * Inputs to incorporate:
 * - live radio stream
 * - BPM
 * - volume
 * - time of day in Los Angeles
 *
 * Future variables may include:
 * - programming type (music, news, culture)
 * - weather
 * - time of year
 */

/**
 * TODO:
 * X) sliders for: intensity?
 * Fix kerning by as type scales
 * Fix splitting words with apostrophe and other punc
 * add paragraph mode
 */

const initialValue = 'Turn it up ☀️';
const containerID = '#variableType';
const spanIDPrefix = 'explore'; // This string must be valid as an HTML ID
let magicString;
let curString = initialValue;
let type;

function setup() {
  frameRate(20);
  select('body').style('background-color', '#FF6600');
  
  setupHTML(initialValue);
  
  magicString = createInput();
  magicString.position(20, 30);
  magicString.value(initialValue);
  magicString.input(setupHTML);
}

function setupHTML() {
  const container = select(containerID);
  
  // Set initial inline CSS styles
  container.style('font-family', 'aeternusHeavy');
  container.style('font-size', '200px');
  container.style('color', 'white');
  container.style('margin-left', '2rem')
  
  let innerHTML = '<p>';
  
  const str = magicString ? magicString.value().trim() : curString;
  
  let spans = '';
  for (let i = 0; i < str.length; i++) {
    spans += `<span id="${spanIDPrefix}-${i}">${str[i]}</span>`;
  }
  innerHTML += spans;
  
  innerHTML += '</p>';
  container.html(innerHTML);
  // Update our cached value, avoid race condition
  curString = str;
}

function draw() {
  // TODO: determine mode: word vs. sentence vs. paragraph
  
  const chars = curString;
  
  // Mode 1: word
  if (chars.indexOf(' ') === -1) {
    for (let i = 0; i < chars.length; i++) {
      let fontHeight = map(i, 0, chars.length-1, 100, 850);
      let fontSize = map(i, 0, chars.length, 5, 60);
      // Get the HTML span for that letter
      let letter = select(`#${spanIDPrefix}-${i}`);
      // letter.style('font-size', `${125*(i+1)}px`);
      letter.style('font-size', `${fontSize}rem`);
      letter.style('font-variation-settings', `"HGHT" ${fontHeight}`)
    }
  }
  // Mode 2: sentence
  else {
    const words = chars.split(/\b[.*]?\b/g);
    
    let j = 0;
    for (let w = 0; w < words.length; w++) {
      let fontHeight = map(w, 0, words.length-1, 100, 850);
      let fontSize = map(w, 0, words.length-1, 3, 15);
      
      let processed = 0;
      while (processed < words[w].length) {
        let letter = select(`#${spanIDPrefix}-${j+processed}`);
        letter.style('font-size', `${fontSize}rem`);
        letter.style('font-variation-settings', `"HGHT" ${fontHeight}`);
        magicString.style('text-align', 'center');
        processed++;
      }
      j += processed;
    }
  }
}