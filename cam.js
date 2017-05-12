var capture;

function setup(){
  createCanvas(window.innerWidth,window.innerHeight);


  capture = createCapture(VIDEO);
  //capture.size(window.innerWidth, window.innerHeight);
  capture.hide();



}

function draw(){
background(255);
capture.loadPixels();
  var stepSize = round(constrain(mouseX / 8, 6, 32));
  for (var y=0; y<height; y+=stepSize) {
    for (var x=0; x<width; x+=stepSize) {
      var i = y * width + x;
      var darkness = (255 - capture.pixels[i*4]) / 255;
      var radius = stepSize * darkness;
      ellipse(x, y, radius, radius);
    }
  }


//image(capture,0,0,window.innerWidth,window.innerHeight);
}


/*



var capture;

function setup() {
  createCanvas(390, 240);
  capture = createCapture(VIDEO);
  capture.size(320, 240);
  //capture.hide();
}

function draw() {
  background(255);
  image(capture, 0, 0, 320, 240);
  filter('INVERT');
}





*/