console.log("JS LINKED");
//Delcare all the variables at the top
var canvas;
var ctx;
//Starting position and radius for player sprite
var x = 300;
var y = 300;
var y = 20;
//Keep track of speed in x and y directions
var mx = 0;
var my = 0;
//Positions of fruits
var goodX;
var goodY;	
var badX;
var badY;
var fruitWidth = 50;
var fruitHeight = 50;
//Boolean value to keep track of whether collision is occuring
var goodCollision = false;
var badCollision = false;
//Width and Height of canvas plus keeping score
var WIDTH = 600;
var HEIGHT = 600;
var score  = 0;
//Function for drawing a cirlcle
function circle(x, y, r){
	ctx.beginPath();
	ctx.arc(x, y, r, 0, 6.28);
	ctx.closePath();
	ctx.fillStyle = "black";
	ctx.fill();
}

//Wiping clean the canvas
function clear () {
	ctx.clearRect(0,0,WIDTH,HEIGHT);
}

//Initializing game function
function init(){
	canvas = document.getElementById('myCanvas');
	ctx = canvas.getContext('2d')
	goodX = Math.floor(Math.random()*550);
	goodY = Math.floor(Math.random()*550);;	
    badX = Math.floor(Math.random()*550);;
	badY = Math.floor(Math.random()*550);
	//Wait for a keyboard input
	window.onkeydown = keydownControl;
	//redraw the canvas every 10 ms
	return setInterval(draw, 10);

//Drawing function
function draw() {
	clear();
	circle(x, y, 30)
	drawGood();
	drawBad();
	//move our circle on every iteration
	x += mx;
	y +=my;
	//Making sure the ball reverses direction when it reaches the edge of the canvas
	if (x + mx > width || x + mx < 0){
		mx = -mx

	}
	if (y + my > height || y + my < 0){
		my = -my
	//Checking the collision
	collisionCheck();
	collisionHandle();

}
//What happens if there is a collision
function collisionHandle(){

}
//Checking if there is a collision
function collisionCheck(){

}
//Keyboard control function
function keydownControl(e) {
	//change the speed depending on which button is pressed
	if(e.keyCode == 37){
		mx = -4;
		my = 0;
	}else if(e.keyCode == 38){
		mx = 0;
		my = -4;
	}else if(e.keyCode == 39){
		mx = 0;
		my = -4;
	}else if(e.keyCode == 40){
		mx = 0;
		my = 4;
	}


}
//Import images of good and bad fruit
function drawGood(){
	ctx = document.getElementById('myCanvas').getContext('2d')
	var good = new Image();
	good.src = "GOODSTRAWBERRY.png"
	ctx.drawImage(good, goodX,goodY, 50, 50)
}
function drawBad(){

}
init();
