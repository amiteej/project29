class ball {
    constructor(x, y, r) {
        var options = {
            isStatic: false,
            restitution: 0,
            friction: 1,
            density:2,
        }
        this.r = r;
        this.image = loadImage("images/stone.png");
        this.body = Bodies.circle(x, y, r,options);
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        imageMode(CENTER);
        //ellipseMode(CENTER);
        image(this.image, pos.x, pos.y, this.r * 2, this.r * 2)
        //pop()
    }
}