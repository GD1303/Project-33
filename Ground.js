class Ground {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
  
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        //strokeWeight(1);
        noStroke();
        fill(199, 206, 234)
        rect(pos.x, pos.y, this.width, this.height);
    }
  }