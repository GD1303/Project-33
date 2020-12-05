const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var gameState = "play";

var particles = [];
var plinkos = [];
var divisions = [];

var particle;

var divisionHeight = 300;
var score = 0;
var turn = 0;

function setup() {
  createCanvas(800, 800);

  engine = Engine.create();
	world = engine.world;
  Engine.run(engine);

  ground = new Ground(width/2, height, width, 20);

  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Divisions(k, height - divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 75; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 75));
  }

  for (var j = 50; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j, 175));
  }
  
  for (var j = 75; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 275));
  }
  
  for (var j = 50; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j, 375));
  }

  //plan = createSprite(240, 600, 10, 10)

  //logs
  //console.log((ground.width - 100)/10);
}

function draw() {
  background(0);
  Engine.update(engine);

  ground.display();

  for (var i = 0; i < plinkos.length; i ++) {
    plinkos[i].display();
  }
  
  /*
  if(frameCount % 60 === 0){
    particles.push(new Particle(random(width/2 - 30, width/2 + 30), 10, 10));
    //score ++;
  }
  */
 
  for (var j = 0; j < particles.length; j ++) {
    particles[j].display();
  }
  
  for (var k = 0; k < divisions.length; k ++) {
    divisions[k].display();
  }

  if(gameState == "end") {
    textSize(100);
    text("Game Over", 150, 250);
  }

  if(particle != null) {
    particle.display();
    if(particle.body.position.y > 760) {
      if(particle.body.position.x < 80) {
        score = score + 500;
        particle = null;
        if(turn >= 5) gameState = "end";
      }

      else if(particle.body.position.x > 81 && particle.body.position.x < 160) {
        score = score + 350;
        particle = null;
        if(turn >= 5) gameState = "end";
      }

      else if(particle.body.position.x > 161 && particle.body.position.x < 240) {
        score = score + 350;
        particle = null;
        if(turn >= 5) gameState = "end";
      }

      else if(particle.body.position.x > 241 && particle.body.position.x < 320) {
        score = score + 250;
        particle = null;
        if(turn >= 5) gameState = "end";
      }

      else if(particle.body.position.x > 321 && particle.body.position.x < 400) {
        score = score + 100;
        particle = null;
        if(turn >= 5) gameState = "end";
      }

      else if(particle.body.position.x > 401 && particle.body.position.x < 480) {
        score = score + 100;
        particle = null;
        if(turn >= 5) gameState = "end";
      }

      else if(particle.body.position.x > 481 && particle.body.position.x < 560) {
        score = score + 100;
        particle = null;
        if(turn >= 5) gameState = "end";
      }

      else if(particle.body.position.x > 561 && particle.body.position.x < 640) {
        score = score + 100;
        particle = null;
        if(turn >= 5) gameState = "end";
      }

      else if(particle.body.position.x > 641 && particle.body.position.x < 720) {
        score = score + 250;
        particle = null;
        if(turn >= 5) gameState = "end";
      }

      else if(particle.body.position.x > 721 && particle.body.position.x < 800) {
        score = score + 350;
        particle = null;
        if(turn >= 5) gameState = "end";
      }

      else if(particle.body.position.x > 801 && particle.body.position.x < 880) {
        score = score + 500;
        particle = null;
        if(turn >= 5) gameState = "end";
      }
    }
  }
 
  //texts
  textSize(20);
  textFont("Georgia");
  textAlign(CENTER);
  fill(251, 185, 197);
  text("Score: " + score, 50, 30);

  textSize(15);
  textFont("Georgia");
  textAlign(CENTER);
  fill(184, 223, 230);
  text("500", 40, 530);

  textSize(15);
  textFont("Georgia");
  textAlign(CENTER);
  fill(184, 223, 230);
  text("350", 120, 530);

  textSize(15);
  textFont("Georgia");
  textAlign(CENTER);
  fill(184, 223, 230);
  text("250", 200, 530);

  textSize(15);
  textFont("Georgia");
  textAlign(CENTER);
  fill(184, 223, 230);
  text("100", 280, 530);

  textSize(15);
  textFont("Georgia");
  textAlign(CENTER);
  fill(184, 223, 230);
  text("100", 360, 530);

  textSize(15);
  textFont("Georgia");
  textAlign(CENTER);
  fill(184, 223, 230);
  text("100", 440, 530);

  textSize(15);
  textFont("Georgia");
  textAlign(CENTER);
  fill(184, 223, 230);
  text("100", 520, 530);

  textSize(15);
  textFont("Georgia");
  textAlign(CENTER);
  fill(184, 223, 230);
  text("250", 600, 530);

  textSize(15);
  textFont("Georgia");
  textAlign(CENTER);
  fill(184, 223, 230);
  text("350", 680, 530);

  textSize(15);
  textFont("Georgia");
  textAlign(CENTER);
  fill(184, 223, 230);
  text("500", 760, 530);

  drawSprites();
}

function mousePressed() {
  if(gameState !== "end") {
    turn ++
    particle = new Particle(mouseX, 10, 10, 10);
  }
}