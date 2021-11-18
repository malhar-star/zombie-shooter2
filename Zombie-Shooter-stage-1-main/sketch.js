var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombieImg,zombie;
var zombieGroup;

function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
  zombieImg= loadImage("assets/zombie.png")

  bgImg = loadImage("assets/bg.jpeg")
explosion=loadSound("assets/explosion.mp3")
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,500,500)

   zombieGroup=CreateGroup()
   
}

function draw() {
  background(0); 


  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 explosion.play(explosion.mp3)
 zombie.destroy()
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}

 spawnZombies()
  
  
  
drawSprites();

}

function spawnZombies(){

if (framCount%200===0){
  zombie=createSprite(displayWidth-100,displayHeight-700,50,50);
zombie.addImage(zombieImg)
zombie.scale=0.2;
zombie.velocityX=-7;
zombie.y=Math.round(random(100,60));
zombie.lifetime=134;

zombieGroup.add(zombie);



}




}





