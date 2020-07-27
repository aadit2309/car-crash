var wall,car;
var speed,wieght;

function setup() {
  createCanvas(1600,400);
  this.world=wall=createsprite(1500,200,60,200);
  wall.ShapeColor=Color(80,80,80);
  this.world=car=createsprite(50,200,50,50);
  speed=random(55,90);
  wieght=random(400,1500);
  car.velocityX=speed;
}

function draw() {
  background(255,255,255);  
  var height=this.world.hieght;
  var widht=this.world.widht;
  var x=this.world.position.x;
  var y=this.world.position.y;
  rect(x,y,widht,hieght);
  rect(x,y,widht,height);
  if(wall.x-car.y < (car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=(0.5*wieght*speed*speed)/22500;
    if(deformation>180){
      car.ShapeColor=Color(255,0,0);
    }
    if(deformation<100){
      car.ShapeColor=Color(0,255,0);
    }
    if(deformation<180 && deformation>100){
      car.ShapeColor=Color(230,230,0);
    }
  }
  drawSprites();
}