const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;
var ground;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground1 = new Ground(600,375,1200,5);
    box1 = new Box(700,320,70,70);
    box2 = new Box(910,320,70,70);
    pig1 = new Pig(805,350);
    log1 = new Log(805,260,300,PI/2);
    box3 = new Box(700,250,70,70);
    box4 = new Box(910,250,70,70);
    pig2 = new Pig(805,240);
    log2 = new Log(805,180,300,PI/2);
    box5 = new Box(805,150,70,70);
    log3 = new Log(740,120,300/2,PI/3);
    log4 = new Log(880,120,300/2,-PI/3);
    bird1 = new Bird(400,300);
    
}

function draw(){
    background(51,255,255);
    Engine.update(engine);
     box1.display();
     box2.display();
     ground1.display();  
     pig1.display();
     log1.display();
     box3.display();
     box4.display();
     pig2.display();
     log2.display();
     box5.display();
     log3.display();
     log4.display();
     bird1.display();
}