var bullet, thickness, wall;
var speed, weight;
var d;

function setup() {
  createCanvas(1600, 400);
  weight = random(30, 52);
  speed = random(223, 321);
  bullet = createSprite(50, 200 ,50, 20); 
  thickness = random(22, 83);
  wall = createSprite(1200, 200, thickness, height/2);
}

function draw() {
  background(255,255,255); 
 
  bullet.velocityX = speed;

  if(hasCollided(bullet, wall)) {
    
    bullet.velocityX = 0;

    d = 0.5*weight*speed*speed/(thickness*thickness*thickness);

  }
  wall.shapeColor = color(80, 80, 80);
  if(d < 10){
    wall.shapeColor = color(0, 255, 0);
  }
  if(d > 10){
    wall.shapeColor = color(255, 0, 0);
  }
  drawSprites();
}

function hasCollided(lBullet, lWall){
  bulletRightEdge = lBullet.width + lBullet.x;
  wallLeftEdge = lWall.x;

  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  {
    return false;
  }
}
