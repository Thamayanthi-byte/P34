
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;


function preload(){
bg=loadImage("bg.png");	
n=loadImage("note.png");
def=loadAnimation("bg1.png","bg2.png","bg3.png","bg4.png")
}

function setup(){
    createCanvas(1520,750);
    engine = Engine.create();
    world = engine.world;
note = createSprite(210,80,20,20);
note.addImage(n);
note.scale=0.50;
note.lifetime=100;

defaultbg=createSprite(760,400,20,20);
defaultbg.addAnimation("is a default background ",def);
defaultbg.scale=2;
defaultbg.lifetime=50;

	ground=new Ground(600,750,1200,20);
	b1=new Box(900,100);
	b2=new Box(900,100);
	b3=new Box(900,100);
	b4=new Box(900,100);
	b5=new Box(900,100);
	b6=new Box(900,100);
	b7=new Box(800,100);
	b8=new Box(800,100);
	b9=new Box(800,100);
	b10=new Box(800,100);
	b11=new Box(800,100);
	b12=new Box(800,100);
	b13=new Box(700,100);
	b14=new Box(700,100);
	b15=new Box(700,100);
	b16=new Box(700,100);
	b17=new Box(700,100);
	b18=new Box(700,100);
	b19=new Box(700,100);
	b20=new Box(700,100);
	doctor=new Doct(200,200,200,500);
	attach=new Attacher(doctor.body,{x:620,y:250});
	monster=new Monst(1100,100,300,300);
}


function draw() {
	background(bg);
 Engine.update(engine);
 //ground.display();
 b1.display();
 b2.display();
 b3.display();
 b4.display();
 b5.display();
 b6.display();
 b7.display();
 b8.display();
 b9.display();
 monster.display();
 b10.display();
 b11.display();
 b12.display();
 b13.display();
 b14.display();
 b15.display();
 b16.display();
 b17.display();
 b18.display();
 b19.display();
 b20.display();
doctor.display();
attach.display();
drawSprites();
}
function mouseDragged(){
Matter.Body.setPosition(doctor.body,{x:mouseX,y:mouseY})
}


