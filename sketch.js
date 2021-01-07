
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
	dustbinimg = loadImage("dustbingreen.png")

}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(700, 680, 1400, 20)

	paper = new Paper(100, 100, 70)

	bottom = new Dustbin(1000, 650, 200, 20)
	right = new Dustbin(1100,600,20, 100)
	left = new Dustbin(900, 600, 20, 100)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
	ground.display();
	paper.display();
	bottom.display();
	left.display();
	right.display();
	image(dustbinimg, 900, 520, 200, 150)
	
  drawSprites();
}

function keyPressed(){

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:600,y:-600})
	}	
}


