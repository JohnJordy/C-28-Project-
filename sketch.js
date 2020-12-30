const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var mango1,mango2,mango3,mango4,mango5
var count = 0
var invisground1,invisground2,invisground3,invisground4,invisground5
var gameState = "onSling";

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
    getTime()
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    log= new Ground(1000,330,50,150)
    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);
    bird = new Bird(200,50);


// Over 9000 


    ground1 = new Ground(9000,200,140,20);
    box1 = new Box(9000,350,70,70);
    box2 = new Box(9000,350,70,70);
    box3 = new Box(9000,350,70,70);
    box4 = new Box(9000,380,70,70);
    box5 = new Box(9000,100,70,70);
    box6 = new Box(9000,100,70,70);
    box7 = new Box(9000,65,70,70);
    pig1 = new Pig(9000, 350);
    log1 = new Log(9000,260,300, PI/2);
    pig3 = new Pig(9000, 220);
    log3 =  new Log(9000,180,300, PI/2);
    log4 = new Log(9000,120,150, PI/7);
    log5 = new Log(9000,120,150, -PI/7);
    mango1 = new  Leaves(1100,150,30,30)
    mango2 = new  Leaves(850,130,30,30)
    mango3 = new  Leaves(900,200,30,30)
    mango4 = new  Leaves(1150,170,30,30)
    mango5 = new  Leaves(950,210,30,30)
    slingshot = new SlingShot(bird.body,{x:200, y:50});
    invisground1 = new IGround(1100,160,10,10)
    invisground2 = new IGround(850,140,10,10)
    invisground3 = new IGround(900,210,10,10)
    invisground4 = new IGround(1150,180,10,10)
    invisground5 = new IGround(950,220,10,10)
    
}

function draw(){
    background(backgroundImg);
    text("score"+count,900,50)
    fill('white')
    Engine.update(engine);
    //strokeWeight(4);

    ground.display();
    ground1.display();


    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    
    box1.count();
    box2.count();
    box3.count();
    box4.count();
    box5.count();
    box6.count();
    box7.count();

    pig1.display();
    pig3.display();

    log1.display();
    log3.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
    log.display()
    mango1.display()
    mango2.display()
    mango3.display()
    mango4.display()
    mango5.display()

}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       // slingshot.attach(bird.body);
    }
}

async function getTime(){
var response = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
var RJ = await response.json()
var dt = RJ.datetime 
var hour = dt.slice(11,13)
console.log(hour)
if(hour>=5&&hour<=19){
bg = 'sprites/bg.png'
}else {
bg = 'sprites/bg2.jpg'
}
backgroundImg=loadImage(bg)
}

