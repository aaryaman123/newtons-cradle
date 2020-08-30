
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5;
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

var options = {
		isStatic : true
	}

	//Create the Bodies Here.
	bob1 = new Bob(210,600,40);
	bob2 = new Bob(290,600,40);
	bob3 = new Bob(370,600,40);
	bob4 = new Bob(450,600,40);
	bob5 = new Bob(530,600,40);

	roof = Bodies.rectangle(370,300,400,20,options);
	World.add(world, roof);

	rope1 = new Rope(bob3.body,this.roof,0,0);
	rope2 = new Rope(bob4.body,this.roof,80,0);
	rope3 = new Rope(bob5.body,this.roof,160,0);
	rope4 = new Rope(bob2.body,this.roof,-80,0);
	rope5 = new Rope(bob1.body,this.roof,-160,0);

	Engine.run(engine);
}

function draw() {  
  background(250);
  
  rectMode(CENTER);
  rect(roof.position.x, roof.position.y,400,20);


  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x: 600, y: 600});
}
}