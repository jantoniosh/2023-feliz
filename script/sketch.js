let myFont;
let vid;
let mask;
let fMask;
let sample;
let colores = ['#0B6A88', '#2DC5F4', '#EC015A', '#FCEE21', '#F063A4', '#F16164'];
let count;
let n;
let d;
let fac = 1 / 6;

function preload() {
    myFont = loadFont('fonts/Montserrat-ExtraBold.ttf');
}

function setup() {
    createCanvas(864, 864);
    mask = createGraphics(width, height);
    noStroke();
    count = 0;
    n = 8;
    d = width / n;
    background(colores[int(random(0,6))]);
    noStroke();
    fill(colores[int(random(0,6))]);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            quad(i * d, (j + 0.5) * d, (i + 0.5) * d, j * d, (i + 1) * d, (j + 0.5) * d, (i + 0.5) * d, (j + 1) * d);
        }
    }
    fMask = createGraphics(width, height);
    mask.fill(255);
    mask.textFont(myFont);
    textStyle(BOLD);
    mask.textAlign(CENTER, CENTER);
    mask.textSize(180);
    mask.text('2', width * 0.2, height * 0.2);
    mask.text('0', width * 0.25, height * 0.4);
    mask.text('2', width * 0.3, height * 0.6);
    mask.text('3', width * 0.35, height * 0.8);
    mask.text('f', width * 0.6, height * 1 * fac);
    mask.text('e', width * 0.65, height * 2 * fac);
    mask.text('l', width * 0.7, height * 3 * fac);
    mask.text('i', width * 0.75, height * 4 * fac);
    mask.text('z', width * 0.8, height * 5 * fac);
    fMask.noStroke();
    fMask.fill(colores[int(random(0,6))]) ;
    fMask.rect(0, 0, width, height);
    fMask.fill(colores[int(random(0,6))]);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            fMask.quad(i * d, (j + 0.5) * d, (i + 0.5) * d, j * d, (i + 1) * d, (j + 0.5) * d, (i + 0.5) * d, (j + 1) * d);
        }
    }
    fMask = fMask.get();
    fMask.mask(mask);
    image(fMask, 0, 0);
}

function draw() {
}