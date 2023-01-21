
let images = new Array(12);
let cont = 0;
let audio;

function preload() {
    audio = loadSound('audio/campana.wav');
    for (let i = 0; i < images.length; i++) {
        images[i] = loadImage(`assets/n${i}.png`);
    }
}

function setup() {
    createCanvas(864, 864);
}

function draw() {
    image(images[cont], 0, 0, width, height);
    console.log(frameCount);
    if (frameCount % 40 == 0) {
        audio.play();
        cont++;
        if (cont > 11) {
            cont = 0;
        }
    }
}

function mouseClicked() {
    console.log('hola');
    // sample.loop();
}