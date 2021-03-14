var balloon, balloonImage;
var database;
var backgroundImage;

function preload(){
  backgroundImage = loadImage("bg.png")
  balloonImage = loadImage("balloon.png")
}

function setup() {
  createCanvas(1000,500);
  database = firebase.database();

  balloon = createSprite(400, 200, 50, 50);
  balloon.addImage(balloonImage);
  balloon.scale = 0.5
}

function draw() {
  background(backgroundImage);  

  if (keyIsDown(RIGHT_ARROW)){
    balloon.x = balloon.x + 10;
  }

  if (keyIsDown(LEFT_ARROW)){
    balloon.x = balloon.x - 10;
  }

  if (keyIsDown(UP_ARROW)){
    balloon.y = balloon.y - 10;
  }

  if (keyIsDown(DOWN_ARROW)){
    balloon.y = balloon.y + 10;
  }

  drawSprites();
}