class Block {
  constructor(x, y, width, height) {
      var options = {
          'restitution': 0,
          'friction': 5,
          'density': 0.01
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;


      World.add(world, this.body);
  }
  display() {
      push();
      var pos = this.body.position;
      rectMode(CENTER);
      stroke(0);
      strokeWeight(1);
     // fill(255, 0, 0);
      rect(pos.x, pos.y, this.width, this.height);
      pop();
  }
};