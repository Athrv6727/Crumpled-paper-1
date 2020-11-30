var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var line1,lin2,line3,line4;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

}

function setup() {
	createCanvas(800, 700);
	

	paperSprite=createSprite(550, 550, 70,70);
    
	line1=createSprite(500,590,25,150)
	line1.shapeColor=color(255,0,0)
	line3=createSprite(700,590,25,150)
	line3.shapeColor=color(255,0,0)
	line2=createSprite(600,650,200,25)
	line2.shapeColor=color(255,0,0)
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	
	engine = Engine.create();
	world = engine.world;

	paperBody = Bodies.circle(width/2 , 300 , 150 , {restitution:0.2, isStatic:true,density:1});
	World.add(world, paperBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperSprite.x= paperBody.position.x 
  paperSprite.y= paperBody.position.y 

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
    Matter.Body.applyForce(paperSprite.Body,paperSprite.Body.position,{x:85,y:85})
    
  }
}



