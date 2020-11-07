const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var score;


function setup() 
{
  createCanvas(480,800);
  score = 0;
  engine = Engine.create();
  world = engine.world;

    ground = new Ground(width/2,height,width,20);

    for (var k = 0; k <= width; k = k + 80)
    {
      divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
    }
 
     for (var j = 75; j <= width; j=j+50) 
     {
     
        plinkos.push(new Plinko(j,75,20));
     }
 
     for (var j = 50; j <= width-10; j=j+50) 
     {
     
        plinkos.push(new Plinko(j,175,20));
     }
 
      for (var j = 75; j <=width; j=j+50) 
     {
     
        plinkos.push(new Plinko(j,275,20));
     }
 
      for (var j = 50; j <=width-10; j=j+50) 
     {
     
        plinkos.push(new Plinko(j,375,20));
     }
}

function draw() 
{
  background("black");  
  Engine.update(engine);


  ground.display();

  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }
  if(frameCount%60===0)
  {
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    score++;
  }

 for (var j = 0; j < particles.length; j++) 
 {
    particles[j].display();
  }
  for (var k = 0; k < divisions.length; k++) 
  {
    
    divisions[k].display();
  }

  drawSprites();
}