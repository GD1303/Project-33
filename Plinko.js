class Plinko {
    constructor(x, y, radius) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.circle(x, y, 10, options);
        this.radius = 10;

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        noStroke();
        fill(199, 206, 234);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.radius, this.radius);
        pop();
    }
  }