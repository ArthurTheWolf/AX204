console.log("working!")	
var c = document.getElementById('myCanvas');
var ctx = c.getContext('2d');
//Setting up my pen 
ctx.beginPath();
//Changing the color of the line
ctx.strokeStyle = "white";
ctx.moveTo(75,0);
ctx.lineTo(150, 100);
ctx.lineTo(75,200);
ctx.lineTo(0, 100);
//Drawing line back to starting point
ctx.closePath();
//Telling canvas to actually draw
ctx.stroke();
ctx.fillStyle = "gold";
ctx.fill();

var c2 = document.getElementById('myCanvas2');
var ctx2 = c2.getContext('2d');
ctx2.beginPath();
ctx2.arc(150, 150, 75, 0, 6.28);
ctx2.closePath();
ctx2.stroke();
ctx2.fillStyle = "gold";
ctx2.fill();

var c3 = document.getElementById('myCanvas3');
var ctx3 = c3.getContext('2d');
ctx3.beginPath();
ctx3.strokeStyle = "gold"
ctx3.moveTo(0,0);
ctx3.lineTo(300,300);
ctx3.lineTo(300, 0);
ctx3.lineTo(0, 300);
ctx2.closePath();

ctx3.stroke();
ctx3.fillStyle = "gold";
ctx3.fill();

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
//Making the building
ctxs.fillRect(100,250, 200, 100)
ctxs.clearRect(130, 310, 20, 20);


