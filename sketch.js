var player, playerImg;
var scene1Img, scene1;
var exit, exitImg;
var scene2, scene2Img;
var eatPlayer, eatPlayerImg;
var pan, panImg;
var egg, eggImg;
var fry, fryImg;
var banana, bananaImg;
var coffee, coffeeImg;
function preload(){
  scene1Img = loadImage("images/sleeping.png");
  exitImg = loadImage("images/exit.png");
  scene2Img = loadImage("images/kitchen top.png");
  eatPlayerImg = loadImage("images/eating.png");
  panImg = loadImage("images/frypan.png");
  eggImg = loadImage("images/egg.png");
  fryImg = loadImage("images/half fry.png");
  coffeeImg = loadImage("images/coffe.png");
  bananaImg = loadImage("images/banana.png")
}

function setup() {
  createCanvas(500, 500);
  scene1 = createSprite(250, 250, 10, 10);
  scene1.addImage("sleeping image", scene1Img);
  scene1.scale = 0.65;
  
  exit = createSprite(450, 450);
  exit.addImage("Exit Image", exitImg)
  exit.scale = 0.45;
}

function draw() {
  background(0);
  if(mousePressedOver(exit)){
    scene2 = createSprite(250, 250);
    scene2.addImage("kitchen top image", scene2Img);
    scene2.scale = 0.5;
    eatPlayer = createSprite(60, 400);
    eatPlayer.addImage("girl eating", eatPlayerImg);
    eatPlayer.scale = 0.4;
    banana =  createSprite(150 , 50);
    banana.addImage("banana Image", bananaImg);
    banana.scale = 0.3;
    pan = createSprite(275, 250);
    pan.addImage("fry pan", panImg ) 
    pan.scale = 1.5;
    coffee = createSprite(50 , 80);
    coffee.addImage("coffee maker", coffeeImg);
    coffee.scale = 0.3; 
    egg = createSprite(350 , 150);
    egg.addImage("raw egg", eggImg);
    egg.scale = 0.25;
    egg.position.x = mouseX;
    egg.position.y = mouseY;

    if(egg.isTouching(pan)){
    egg.visible = false;
    fry = createSprite(275 , 260);
    fry.addImage("half fry egg", fry);
    fry.scale = 0.4;
  }
  }

  drawSprites();
}
