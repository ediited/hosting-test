var capture;

function setup(){
  createCanvas(window.innerWidth,window.innerHeight);


  capture = createCapture(VIDEO);
  capture.size(window.innerWidth, window.innerHeight);




}

function draw(){
image(capture,0,0,window.innerWidth,window.innerHeight);
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