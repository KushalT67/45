var playrocket
var background
var star
var rocket,space,star1
var gamestate="play"

function preload(){
rocket=loadImage("Images/rocket1_1.png")
space=loadImage("Images/space.png")
star1=loadImage("Images/star.png")

}
function setup(){
  canvas=createCanvas(1350,625)
  //background=createSprite(width/2,height/2,20,20)
 // background.scale=1
 //background.addImage(space)
  playrocket=createSprite(50,200,15,15)
  playrocket.addImage(rocket)
  playrocket.scale=0.2
  stargroup=createGroup()
  
}
function draw() {
  background("black")
  image(space,0,0,width,height)
  if (gamestate=="play") {
    playrocket.y=World.mouseY
    infinatestar() 
  if(playrocket.isTouching(stargroup)){
    gamestate="end"
    playrocket.y=200
    stargroup.setVelocityXEach(0)
    }
  }
  
drawSprites()

if (gamestate="end") {
  fill("yellow")
      text("GAMEOVER:(",200,200)
}
}

function infinatestar(){
if (World.frameCount%40==0)
{
  star=createSprite(1350,random(10,650),20,20)
  star.velocityX=-2
  star.addImage(star1)
  star.scale=random(0.05,0.09)
  stargroup.add(star)
}

}
