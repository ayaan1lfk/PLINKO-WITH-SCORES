var ground;
var score = 0;
var wall1,wall2,wall3,wall4;
var ball;
var block1,block2,block3,block4;
var gameState = "PLAY";
function setup() {
  createCanvas(480,800);
  ground = createSprite(200,620,800,10);
  wall1 = createSprite(400, 510, 10, 300);
  wall2 = createSprite(300, 510, 10, 300);
  wall3 = createSprite(200, 510, 10, 300);
  wall4 = createSprite(100, 510, 10, 300);
  ball = createSprite(210,50,10,10);
  block1 = createSprite(250,100,10,10);
  block2 = createSprite(150,100,10,10);
  block3 = createSprite(200,100,10,10);
  block4 = createSprite(250,140,10,10);
}

function draw() {
  background(255,255,255);
  ball.shapeColor = "yellow";
  gameState = "PLAY"
  ball.collide(block1);
  ball.collide(block2);
  ball.collide(block3);
  ball.collide(block4);
  ball.collide(ground);
  if(ball.y >= 500){
    score = score + 50;
  }
  if(score >= 100){
    gameState = "END";
  }
  textSize(20);
  text("Score: " + score,20,20);
  if(gameState === "PLAY"){
    if(keyDown("space")){
      ball.velocityY = 5;
      ball.velocityX = 0;
    }
  }
  if(gameState === "END"){
    
      ball.velocityY = 0;
      ball.velocityX = 0;
      score = 0;
      text("GAME OVER",210,300)
      text("press R to reset",210,250)
    
  }
  if(keyDown("R")){
    ball.y = 50;
    ball.x = 210;
    ball.setVelocity(0,0);
  }
  drawSprites();
}