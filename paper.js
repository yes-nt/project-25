class Paper {
    constructor(x,y,radius){
        var options = {
            'isStatic':false,
            'restitution':1,
            'density':1.2,
            'friction':1
        }
        this.body = Bodies.circle(x,y,70,options);
        this.radius = 80;

        World.add(world,this.body);
        this.image = loadImage("paper.png")

        

    
        
        
    }
    display(){
        var pos = this.body.position;
        
        push();
        translate(pos.x,pos.y);
        imageMode(RADIUS);
        image(this.image,0,0,this.radius,this.radius);
        pop();
    }
}
