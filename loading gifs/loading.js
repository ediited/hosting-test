function setup () {
	createCanvas(windowWidth, windowHeight);
	frameRate(30);
}

function resize(){
 	resizeCanvas(windowWidth,windowHeight); 
}

var count = 0;
var drawArray = [
new rotatingRects(30),
new colorChangingRects(),
new rotatingTriangles(),
new turningCirclesColor(),
new turningCirclesNoColor()
];

function draw(){

	if(count>=drawArray.length){

		count = 0;
	}
	translate(width/2,height/2)

	drawArray[count].move();
	drawArray[count].draw();



}

var rotatingRects = function(amount){
	this.rotation = 0;
	this.rectSize = 30;
	this.rectArray = [];
	for (var i = 0 ; i < amount ; i++ ){
		this.rectArray[i] = new rotatingRect();
	}


	var rotatingRect = function(){
		this.rotation();
		this.draw = function(num){
			if (this.rotation>360){
				this.rotation-=360;
			}
			rotate(this.rotation);
			this.rotation*=1+num/60;
		}


	}

	this.draw = function(){

	}

}