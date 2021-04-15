class Man {
    constructor(x,y,radius){
        options = {
            isStatic:true
        }
         
        this.body = Bodies.ellipse(x,y,radius,options)
        World.add(world,this.body)
    }
    display(){
        ellipseMode(CENTER)
        ellipse(this.body.position.x,this.body.position.y,this.radius)
        
        }
    }
    
    
    
    