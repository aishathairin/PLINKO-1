class Plinko
{
    constructor(x,y,radius)
    {
        var options = 
        {
            isStatic : true
        }
    this.body = Bodies.circle(x,y,this.radius,options);
    this.radius = radius;
    World.add(world, this.body);
    }
    display()
    {
        var pos = this.body.position;
        ellipseMode(CENTER);
        fill("white");
        ellipse(pos.x,pos.y,this.radius);
    }
}