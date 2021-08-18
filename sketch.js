const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase;
var computer, computerBase;

var arrow;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  //Create Player Archer Object
  //Create an arrow Object
  
}

function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

 
  playerBase.display(playerBase = new PlayerBase(300, random(450, height - 300), 180, 150));
  player.display( player = new Player(285, playerBase.body.position.y - 153, 50, 180));
  

  computerBase.display(computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  ));
  computer.display( computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  ));
  
  playerArcher.display();
  computerArcher.
display(computerArcher = new ComputerArcher(
  width - 340,
  computerBase.body.position.y - 180,
  120,
  120
))


  //Display arrow();
  computerarrow = new ComputerArrow(10,20,10,10,)
  //if Space (32) key is pressed call shoot function of playerArrow
  if(keyCode === 32){
    //Call shoot() function and pass angle of playerArcher


  }
}