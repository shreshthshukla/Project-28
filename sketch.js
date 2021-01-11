
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	boyI = loadImage("boy.png")
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     tree1 = new Tree(870,350,20,200);
	 tree2 = new Tree(930,350,20,200);
	 tree3 = new Tree(900,430,100,20);
     ground = new Ground();

	 stone = new Stone(200,300,30)

	 rope = new Sling(stone.body,{x:240,y:320})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  image(boyI ,200,240,200,300);
  tree1.display();
  tree2.display();
  tree3.display();
  image(tree3.image,870,230,750,500);
  ground.display();
  stone.display();
  rope.display();
  drawSprites();
  text(mouseX+","+mouseY,300,200)
}
function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:240, y:320}) 
	  rope.attach(stone.body);
	}
  }
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    rope.fly()
}


