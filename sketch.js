const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var maxDrops = 100;
var drops = [];

function preload(){
    
}

function setup(){
   createCanvas(400,600)
    engine = Engine.create();
	world = engine.world;

    umbrella = new Umbrella(230,450,30);

    // for(i = 0;i>= maxDrops ; i++){
    //     drops.push(new RainDrop(random(0,400),0,10))
    // }

    Engine.run(engine);
    

}

function draw(){
    background("black");  


   if(frameCount % 1 === 0){
     drops.push(new RainDrop(random(0,400),0,3));
    //  drops.update();
   }
  
     umbrella.display();
 
   
   
     for( var k = 0 ; k < drops.length ; k++){
   drops[k].display();
     }
}   

