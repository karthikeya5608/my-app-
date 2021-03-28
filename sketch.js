var player,playeridle,playerrun,playerjump,ground;
var imagestate="center";
var imagestate2="left";
var jumpstate="true";

function preload(){
    bg=loadImage("background.png")
    playeridle=loadAnimation("player/movement/adventurer-idle-00.png","player/movement/adventurer-idle-01.png",
    "player/movement/adventurer-idle-02.png","player/movement/adventurer-idle-03.png");
    playerrun=loadAnimation("player/movement/adventurer-run-00.png","player/movement/adventurer-run-01.png","player/movement/adventurer-run-02.png","player/movement/adventurer-run-03.png","player/movement/adventurer-run-04.png","player/movement/adventurer-run-05.png")
    playerjump=loadAnimation("player/movement/adventurer-jump-00.png","player/movement/adventurer-jump-01.png","player/movement/adventurer-jump-02.png","player/movement/adventurer-jump-03.png","player/movement/adventurer-fall-00.png","player/movement/adventurer-fall-01.png")

  // enemyimage =loadImage("druid/ezgif.com-gif-maker.gif");
  // enemy = createImg("druid/ezgif.com-gif-maker.gif");
}

function setup(){
    createCanvas(1365,653);
    ground=createSprite(337.5,355,880,20);
    ground.visible=false;
   //ground.setCollider("rectangle",0,0,895,20);
    player=createSprite(700,200,10,10);
   // player.setCollider("rectangle",player.x+25,player.y,10,20);
    player.addAnimation("idle",playeridle);
    player.scale=2.35;
   // player.velocityY=4;

}

function draw(){
    background(bg);
   // player.x=mouseX;
   // player.y=mouseY;
  //  enemy1.velocityX=3;
   // enemy.position(enemy1.x-100,enemy1.y-150);
  // console.debug(mouseX,"x position");
 //  console.debug(mouseY,"y position");
   if(keyDown("space")&&player.isTouching(ground)){
       player.velocityY=-10;
       if(jumpstate==="true"){
       player.addAnimation("idle",playerjump);
       }
   }
   else{
    player.collide(ground);
    player.velocityY=player.velocityY+0.8;
    jumpstate="false";    
   }

   

   if (keyDown(LEFT_ARROW)) {
      // player.x=player.x-4;
      player.x=player.x-4;
   }

   if (keyWentDown(LEFT_ARROW)&&imagestate2==="left") {
           player.mirrorX(player.mirrorX() * -1);
           player.addAnimation("idle",playerrun);
           imagestate2="right"
    }
    else if(keyWentDown(LEFT_ARROW)&&imagestate==="center"){
     player.mirrorX(player.mirrorX() * 1);
     player.addAnimation("idle",playerrun);
    }

   if (keyWentUp(LEFT_ARROW)) {
          player.addAnimation("idle",playeridle);
    }   
   
   if (keyDown(RIGHT_ARROW)) {
    player.x=player.x+4;
   } 

   if (keyWentDown(RIGHT_ARROW)&&imagestate2==="right") {
    player.mirrorX(player.mirrorX() * -1);
       player.addAnimation("idle",playerrun);
       imagestate2="left";
   }
   else if(keyWentDown(RIGHT_ARROW)&&imagestate==="center"){
    player.mirrorX(player.mirrorX() * 1);
    player.addAnimation("idle",playerrun);
   }

   if(keyWentUp(RIGHT_ARROW)){
       player.addAnimation("idle",playeridle);
   }


    drawSprites();
    //sprite.mirrorX(sprite.mirrorX() * -1);
    //8448799005
}