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
// use p5 loadJSON() -- https://p5js.org/reference/#/p5/loadJSON

// create an element to contain our audio
const el = document.createElement('audio');
el.id = "kcrw-stream";
el.crossOrigin = 'anonymous';
el.src = 'http://kcrw.streamguys1.com/kcrw_192k_mp3_on_air_internet_radio';
el.autoplay = false;
document.getElementById('radio-stream').appendChild(el);