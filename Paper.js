class Paper{
    constructor(x, y, r) {
        var options = {
            'IsStatic': false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.circle(x, y, r/2, options);
        this.r = r;
        this.x = x;
        this.y = y;
        //this.image = loadImage("snow4.webp");
        World.add(world, this.body);
      }
      display(){
        
        push();
        translate(this.body.position.x, this.body.position.y);
        strokeWeight(4)
        fill (255,0,255)
        rectMode(CENTER);
        ellipse( 0, 0, this.r, this.r);
        pop();
      }
}