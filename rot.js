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
  



  fill(Math.abs(rotationX-180),Math.abs(rotationY-180),Math.abs(rotationZ-180));
  
  rect(0,0,window.innerWidth,window.innerHeight);




  textAlign(CENTER,CENTER);
  fill(0,0,0);
  text(round(rotationX*100)/100+"x, "+round(rotationY*100)/100+"y, "+round(rotationZ*100)/100+"z, ", window.innerWidth/2 , window.innerHeight-30);
  

}