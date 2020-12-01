
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
var paper  = new Paper(20,20,2);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  keyPressed();
  drawSprites();
 function keyPressed(){
if(keyCode === UP_ARROW){

matter.Body.applyforce(paperObject.body,paperObject.body.position,{x:85,y:-85});

}


 }
}



