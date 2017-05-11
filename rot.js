var withballs = false;
var touched = false;
var x = 0;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    frameRate(10);

    background(255, 255, 255);

    fill(0, 0, 0);
    rect(-width, -height, width * 2, height * 2);

}

function draw(){
  fill(abs(rotationX),abs(rotationY),abs(rotationZ));
  rect(100,100,100,100);
}