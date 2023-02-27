class OverworldMap {
    constructor(config) {
        this.gameObjects = config.gameObjects;

        this.lowerImage = new Image();
        this.lowerImage.src = config.lowerSrc;

        this.upperImage = new Image();
        this.upperImage.src = config.upperSrc; // things drawn above the character

    }

    drawLowerImage(ctx) {
        ctx.drawImage(this.lowerImage,0,0)
    }

    drawUpperImage(ctx) {
        ctx.drawImage(this.upperImage,0,0)
    }
}

window.OverworldMaps = {
    Cafe: {
        lowerSrc: "/images/mapLower.png",
        upperSrc:"/images/mapUpper.png",
        gameObjects: {
            hero: new Person({
                isPlayerControlled: true,
                x: utils.withGrid(5),
                y: utils.withGrid(6),
            }),
            npc1: new Person({
                x: utils.withGrid(9),
                y: utils.withGrid(8),
                src: "/images/npc1.png"
            })
        }
    },
    Cafe2: {
        lowerSrc: "/images/mapLower.png",
        upperSrc:"/images/mapUpper.png",
        gameObjects: {
            hero: new GameObject({
                x: 3,
                y: 6,
            }),
            npc1: new GameObject({
                x: 9,
                y: 7,
                src: "/images/npc1.png"
            }),
            npc2: new GameObject({
                x: 9,
                y: 7,
                src: "/images/npc2.png"
            })
        }
    },
}