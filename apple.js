class Apple {
    constructor(x,y) {
      var options = {
          isStatic:true,
          restitution:0,
          friction:1
      }
      this.body = Bodies.circle(x,y,26,options);
      this.radius = 36;
      this.image = loadImage("sprites/apple.png");
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      imageMode(CENTER);
      image(this.image, pos.x, pos.y, this.width, this.height);
    }
  };