
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 700)


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.  
	paper = new Paper(150, 550, 10);

	ground = new Ground(400, 680, 800, 20);
	
	leftSide = new Dustbin(550, 620, 20, 80);
	bottom = new Dustbin(610, 660, 100, 20);
	rightSide = new Dustbin(670, 620, 20, 80);
   

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  paper.display();

  ground.display();

  leftSide.display();
  bottom.display();
  rightSide.display();

  drawSprites();
 
}

function keyPressed(){
	if (keyCode === DOWN_ARROW) {
	  Matter.Body.applyForce(paper.body, paper.body.position, {
		x: 12,
		y: -13
	  });
	}
  }
