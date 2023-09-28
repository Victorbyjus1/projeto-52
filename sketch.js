var detetive_img, detetive;
var ladrão_img, ladrão;
var left_wall,right_wall, top_wall, botton_wall;
var cidade1_img;
var pontos;
var carta_img;

function preload(){
  detetive_img = loadImage("assets/detetive.png");
  ladrão_img = loadImage("assets/ladrao.png");
  cidade1_img = loadImage("assets/cidade1.jpeg");
  carta_img = loadImage("assets/carta.png");
}

function setup(){
  createCanvas(1200, 600);
  pontos = 0;

  detetive = createSprite(400,200, 50, 50);
  detetive.addImage(detetive_img);
  detetive.scale = 0.3;

  ladrão = createSprite(600,200, 50, 50);
  ladrão.addImage(ladrão_img);
  ladrão.scale = 0.35;

  carta = createSprite(50,50,50,50);
  carta.addImage(carta_img);
  carta.scale = 0.3;
  carta.visible = false;

  left_wall = createSprite(1,400,2,800);
  right_wall = createSprite(1199,300,2,800);
  top_wall = createSprite(600,1,1200,2);
  botton_wall = createSprite(600,599,1200,2);
}

function draw(){
  background(184);
    
  if(keyDown("UP_ARROW")){
    detetive.y = detetive.y -10;
  }

  if(keyDown("DOWN_ARROW")){
    detetive.y = detetive.y +10;
  }

  if(keyDown("LEFT_ARROW")){
    detetive.x = detetive.x -10;
  }

  if(keyDown("RIGHT_ARROW")){
    detetive.x = detetive.x +10;
  }

  detetive.collide(left_wall);
  detetive.collide(right_wall);
  detetive.collide(top_wall);
  detetive.collide(botton_wall);

  if(pontos <= 0){
    background(cidade1_img);
  }

  if(detetive.isTouching(carta)){
    carta.visible = true;
    dica();
  }
    
    drawSprites();
}

function dica(){
  swal({
    title: "Você encontrou uma pista",
    text: "blá blá blá",
    confirmButtonText: "Ir para a próxima pista"
  });
}
  
