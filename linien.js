

var lineArray=[];
var tankenArray=[];
var imgB;
var drawimg = true;


function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  fill(0);
  imgB = loadImage("assets/Bild2.png");
}


function lineNode(atX,atY){
  this.xC = atX;
  this.yC = atY;
  this.closestFive = [];

  this.draw = function(){
      fill(0);
      ellipse(this.xC,this.yC,2,2);
     }
  }


function draw() {
background(255);
if(drawimg){
image(imgB,0,0,window.innerWidth,window.innerHeight);
}
for (var i = 0;i<lineArray.length; i++){
  lineArray[i].draw();
}

for (var i = 0; i< lineArray.length;i++){
  lineArray[i].xC+=random(-1,1);
  lineArray[i].yC+=random(-1,1);

}

if(tankenArray.length!=0 && lineArray.length !=0){
for(var i = 0;i< tankenArray.length;i++){
  for (var j = 0;j<tankenArray[i].closestFive.length;j++){
    stroke(200);
    strokeWeight(3);
    stroke(255);
   stroke(tankenArray[i].closestFive.length*10-30,200-tankenArray[i].closestFive.length*10-30,0);
    strokeWeight(2);

    stroke(tankenArray[i].closestFive.length*5,100-tankenArray[i].closestFive.length*5,0);
    line(tankenArray[i].xC,tankenArray[i].yC,tankenArray[i].closestFive[j].xC,tankenArray[i].closestFive[j].yC);
       }
  }
}

}

function findClosest(toAddTo){
  for (var i = 0; i < lineArray.length ; i++){
  if(dist(toAddTo.xC,toAddTo.yC,lineArray[i].xC,lineArray[i].yC)<200){
    toAddTo.closestFive[toAddTo.closestFive.length] = (lineArray[i]);
    }
  }
}

function mousePressed(){
  lineArray.push(new lineNode(mouseX,mouseY));

}

function keyPressed(){
  if (keyCode == 18){
    console.log("alt pressed");
    tankenArray.push(new lineNode(mouseX,mouseY));
    findClosest(tankenArray[tankenArray.length-1]);
  }
}
