
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

ground = new Ground(600,490,1200,20)	
ball = new Ball(150 , 480 , 25 , 25)
dustbin1 = new Dustbin(1000,475,200,30)
dustbin2 = new Dustbin(900,440,30,100)
dustbin3 = new Dustbin(1100,440,30,100)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  ground.display();
  ball.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
		
	}
}


