var ball
var ball2

function setup () {
canvas = createCanvas(600,600);
ball = createSprite(200, 300, 20,20);
ball2 = createSprite(300, 200, 30, 40);
}

function draw () {
background ("blue");
if (keyIsDown(LEFT_ARROW)) {
  ball.velocityX = -5;
}
if (keyIsDown(RIGHT_ARROW)) {
  ball.velocityX = 5;
}
if (keyIsDown(DOWN_ARROW)){
  ball.velocityY = 5;
}
if(keyIsDown(UP_ARROW)) {
  ball.velocityY = -5;
}
  drawSprites();
}