function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    strokeWeight(50);
    if(mouseIsPressed) {
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
}