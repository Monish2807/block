
function setup() {
  createCanvas(800,400);
  block2 = createSprite(400, 200, 50, 50);
  block2.shapeColor = "red";
  block1 = createSprite(230, 300, 50, 50,);
  block1.shapeColor = "blue";

}

function draw() {
  background(255,255,255); 
  block2.x = World.mouseX;
  block2.y = World.mouseY;
  if(block2.x - block1.x <= block1.width/2 + block2.width/2 && block1.x - block2.x <= block1.width/2 + block2.width/2 && block2.y - block1.y <= block1.height/2 + block2.height/2 && block1.y - block2.y <= block1.height/2 + block2.height/2)
  {
    block2.shapeColor = "green";
    block1.shapeColor = "green";

    
  }
  else {
    block2.shapeColor = "red";
    block1.shapeColor = "blue";
  }
  console.log(block2.x - block1.x);
  drawSprites();
}