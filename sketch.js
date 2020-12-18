var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score;
var ground;
var survivalTime,score;

function preload(){ 
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png"); 
}



function setup() {
  createCanvas(600,400);
 survivalTime=0;
  score=0;
  
  monkey=createSprite(50,300,50,50);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.15;
  
  ground=createSprite(50,350,800,10);
  ground.velocityX=-3;
  
  foodGroup=new Group();
  obstacleGroup=new Group();
}


function draw() {
  background(255);
  
  if(ground.x<150){
    ground.x=ground.width/2;
  }
  monkey.collide(ground);
  
  if(keyDown("space")&&monkey.y>120){
    monkey.velocityY=-10;
  }
  monkey.velocityY=monkey.velocityY+0.8;
  
  food();
  spawnobstacle();
  
  drawSprites();
  stroke("black");
  textSize(20);
  fill("black");
  text("Score: "+ score, 400,50);  
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate()) 
  text("Survival Time: "+ survivalTime, 100,50);
}

function food(){
  if(frameCount%80===0){
    banana=createSprite(200,150,50,50);
    banana.addImage(bananaImage);
    banana.y=random(120,200);
    banana.velocityX=-3;
    banana.lifetime=500;
    banana.scale=0.1;
    monkey.depth=banana.depth+1;
    foodGroup.add(banana);
  }
}

function spawnobstacle(){
  if(frameCount%100===0){
    obstacle=createSprite(700,315,10,40);
    obstacle.addImage(obstacleImage);
    obstacleGroup.add(obstacle);
    obstacle.lifetime = 300;
    obstacle.scale=0.15;
    obstacle.velocityX=-6;
  }
}


