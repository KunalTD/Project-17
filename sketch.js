
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananagroup, obstaclegroup
var score
var ground
var SurvivalTime=0, score=0;

function preload(){
  
  
  monkey_running =        loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() 
{
  createCanvas(600,400);
  
  monkey=createSprite(80,315)
  monkey.addAnimation("monkey", monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(300,350,1200,10);
  ground.shapeColor="black";
  ground.velocityX=-5;

  bananagroup=new Group();
  obstaclegroup=new Group();
  
}


function draw() 
{
      background("white");
  
      if(ground.x<0)
        {
           ground.x=ground.width/2;
        }
  
  
      if(keyDown("space") && monkey.y>=175)
        {
           monkey.velocityY=-10;
        }
   
      monkey.velocityY=monkey.velocityY+1;
  
      monkey.collide(ground);
  
      Spawnbanana(); 
      Spawnobstacles();
  
      if(obstaclegroup.isTouching(monkey))
        {
           ground.velocityX=0;
           monkey.velocityY=0;
           bananagroup.setVelocityXEach(0);
           obstaclegroup.setVelocityXEach(0);
           bananagroup.setLifetimeEach(-1);
           obstaclegroup.setLifetimeEach(-1);
        }
  
  
      drawSprites();
    
      SurvivalTime=Math.ceil(frameCount/frameRate())
      text("Survival Time="+SurvivalTime, 25, 25);
   
      text("score="+score,525,25);
}


function Spawnbanana()
{
   if(frameCount%100===0)
     {
        banana=createSprite(650,Math.round(random(150,250)))
        banana.addImage("banana", bananaImage);
        banana.scale=0.08;
        banana.velocityX=-5;
        banana.lifetime=150
        bananagroup.add(banana);
    
       
     }
}


function Spawnobstacles()
{
    if(frameCount%250===0)
     {
        obstacle=createSprite(650,330);
        obstacle.addImage("obstacle", obstacleImage);
        obstacle.scale=0.1;
        obstacle.velocityX=-6;
        obstacle.lifetime=120;
        obstaclegroup.add(obstacle);
     } 
}







