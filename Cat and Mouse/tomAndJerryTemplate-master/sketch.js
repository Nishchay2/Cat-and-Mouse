var gardenImage
var tom
var jerry

function preload() {
    //load the images here

    gardenImage=loadImage("images/garden.png")
    tom1=loadImage("images/tomOne.png")
    tomRunning=loadAnimation("images/tomTwo.png","images/tomThree.png")
    tomHappy=loadAnimation("images/tomFour.png")
    jerry1=loadImage("images/jerryOne.png")
    jerry2=loadImage("images/jerryTwo.png")
    jerry3=loadImage("images/jerryThree.png")
    jerry4=loadImage("images/jerryFour.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
 tom=createSprite(690,650,50,50)
tom.addImage(tom1)
tom.scale=0.2
 jerry=createSprite(180,650,50,50)
 jerry.addImage(jerry2)
 jerry.scale=0.1
}

function draw() {

    background(gardenImage);
    //Write condition here to evalute if tom and jerry col
if(tom.x-jerry.x<tom.width/2-jerry.width/2){
    tom.velocityX=0
tom.addAnimation("tomHappy",tomHappy)
tom.changeAnimation("tomHappy")

jerry.addImage(jerry1)

}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if (keyCode===LEFT_ARROW){
jerry.addImage(jerry3)

jerry.frameDelay=25

tom.addAnimation("tomRunning",tomRunning)
tom.changeAnimation("tomRunning")
tom.velocityX=-3
tom.frameDelay=25}

}
