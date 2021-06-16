 const Engine = Matter.Engine;
 const World= Matter.World;
 const Bodies = Matter.Bodies;
 const Constraint = Matter.Constraint
 
 var engine, world;
 score =0
 var gameState=0
function preload(){
 bg = loadImage("image/background.jpg")
 board = loadImage("image/board.png")
ring1 = loadImage ("image/basketballring.png")
ring2 = loadImage("image/basketballring 2.png")

}
function setup(){
    createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
  
	
    ground = new Ground()
    boy    = new Boy ()
	ball  = new Ball (232,301)
   box = new Box ()
	
	chain  =new Chain (ball.body,{x:370,y:400 })
    
}
function draw(){
    background(0);
    image (bg,600,300,1200,600)  
    image (ring1,1030,250,150,250)
    image (ring2,167,250,150,250)
    image (board,150,30,150,50)

    Engine.update(engine);
if (gameState == 0){

    if (ball.body.position.y>320 && ball.body.position.y<330 && ball.body.position.x>925 && ball.body.position.x<1000){
        gameState == 1
        console.log(score)
        score+=2
        }

}
if (gameState==1){
    if(ball.body.position.y>555){
        gameState ==0
    }
}
    textSize(20)
//text (mouseX+" "+mouseY,150,200)
  
   ground.display()
   boy.display()
   
   ball.display()
   chain.display()
   box.display()
  
 


fill (255)
text ("score : "+score,110,35)


   
}
function mouseDragged(){
	Matter.Body.setPosition(ball.body,{x:mouseX , y:mouseY })
}
	
function mouseReleased(){
	   chain.removeMango()
}
function keyPressed(){
    if(keyCode == 32){
    chain.attachBird(ball.body)
    }
}    