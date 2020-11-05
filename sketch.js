var ground, Rod1, Rod2, Rod3, ball; 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("yellow");

	Rod1=createSprite(700,600,20,100);
	Rod1.shapeColor=color("grey");

	Rod2=createSprite(500,600,20,100);
	Rod2.shapeColor=color("grey");

	Rod3=createSprite(600,650,220,20);
	Rod3.shapeColor=color("grey");


	engine = Engine.create();
	world = engine.world;
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	
	 ball=Bodies.circle(100, 600, 20);
	 World.add(world,ball);
	 Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
   Matter.Body.applyforce(ball.body, ball.body.position, {x:15,y:-17})   
  }
}