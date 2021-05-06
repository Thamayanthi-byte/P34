class Doct{
    constructor(x,y,w,h){
      var options={
          restitution:0.8,
          friction:1.0,
          density:0.04
      }
        this.body=Bodies.rectangle(x,y,w,h,options)
        this.image = loadImage("doctor.png");
        this.width=w
        this.height=h
        World.add(world,this.body)
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
      //  rectMode(CENTER)
        imageMode(CENTER);
       // stroke("white")
       // fill("blue")
        image(this.image, 0,0,this.width, this.height)
        pop();
    }
}