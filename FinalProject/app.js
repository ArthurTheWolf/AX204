console.log("JS LINKED");
//Delcare all the variables at the top
var game = new Phaser.Game(800,600, Phaser.AUTO, '', {preload: preload, create: create, update: update})
var score = 0;
var life = 0;

function preload(){
	game.load.image('sky', 'assets/sky.png');
	game.load.image('ground', 'assets/platform.png');
	game.load.image('star', 'assets/star.png');
	game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
	game.load.spritesheet('baddie', 'assets/baddie.png', 32, 32)
}

function create(){
	game.physics.startSystem(Phaser.Physics.ARCADE);
	//Adding the sky
	game.add.sprite(0, 0, 'sky');
	//Creating a physics group to hold platforms
	platforms = game.add.physicsGroup();
	platforms.enableBody = true;
	//Adding the ground
	var ground = platforms.create(0, game.world.height - 50, 'ground');
	ground.scale.setTo(2, 2);
	ground.body.immovable = true;
	//Adding the platforms 
	var ledge = platforms.create(400, 400, 'ground');
	ledge.body.immovable = true;
	ledge = platforms.create(-150, 250, 'ground');
	ledge.body.immovable = true;
	//Add a player to my canvas
	player = game.add.sprite(32, game.world.height-150,'dude')
	game.physics.arcade.enable(player);
	player.body.bounce.y= 0.2;
	player.body.gravity.y = 300;
	player.body.collideWorldBounds = true;
	//Defining our animations
	player.animations.add('left',[0,1,2,3],10,true);
	player.animations.add('right',[5,6,7,8],10,true);
	//add cursors as keyboard input to control the player
	cursors = game.input.keyboard.createCursorKeys();
	//add a group of stars
	stars = game.add.group();
	stars.enableBody = true;
	//use a for loop to creat 12 stars evenly spaced
	for (var i=0; i<12; i++){
		//creating a star
		var star = stars.create(70*i, 20, 'star');
		star.body.gravity.y =200;
		star.body.bounce.y = 0.6 + Math.random()*0.3;
	}
	  // Setting style for text
   var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
    //  The Text is positioned at these coordinates within textbound
    scorelabel = game.add.text(-60, 0, "Your score is: ", style);
    scoretext = game.add.text(70, 0, score, style);
    scorelabel.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
    scoretext.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
    //  We'll set the bounds to be from x0, y520 (top down) and be 800px wide by 100px high
    scorelabel.setTextBounds(0, 520, 800, 100);
    scoretext.setTextBounds(0, 520, 800, 100);
    //  Doing the same for lives count
    lifelabel = game.add.text(-300, 0, "Lives: ", style);
    lifetext = game.add.text(-240, 0, life, style);
    lifelabel.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
    lifetext.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
    //  We'll set the bounds to be from x0, y520 (top down) and be 800px wide by 100px high
    lifelabel.setTextBounds(0, 0, 800, 100);
    lifetext.setTextBounds(0, 0, 800, 100);

}

function update(){
	//Having collision between player and ground
	game.physics.arcade.collide(player, platforms)
	game.physics.arcade.collide(stars, platforms)
	//when left and right key are pressed
	if (cursors.left.isDown){
		player.body.velocity.x = -150;
		player.animations.play('left')
	} else if (cursors.right.isDown){
		player.body.velocity.x = 150;
		player.animations.play('right')
	}else {
		player.animations.stop();
		player.body.velocity.x = 0;
		player.frame = 4;
	}
	//player can jump when up key is pressed and when it is touching the platform
	if(cursors.up.isDown && player.body.touching.down){
		player.body.velocity.y = -300;
	}
	//Collect stars when star overlaps with player
	game.physics.arcade.overlap(player, stars, collectStar, null, this);
	//Defining collect star function
	function collectStar(player, star){
		//remove star from screen
		star.kill();
		//Update score
		score = score + 1
		//Making the text reflect the score
		scoretext.setText(score);
		//Create a new star everytime
		star = stars.create(Math.floor(Math.random()*750, 0, 'star');
		star.body.gravity.y =200;
		star.body.bounce.y = 0.6 + Math.random()*0.3;
	}


}

