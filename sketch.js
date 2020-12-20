const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground
var d1, d2, d3, d4, d5, d6, d7
var p1, p2, p3, p4, p5, p6, p7, p8, p9,p10
var particle


function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
  p1 = new Plinko(240, 400, 20, 20)
  particlespawn()
}

function draw() {
  background(255,255,255);  
  drawSprites();
  p1.display();
}

function particlespawn(){
 var x = Math.round(random(1,479)) 
  particle = new Particle(x, 0, 20, 20)

}
