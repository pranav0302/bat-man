class RainDrop{
    constructor(x,y,radius){
        var options = {
            friction : 0.1,
            restitution:0.1
            
        }
        
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);
       
    }
    display(){
var pos = this.body.position ; 
var angle = this.body.angle ; 

     push();
     translate(pos.x,pos.y);
     rotate(angle);
     noStroke();
     fill("blue");
      ellipseMode(RADIUS);     
      ellipse( 0, 0, this.radius, this.radius);
      pop();

    }
  

  Update(){
      
      if(this.RainDrop.position.y > height){
          Matter.Body.setPosition(this.RainDrop,{x:random(0,400),y:0})
      }
  }
}