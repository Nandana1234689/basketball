class Box {
    constructor(){
    var order = {
        isStatic:true,
        'restitution':0, 
        'friction':1
       
    }
    this.body = Bodies.rectangle(1070,230,100,250,order);
    World.add(world,this.body);

    
    }
    
    
    display (){
    
          rectMode(CENTER);
          rect(this.body.position.x,this.body.position.y,100,250);
    
    
    }
  
    
    }