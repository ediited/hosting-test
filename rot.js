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
  



  fill(Math.abs(rotationX),Math.abs(rotationY),Math.abs(rotationZ));
  
  rect(0,0,window.innerWidth,window.innerHeight);




  textAlign(CENTER,CENTER);
  fill(0,0,0);
  text(rotationX+"x, "+rotationY+"y, "+rotationZ+"z, ", window.innerWidth/2 , window.innerHeight-30);
  

}