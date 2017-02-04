console.log("working!")	
//Create an image
var trump = new Image();
//Give the source of the image
trump.src = "Trump.png" 
//Draw the image onto my canvas
trump.onload = function(){
	ctxs.drawImage(trump, 125, 150, 100, 250 );
}
var hil = new Image();
//Give the source of the image
hil.src = "Hiliary.png" 
//Draw the image onto my canvas
hil.onload = function(){
	ctxs.drawImage(hil, 620, 170, 70, 230 );
}
var gmail = new Image();
//Give the source of the image
gmail.src = "gmaillogo.png" 
//Draw the image onto my canvas
gmail.onload = function(){
	ctxs.drawImage(gmail, 540, 270, 30, 30 );
}
var gmail = new Image();
//Give the source of the image
gmail.src = "gmaillogo.png" 
//Draw the image onto my canvas
gmail.onload = function(){
	ctxs.drawImage(gmail, 480, 310, 30, 30 );
}
var wall = new Image();
//Give the source of the image
wall.src = "wall.png" 
//Draw the image onto my canvas
wall.onload = function(){
	ctxs.drawImage(wall, 200, 200, 270, 270 );
}
//Scenery
var cs = document.getElementById("scene");
var ctxs  = cs.getContext("2d")

//SKy and land
ctxs.fillStyle = "green";
ctxs.fillRect(0, 350, 800, 150);
ctxs.fillStyle = "cyan"
ctxs.fillRect(0, 0, 800, 350)
ctxs.beginPath();
ctxs.arc(100, 100, 50, 0, 6.28);
ctxs.closePath();
ctxs.stroke();
ctxs.fillStyle = "gold";
ctxs.fill();
ctxs.beginPath();
ctxs.strokeStyle = "black"
ctxs.moveTo(350,350);
ctxs.lineTo(300,500);
ctxs.lineTo(450, 500);
ctxs.lineTo(400, 350);
ctxs.closePath();
ctxs.strokeStyle = "black";
ctx3.stroke();
ctxs.fillStyle = 'grey'
ctxs.fill();
ctxs.beginPath();
ctxs.strokeStyle = "black"
ctxs.moveTo(375,350);
ctxs.lineTo(375,500);
ctxs.closePath();
ctxs.stroke();
ctxs.fillStyle = "black";
ctxs.fill();



