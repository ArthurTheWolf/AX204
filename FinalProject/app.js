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






}

function update(){
	
}

