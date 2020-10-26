var ground;
var paper,side1,side2,side3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);
	engine = Engine.create();
	world = engine.world;
	
	side1 = new Dustbin(850,583,150,10);
	side2 = new Dustbin(770,550,10,50);
	side3 = new Dustbin(930,550,10,50);
	paper = new Paper(300,590,30);
	ground = new Ground(600,height,1400,20)



	Engine.run(engine);
   
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  side1.display();
  side2.display();
  side3.display();
  ground.display();

  
  drawSprites();
 
}
 function keyPressed() {
	 if(keyCode === UP_ARROW) {
		 Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:40});
	 }
 }


