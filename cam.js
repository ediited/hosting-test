var cameraInput;

var d = 1; 


function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  // specify multiple formats for different browsers
  cameraInput = createCapture(VIDEO);
  cameraInput.size(window.innerWidth,window.innerHeight);
  //cameraInput.loop();
  cameraInput.hide();
  noStroke();
  fill(0);
}


var drawVid = false;
var stepSize = 15; 

function draw() {
  fill(0,0,0);

  rect(0,0,window.innerWidth*2,window.innerHeight*2);
  fill(0);

  if(drawVid){
  image(cameraInput,0,0,window.innerWidth,window.innerHeight);
}
  cameraInput.loadPixels();
  stepSize = round(constrain(mouseX,250,800)/20);
   //round(constrain(mouseX / 8, 6, 32));
  for (var y=0; y<height; y+=stepSize) {
    for (var x=0; x<width; x+=stepSize) {
      var i = y * width + x;
      var darkness = (0 + cameraInput.pixels[i*4]) / 255;
      var radius = stepSize * darkness +4 ;
      
      var off = (y * width + x)* d * 4; 
      fill( cameraInput.pixels[off], cameraInput.pixels[off+1], cameraInput.pixels[off+2] );
      rectMode(CENTER,CENTER);
      
      rect(x, y, radius, radius);
      fill(0);

    }
  }
  //filter(GRAY);
}

function keyPressed(){

if (keyCode==83){

  save();
}  
}


