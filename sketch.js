  const Engine = Matter.Engine;
  const World= Matter.World;
  const Bodies = Matter.Bodies;

  var engine,world;
  var build1,build2,build3,b1,b2,b3;
  var ground1;
  function setup(){
  var canvas = createCanvas(400,400);
   engine = Engine.create();
   world = engine.world;

   build1 = createSprite(100,330,80,150);
   build2 = createSprite(300,330,80,150);
   build3 = createSprite(200,330,130,300);
   b1 = createSprite(200,380,40,50);
   b1.shapeColor = "white";
   b2 = createSprite(200,130,20,150);
   b3 = createSprite(250,80,80,40);
   b3.shapeColor = "blue";
  // ground1 = new ground(200,390,400,20);
   
}

function draw() {
  background(255,255,255); 
  Engine.update(engine);

  build1.display();
  build2.display();
  build3.display();
  b1.display();
  b2.display();
  b3.display();
}