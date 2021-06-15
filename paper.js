class Paper
{
     constructor()
    {
        var options =
    {
        isStatic: false,
        restitution: 0.3,
        friction: 0,
        density: 1.2 
    }
    this.body = Bodies.circle(100, 650, (60-20)/2, options)
    this.x = 100
    this.y = 650
    this.r = 60
    this.image = loadImage("paper.png")
    World.add(world, this.body)
    }
    display()
    {
        imageMode(CENTER)
        image(this.image, this.body.position.x, this.body.position.y, this.r, this.r)
    }
}

    
    
    
