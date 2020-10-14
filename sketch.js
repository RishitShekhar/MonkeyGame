var player,ground,bananaGroup, obstaclesGroup,score, rand, survivalTime, bananaImage, obstacleImage, background1;


function preload(){
  backImage = loadImage("Jungle.png");
  
  player_running = loadImage("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png")
  
  
  bananaImage = loadImage("Banana.png");
  obstacleImage = loadImage("stone.png");
}

function setup(){
  
createCanvas(400,400);
  background = createSprite(400,400,400,400);
  background.addImage("jungle", Jungle.png);
  
  background.velocityX = -3;
  background.width = background.width/2;
  
  ground.Visible = false;
  
player = createSprite(50,359,20,50);
player.setAnimation("Monkey_01.png");
player.scale = 0.1;

ground = createSprite(400,395,800,10);
ground.velocityX = -4;
ground.x = ground.width/2;



score = 0;

bananaGroup = createGroup();
obstaclesGroup = createGroup();

}

function draw() {
  stroke("white");
  background(255);
  textSize(20);
  fill("white");
  text("Score: " + score, 500,50);
  
   //jump when the space key is pressed
    if(keyDown("space") && player.y >= 359){
      player.velocityY = -12 ;
      playSound("jump.mp3");
    }
  
  
  if(bananaGroup.isTouching(player)){
    score = score + 2;
  }
  
  player.collide(ground);
  
  if(player.y < 359){
    player.velocityY = player.velocityY + 0.8;
  }
   
  if(obstaclesGroup.isTouching(player)){
    player.scale = 0.2
  }
 
 if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
  if (foodGroup.isTouching(player)){
    score = score + 2
    
  }
  
  
  switch(score){
      case 10: player.scale = 0.12;
        break;
      case 20: player.scale = 0.14;
        break;
      case 30: player.scale = 0.16;
        break;
      case 40: player.scale = 0.18;
        break;
        default: break;
    
  }
    
  edges = createEdgeSprites();
    
    
    
    obstacles();
    food();
    drawSprites();
}

function food(){
 if(World.frameCount % 80 === 0) {
    var banana = createSprite(400,265,10,40);
    banana.velocityX = -5;
    banana.lifetime = 150;


    rand = randomNumber(120,200);
    
    banana.setAnimation("Banana");
    banana.scale = 0.05;
    
    bananaGroup.add(banana);
 }
    
}

function obstacles(){
  if(World.frameCount % 300 === 0) {
    var obstacle = createSprite(400,365,10,40);
    obstacle.velocityX = -5;
    obstacle.lifetime = 150;

obstacle.scale = 0.2
    obstacle.setAnimation("Stone");
  }
  survivalTime = 0;
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time: " + survivalTime,100,50);
}


