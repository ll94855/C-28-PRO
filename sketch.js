var tree,tree_img;
var boy,boy_img;
var stone;
var stoneforsling;
var apple;
var tries = 0;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload()
{
	boy_img = loadImage("sprites/boy.png");
	tree_img = loadImage("sprites/tree.png");
}

function setup() {
	createCanvas(800, 700);
	boy = createSprite(200,508,109,163);
	boy.addImage("boy",boy_img);

	engine = Engine.create();
	world = engine.world;
	ground = new Ground(400,700,800,20);

	apple1 = new Apple(520,420);

	stone = new Stone(170,608);

	//Create the Bodies Here.
	tree = createSprite(600,444,417,512);
	tree.addImage("tree",tree_img);

	stoneforsling = new slingForStone(stone.body,{x:200,y:508});

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(45,114,178);
  stone.display();
  ground.display();
  apple1.display();
 stoneforsling.display();

	detectCollide(stone,apple1);

  drawSprites();
  


	fill("black");
	text("Tries: "+tries,100,100);
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased()
{
	stoneforsling.fly();
	tries = tries + 1;
}

function keyPressed()
{
if(keyCode === 32 && tries >-1)
{
	Matter.Body.setPosition(stone.body,{x:200,y:508});
	stoneforsling.attach(stone.body);
	
}
}


 function detectCollide(lstone,lapple)
 {
	appleBodyPosition = lapple.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, appleBodyPosition.x,appleBodyPosition.y)
	if(distance<=60)
	{
		Matter.Body.setStatic(lapple.body,false);
		console.log("yes")
	}

 }
