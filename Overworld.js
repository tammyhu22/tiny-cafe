class Overworld {
 constructor(config) {
    this.element = config.element;
    this.canvas = this.element.querySelector(".game-canvas");
    this.ctx = this.canvas.getContext("2d");
    this.map = null
 }   

 startGameLoop() {
    const step = () => {
        // clear canvas for every frame
        this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
        // establish camera person (can be changed to npc, or whoever; useful for cutscenes?)
        const cameraPerson = this.map.gameObjects.hero;

        // update all objects
        Object.values(this.map.gameObjects).forEach(object => {
            object.update({
                arrow: this.directionInput.direction,
                map: this.map,
            });
        })

        // draw lower layer
        this.map.drawLowerImage(this.ctx, cameraPerson);

        // draw game objects
        Object.values(this.map.gameObjects).sort((a,b) => {
            return a.y - b.y;
        }).forEach(object => {
            // state updates every frame
            object.sprite.draw(this.ctx, cameraPerson);
        })
        // draw upper layer
        this.map.drawUpperImage(this.ctx, cameraPerson);

        requestAnimationFrame(() => {
            step();
        })
    }
    step();
 }

 bindActionInput() {
    new KeyPressListener("Enter", () => {
        // is there a person here to talk to?
        this.map.checkForActionCutscene();
    })
 }

 bindHeroPositionCheck() {
    document.addEventListener("PersonWalkingComplete", e => {
        if (e.detail.whoId === "hero") {
            // hero's position has changed
            this.map.checkForFootstepCutscene()
        }
    })
 }

 init(){
    this.map = new OverworldMap(window.OverworldMaps.Cafe); // config data from cafe
    this.map.mountObjects();

    this.bindActionInput();
    this.bindHeroPositionCheck();

    this.directionInput = new DirectionInput();
    this.directionInput.init();

    // this.directionInput.direction; // "down"

    this.startGameLoop();

    // this.map.startCutscene([
    //     { who: "hero", type: "walk", direction: "up" },
    //     { who: "hero", type: "walk", direction: "right" },
    //     { who: "npcB", type: "walk", direction: "left" },
    //     { who: "npcB", type: "walk", direction: "left" },
    //     { who: "npcB", type: "walk", direction: "left" },
    //     { who: "npcB", type: "walk", direction: "down" },
    //     { who: "npcB", type: "walk", direction: "down" },
    //     { who: "npcB", type: "stand", direction: "left", time: 200 },
    //     {type: "textMessage", text: "hey girl!"},

    // ])
    

//     // whenever init, we will create a new image, assign source, download it, and when the source is downloaded,
//     // copy pixels over to canvas which has context, which allows us to draw to canvas

 }

}