class Ball {
    constructor(x,y,radius){
    var options = {
        
       'friction': 0.8,
       'density': 1.2,
       'restitution':0.3,
    
    }
    this.body = Bodies.circle(x,y,radius,options,false)
    this.radius = radius;
    World.add(world,this.body);

}

display(){
    var pos = this.body.position
    ellipseMode(RADIUS);
    fill("blue");
    ellipse(pos.x,pos.y,this.radius,15);
}
}
