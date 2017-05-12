var withballs = false;
var touched = false;
var x = 0;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    frameRate(120);

    background(255, 255, 255);

    fill(0, 0, 0);
    rect(-width, -height, width * 2, height * 2);
   // blendMode(SOFT_LIGHT); 

}

function draw() {
    translate(window.innerWidth / 2, window.innerHeight / 2);


    if (mouseIsPressed || touched) {
        fill(255, 255, 255, 30);
        rect(-width, -height, width * 2, height * 2);
        noStroke();
        stroke(53, 242, 233);
        for (var i = 360; i > 0; i -= 1) {
            fill(40, 237, 237);

            line((mouseX - width / 2) * cos(mouseX * i), (mouseY - height / 2) * sin(mouseY * i), (mouseX - width / 2) * cos(mouseX * (i - 1)), (mouseY - height / 2) * sin(mouseY * (i - 1)));

            if (withballs) {
                ellipse((mouseX - width / 2) * cos(mouseX * i), (mouseY - height / 2) * sin(mouseY * i), 5 + 25 * ((mouseX - width / 2) * cos(mouseX * i)) / -width / 2, 5 + 25 * ((mouseX - width / 2) * cos(mouseX * i)) / -width / 2);
                ellipse((mouseX - width / 2) * cos(mouseX * i), (mouseY - height / 2) * sin(mouseY * i), 5 + 25 * ((mouseX - width / 2) * cos(mouseX * i)) / width / 2, 5 + 25 * ((mouseX - width / 2) * cos(mouseX * i)) / width / 2);


            }
            /*
            line(cos(i+mouseY-height/2)*(mouseX-width/2),sin(i+mouseY-height/2)*(mouseX-width/2),cos(i+pmouseY-height/2)*(pmouseX-width/2),sin(i+pmouseY-height/2)*(pmouseX-width/2)); 
            */
        }
    }

};

function touchStarted() {
    touched = true;

}

function touchEnded() {
    touched = false;
}

function keyPressed(){

if (keyCode==83){

  save();
}  
}

function replcolor(){
  for ( var i = window.innerWidth;i>0;i--){
    for (var j = window.innerHeight;i>0;i--){


    }
  }
}

/*


line(cos(i+mouseY-height/2)*(mouseX-width/2),sin(i+mouseY-height/2)*(mouseX-width/2),cos(i+pmouseY-height/2)*(pmouseX-width/2),sin(i+pmouseY-height/2)*(pmouseX-width/2)); 















*/




/*
var score = 0;
var wwidth;
var wheight;
var randX;
var randY;
var blocked;
var drawX;
var drawY;


function setup(){

  createCanvas(window.innerWidth,window.innerHeight);
  wwidth = window.innerWidth;
  wheight = window.innerHeight;

}


function draw(){

  background(255,255,255);
  if((wwidth != window.innerWidth)||(wheight!=window.innerHeight)){
   // console.log("test");
    wwidth = window.innerWidth;
    wheight = window.innerHeight;
    resizeCanvas(wwidth,wheight);
  }
  if(!blocked){
    randY = floor(random(300,400));
    randX = floor(random(300,400));
    blocked = true;
  }
  fill(230,0,230);
  rect(0,0,randX,randY);

/*
  if(window,innerWidth<randX){
    drawX = window.innerWidth;
  }
  else{
    drawX = randX;
  }

  if(window.innerHeight<randY){
    drawY = window.innerHeight;
  }
  else{
    drawY = randY;
  }

  rect(0,0,drawX,drawY);




  if(((window.innerWidth>randX-20)&&(window.innerWidth<randX+20)) && ((window.innerHeight>randY-20)&&(window.innerHeight<randX+20))){
    score++;
    blocked = false;

  }







  //background(100,100,100,10);


}

*/