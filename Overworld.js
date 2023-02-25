class Overworld {
 constructor(config) {
    this.element = config.element;
    this.canvas = this.element.querySelector(".game-canvas");
    this.ctx = this.canvas.getContext("2d");
 }   

 init(){
    console.log("Hello from the Overworld", this);
    
    // whenever init, we will create a new image, assign source, download it, and when the source is downloaded,
    // copy pixels over to canvas which has context, which allows us to draw to canvas
    const image = new Image();
    image.onload = () => {
        this.ctx.drawImage(image,0,0) //draw from 0,0
    }; // set up to do something once done loading
    image.src = "/images/Map.png"; //download

// place some game objects!
const hero = new GameObject({
    x: 5,
    y: 6,
})
const npc1 = new GameObject({
    x: 9,
    y: 8,
    src: "/images/npc1.png"
})

setTimeout(() => {
    hero.sprite.draw(this.ctx);
    npc1.sprite.draw(this.ctx);
}, 200)


 }

}