class slingForStone{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 75
        }
        this.slingforstone = Constraint.create(options);
        World.add(world, this.slingforstone);
        this.pointB = pointB;
    }


    attach(body)
    {
        this.slingforstone.bodyA = body;
    }


    fly()
    {
        this.slingforstone.bodyA = null;
    }


    display(){
        if(this.slingforstone.bodyA)
        {
        var pointA = this.slingforstone.bodyA.position;
        var pointB = this.slingforstone.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    } 
}