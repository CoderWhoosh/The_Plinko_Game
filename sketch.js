const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var divisionHeight = 300;
var ground1,p1;
var divisionArray = [];
var particleArray = [];
var plinkoArray = [];

function setup() {
  createCanvas(800,700);
  engine = Engine.create();
  world = engine.world;
  ground1 = new Ground(width/2,690,width,20);

  for (let i = 0; i <= 800; i = i + 80) {
    divisionArray.push(new Division(i,height-divisionHeight/2,10,divisionHeight));
  }

  for (let p = 0; p <= 800; p = p + 130) {
    plinkoArray.push(new Plinko(p,70,30));
  }
  for (let q = 0; q <= 800; q = q + 130) {
    plinkoArray.push(new Plinko(q,140,30));
  }
  for (let r = 0; r <= 800; r = r + 130) {
    plinkoArray.push(new Plinko(r,210,30));
  }
  for (let s = 0; s <= 800; s = s + 130) {
    plinkoArray.push(new Plinko(s,280,30));
  }
  for (let r = 0; r <= 800; r = r + 130) {
    plinkoArray.push(new Plinko(r,350,30));
  }
}

function draw() {
  if(frameCount % 60 == 0){
    particleArray.push(new Particle(random(width/2-20,width/2+20),10,30));
    }
  background(0);  
  ground1.display();

  for (let a = 0; a < divisionArray.length; a++) {
    divisionArray[a].display();
  }

  for (let k = 0; k < plinkoArray.length; k++) {
    plinkoArray[k].display();
  }
  for (let l = 0; l < plinkoArray.length; l++) {
    plinkoArray[l].display();
  }
  for (let m = 0; m < plinkoArray.length; m++) {
    plinkoArray[m].display();
  }
  for (let n = 0; n < plinkoArray.length; n++) {
    plinkoArray[n].display();
  }
  for (let o = 0; o < plinkoArray.length; o++) {
    plinkoArray[o].display();
  }
  Engine.update(engine);
  for (let d = 0; d < particleArray.length; d++) {
    particleArray[d].display();
  }
}