class Dustbin {
    constructor(x,y,width,height){
        var options = {
            'isStatic':true,
            'friction':1,
             'density':1,
             'restitution':0
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("dustbingreen.png");

        
        World.add(world,this.body);
      

    }
    display(){
        var pos = this.body.position;

        push();
        translate(pos.x,pos.y);
        fill(255);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}
