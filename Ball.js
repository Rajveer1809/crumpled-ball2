class Ball {
    constructor(x,y,width,height) {
      var options = {
          restitution:0,
          density:2.5,
          friction:1.2,
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image = loadImage("paper.png")
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      fill("white");
      image(this.image,pos.x, pos.y, this.width, this.height);
    }
  };
