
function setup() {
    initializeFields();
    createCanvas(500, 500);
    background(color(0x2E, 0x27, 0x89));
}

function draw() {
    if (mouseIsPressed) {
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
}

function keyPressed() {
    if (key == '1')
        stroke(color(0xF7, 0x3D, 0x28));
    if (key == '2')
        stroke(color(0xE2, 0x28, 0xF7));
    if (key == '3')
        stroke(color(0x1E, 0x11, 0x98));
}

function initializeFields() {
}
