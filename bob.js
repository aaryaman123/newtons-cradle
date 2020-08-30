class Bob{
    constructor(x,y,radius){
        var options = {
            isStatic: false,
            restitution: 1,
            friction: 0,
            density: 1.2
        }
        this.body = Bodies.circle(x,y,40,options);
        this.radius = radius;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        strokeWeight(3);
        stroke("green");
        fill("black");
        ellipse(0,0,80,80);

        pop();
    }
}