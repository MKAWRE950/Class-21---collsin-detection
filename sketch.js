var fixedRect, movingRect;
var gameObject1,gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1 = createSprite(700,500,50,50);
  gameObject1.shapeColor = "green";
  
  gameObject2 = createSprite(350,160,50,50);
  gameObject2.shapeColor = "green";
  
  gameObject3 = createSprite(800,400,50,50)
  gameObject3.shapeColor = "green";

  gameObject4 = createSprite(600,600,50,50);
  gameObject4.shapeColor = "green";
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,gameObject4)){
    movingRect.shapeColor = "red";
    gameObject4.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    gameObject4.shapeColor = "green";
  }

  drawSprites();
}

