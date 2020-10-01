var fixedRect, movingRect;
var GameObject1, GameObject2, GameObject3, GameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  GameObject1= createSprite(100,100,50,50);
  GameObject2= createSprite(200,100,50,50);
  GameObject3= createSprite(300,100,50,50);
  GameObject4= createSprite(400,100,50,50);


  GameObject1.shapeColor= "green";
  GameObject2.shapeColor="green";
  GameObject3.shapeColor="green";
  GameObject4.shapeColor="green";

  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  if (isTouching(movingRect,GameObject3)){
    movingRect.shapeColor = "blue";
    GameObject3.shapeColor = "blue";

  }
  else {
    movingRect.shapeColor = "green";
    GameObject3.shapeColor = "green";
  }
  

  drawSprites();
}
