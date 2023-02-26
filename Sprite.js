class Sprite {
    constructor(config) {

        // set up the image
        this.image = new Image();
        this.image.src = config.src; // calling sprite, pass in config
        this.image.onload = () => {
            this.isLoaded = true;
        };

        // shadow
        this.shadow = new Image();
        this.useShadow = true; //config.useShadow || false
        if (this.useShadow) {
            this.shadow.src = "/images/shadow.png";
        }
        this.shadow.onload = () => {
            this.isShadowLoaded = true;
        };


        // configuring animation and initial state
        this.animations = config.animations || {
            idleDown: [
                [0,0]
            ],
            // walkDown: [
            //     [0,0], [1,0], [2,0], [3,0]
            // ],
        }
        this.currentAnimation = config.currentAnimation || "idleDown";
        this.currentAnimationFrame = 0;

        // reference the game object
        this.gameObject = config.gameObject;
    }


    draw(ctx) {
        const x = this.gameObject.x * 16 - 5;
        const y = this.gameObject.y * 16 + 2;

        // draw shadow before npc
        this.isShadowLoaded && ctx.drawImage(this.shadow, x, y);
        console.log(this.isLoaded);
        this.isLoaded && ctx.drawImage(this.image,
            0,0,
            32,32,
            x,y,
            32,32
        );
    }
}