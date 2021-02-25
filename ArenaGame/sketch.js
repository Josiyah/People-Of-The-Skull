var skeletonBoss,skeletonAttacking,skeletonWalking,skeletonDefeated;
var player,playerAnimationDown,playerAnimationLeft,playerAnimationRight,playerAnimationUp;
var golem,golemA
var waterBullet, waterBulletA
var reaper,reaperA;
var sword, swordImage;
var coin, coinImage, coinCollectedSound, coinsGroup;
var island;
var life1,life2,life3,life4,life5;
var spikeBall, spikeBallImage;
var invisibleWallTL, invisibleWallTR, invisibleWallBR, invisibleWallBL

function preload(){
  playerAnimationDown = loadAnimation("PlayerSprites/PlayerDown1.png","PlayerSprites/PlayerDown2.png","PlayerSprites/PlayerDown3.png","PlayerSprites/PlayerDown4.png");
  playerAnimationLeft = loadAnimation("PlayerSprites/PlayerLeft1.png","PlayerSprites/PlayerLeft2.png","PlayerSprites/PlayerLeft3.png","PlayerSprites/PlayerLeft4.png");
  playerAnimationRight = loadAnimation("PlayerSprites/PlayerRight1.png","PlayerSprites/PlayerRight2.png","PlayerSprites/PLayerRight3.png","PlayerSprites/PlayerRight4.png");
  playerAnimationUp = loadAnimation("PlayerSprites/PlayerUp1.png","PlayerSprites/PlayerUp2.png","PlayerSprites/PlayerUp3.png","PlayerSprites/PlayerUp4.png");

  golemA = loadAnimation("GolemSprites/Golem1.png","GolemSprites/Golem2.png","GolemSprites/Golem3.png","GolemSprites/Golem4.png","GolemSprites/Golem5.png","GolemSprites/Golem6.png");

  reaperA = loadAnimation("ReaperSprites/Reaper1.png","ReaperSprites/Reaper2.png","ReaperSprites/Reaper3.png","ReaperSprites/Reaper4.png","ReaperSprites/Reaper5.png");

  waterBulletA = loadAnimation("WaterBullet/WaterBullet1.png","WaterBullet/WaterBullet2.png","WaterBullet/WaterBullet3.png")

  coinCollectedSound = loadSound("OE/CoinSoundEffect.mp3");

  spikeBallImage = loadImage("OE/SpikeBall.png")

  skeletonAttacking = loadAnimation("SkeletonASprites/SA1.png","SkeletonASprites/SA2.png","SkeletonASprites/SA3.png","SkeletonASprites/SA4.png","SkeletonASprites/SA5.png","SkeletonASprites/SA6.png","SkeletonASprites/SA7.png","SkeletonASprites/SA8.png","SkeletonASprites/SA9.png","SkeletonASprites/SA10.png","SkeletonASprites/SA11.png","SkeletonASprites/SA12.png","SkeletonASprites/SA13.png","SkeletonASprites/SA14.png","SkeletonASprites/SA15.png","SkeletonASprites/SA16.png","SkeletonASprites/SA17.png");
  skeletonWalking = loadAnimation("SkeletonWSprites/SW1.png","SkeletonWSprites/SW2.png","SkeletonWSprites/SW3.png","SkeletonWSprites/SW4.png","SkeletonWSprites/SW5.png","SkeletonWSprites/SW6.png","SkeletonWSprites/SW7.png","SkeletonWSprites/SW8.png","SkeletonWSprites/SW9.png","SkeletonWSprites/SW10.png");
  skeletonDefeated = loadAnimation("SkeletonDSprites/SD1.png","SkeletonDSprites/SD2.png","SkeletonDSprites/SD3.png","SkeletonDSprites/SD4.png","SkeletonDSprites/SD5.png","SkeletonDSprites/SD6.png","SkeletonDSprites/SD7.png","SkeletonDSprites/SD8.png","SkeletonDSprites/SD9.png","SkeletonDSprites/SD10.png","SkeletonDSprites/SD11.png","SkeletonDSprites/SD12.png","SkeletonDSprites/SD13.png")
  
  coinImage = loadImage("OE/Coin.png");
  swordImage = loadImage("OE/Sword.png");
  
  lives = loadImage("OE/Lives.png");
}

function setup() {
  createCanvas(1280,675);
  
  island = loadImage("IslandSprite/IslandArena.png")

  player = createSprite(950,300);
  player.addAnimation("PAD",playerAnimationDown);
  player.addAnimation("PAU",playerAnimationUp);
  player.addAnimation("PAL",playerAnimationLeft);
  player.addAnimation("PAR",playerAnimationRight);
  player.scale = 1

  invisibleWallBL = createSprite(200,500,20,20);
  invisibleWallBR = createSprite(1200,500,20,20);
  invisibleWallTL = createSprite(200,100,20,20);
  invisibleWallTR = createSprite(1200,100,20,20);

  golem = createSprite(350,500);
  golem.addAnimation("GA",golemA);
  golem.scale = 2

  waterBullet = createSprite(150,400);
  waterBullet.addAnimation("WA",waterBulletA)
  waterBullet.scale = 0.15

  reaper = createSprite(150,200);
  reaper.addAnimation("RA",reaperA);
  reaper.scale = 0.3

  skeletonBoss = createSprite(150,300);
  skeletonBoss.addAnimation("SW",skeletonWalking);
  skeletonBoss.addAnimation("SA",skeletonAttacking);
  skeletonBoss.addAnimation("SD",skeletonDefeated);
  skeletonBoss.scale = 0.3

  life1 = createSprite(50,70);
  life1.addImage(lives);
  life1.scale = 6;
  life2 = createSprite(100,70);
  life2.addImage(lives);
  life2.scale = 6;
  life3 = createSprite(150,70);
  life3.addImage(lives);
  life3.scale = 6;
  life4 = createSprite(200,70);
  life4.addImage(lives);
  life4.scale = 6;
  life5 = createSprite(250,70);
  life5.addImage(lives);
  life5.scale = 6;

  spikeBall = createSprite(600,300);
  spikeBall.addImage(spikeBallImage);
  spikeBall.scale = 0.3


  coinsGroup = new Group();
  golem.velocityX = -2

}

function draw() {
  background(island);

  if(golem.isTouching(invisibleWallBL)){
    golem.bounceOff(invisibleWallBL);
  }

  if(golem.isTouching(invisibleWallBR)){
    golem.bounceOff(invisibleWallBR)
  }

  if(player.x>skeletonBoss.x){
    skeletonBoss.x = skeletonBoss.x +1
  }
  if(player.x<skeletonBoss.x){
    skeletonBoss.x = skeletonBoss.x -1
  }
  if(player.y>skeletonBoss.y){
    skeletonBoss.y = skeletonBoss.y +1
  }
  if(player.y<skeletonBoss.y){
    skeletonBoss.y = skeletonBoss.y -1
  }

  if(keyDown(DOWN_ARROW)){
    player.y = player.y + 8
    player.changeAnimation("PAD");
  }

  if(keyDown(LEFT_ARROW)){
    player.x = player.x - 8
    player.changeAnimation("PAL");
  }

  if(keyDown(RIGHT_ARROW)){
    player.x = player.x + 8
    player.changeAnimation("PAR");
  }

  if(keyDown(UP_ARROW)){
    player.y = player.y - 8 
    player.changeAnimation("PAU");
  }
  

  if(player.isTouching(skeletonBoss)){
    skeletonBoss.changeAnimation("SA");
    //player.destroy();
    //life1.destroy();
  }
  if(coinsGroup.isTouching(player)){
    coinCollectedSound.play();
    
    coinsGroup.destroyEach();
  }
  
  else{
    skeletonBoss.changeAnimation("SW");
  }

  SpawnCoins();

  drawSprites();


  fill("red");
  stroke("yellow");
  text("You have been stranded on an island and a monster has followed you, defeat them before things get out of hand.", 350,50)
}

function SpawnCoins(){
  if(frameCount%100 === 0){
    coin = createSprite(500,600);
    coin.addImage("coinImage",coinImage);
    coin.scale = 0.05
    coin.setCollider("circle",0,0,20)
    coin.debug = true
    coin.x = Math.round(random(200,1100))
    coin.y = Math.round(random(200,500))
    coin.lifetime = 100

    coin.depth = 1;
    coin.depth = player.depth
    coinsGroup.add(coin);

  }
}

function SpawnSpikes(){
  if(frameCount% 200===0){

  }
}