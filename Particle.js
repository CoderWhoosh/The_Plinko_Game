class Particle
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
            restitution:0.4
        }
		this.x=x;
		this.y=y;
		this.r=r;
		this.body=Bodies.circle(this.x, this.y, this.r, options);
		this.color = color(random(0, 255) ,random(0, 255), random(0, 255));
		World.add(world, this.body);
    } 
	display()
	{
			
			var plinkopos = this.body.position;		
			var anglepos = this.body.angle;

			push()
			translate(plinkopos.x, plinkopos.y);
			rotate(anglepos);
			noStroke();
			fill(this.color);
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}
