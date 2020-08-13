
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3;
var ground,ball;


function setup() {
	createCanvas(1200, 700);
	//Create the Bodies Here.
	engine = Engine.create();
	world = engine.world;
	ground = new Ground(600,height,1200,20);
	box1 = new Box (1000,679,200,20);
  box2 = new Box (899,639,20,100);
  box3 = new Box (1090,639,20,100);
  ball = new Ball(200,698,20);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  box1.display();
  box2.display();
  box3.display();
  ground.display();
  ball.display();
  Engine.update(engine);
 
}
function keyPressed(){
  if(keyCode=== UP_ARROW){
    Body.applyForce(ball.body,ball.body.position,{x:25,y:-25})
  }
}



