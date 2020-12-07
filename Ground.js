class Ground{
  constructor(x,y,width,height)
  {   
      var options ={
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = this.width;
      this.height = this.height;
      World.add(world,this.body);
  }
  display()
  {
      var pos = this.body.position;
      push();
      fill("green");
      stroke("green");
      rectMode(CENTER);
      rect(400,700,800,20);
      pop();
  }
}