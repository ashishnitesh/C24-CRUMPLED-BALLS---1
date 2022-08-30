
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render
var world,engine,dustbinobj,paperobj,groundobj
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbinobj = new dustbin (1200,650)
paperobj = new Paper (200,450,40)
groundobj = new Ground (width/2,670,width,20)
var render = Render.create({
	element:document.body,
	engine:engine,
	options:{width:1200,height:700,wireframes:false}
})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbinobj.display();
  groundobj.display();
  paperobj.display();
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperobj.body,paperobj.body.position,{x:85,y:-85});
  
	}
}



