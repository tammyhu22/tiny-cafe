class OverworldMap {
    constructor(config) {
        this.gameObjects = config.gameObjects;
        this.walls = config.walls || {};

        this.lowerImage = new Image();
        this.lowerImage.src = config.lowerSrc;

        this.upperImage = new Image();
        this.upperImage.src = config.upperSrc; // things drawn above the character

        this.isCutscenePlaying = false;

    }

    drawLowerImage(ctx, cameraPerson) {
        ctx.drawImage(
            this.lowerImage,
            utils.withGrid(10.5) - cameraPerson.x,
            utils.withGrid(6) - cameraPerson.y
            )
    }

    drawUpperImage(ctx, cameraPerson) {
        ctx.drawImage(
            this.upperImage,
            utils.withGrid(10.5) - cameraPerson.x,
            utils.withGrid(6) - cameraPerson.y
            )
    }

    isSpaceTaken(currentX, currentY, direction) {
        const {x,y} = utils.nextPosition(currentX, currentY, direction);
        return this.walls[`${x}, ${y}`] || false; // true if wall is there
    }

    mountObjects() {
        Object.keys(this.gameObjects).forEach(key => {
            
            let object = this.gameObjects[key];
            object.id = key; // like hero, or npc1
            // To do: determine if this object should actually mount, has an action happened
            object.mount(this);
        })
    }

    addWall(x,y) {
        this.walls[`${x}, ${y}`] = true;
    }

    removeWall(x,y) {
        delete this.walls[`${x}, ${y}`]
    }

    moveWall(wasX,wasY, direction) {
        this.removeWall(wasX, wasY);
        const {x,y} = utils.nextPosition(wasX, wasY, direction); // new wall
        this.addWall(x,y); // create new wall
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
            npcA: new Person({
                x: utils.withGrid(10),
                y: utils.withGrid(8),
                src: "/images/npc1.png",
                behaviorLoop: [
                    { type: "stand", direction: "left", time: 800 }, //looking left
                    { type: "stand", direction: "up", time: 800 },
                    { type: "stand", direction: "right", time: 1200 },
                    { type: "stand", direction: "up", time: 300 }, // loops
                ]
            }),
            npcB: new Person({
                x: utils.withGrid(10),
                y: utils.withGrid(3),
                src: "/images/npc3.png",
                behaviorLoop: [ // idle behavior loop
                    { type: "walk", direction: "left" },
                    // { type: "stand", direction: "up", time: 800 },
                    { type: "walk", direction: "down" },
                    { type: "walk", direction: "right" }, 
                    { type: "walk", direction: "up" },
                ]
            }),
        },
        walls: {
            // dynamic key -> evaluate to string
            [utils.asGridCoord(1,0)] : true,
            [utils.asGridCoord(1,1)] : true,
            [utils.asGridCoord(1,2)] : true,
            [utils.asGridCoord(1,3)] : true,
            [utils.asGridCoord(1,4)] : true,
            [utils.asGridCoord(2,0)] : true,
            [utils.asGridCoord(2,1)] : true,
            [utils.asGridCoord(3,1)] : true,
            [utils.asGridCoord(4,1)] : true,
            [utils.asGridCoord(5,1)] : true,
            [utils.asGridCoord(6,1)] : true,
            [utils.asGridCoord(7,1)] : true,
            [utils.asGridCoord(8,1)] : true,
            [utils.asGridCoord(9,1)] : true,
            [utils.asGridCoord(10,1)] : true,
            [utils.asGridCoord(11,1)] : true,
            [utils.asGridCoord(12,1)] : true,
            [utils.asGridCoord(13,1)] : true,
            [utils.asGridCoord(9,2)] : true,
            [utils.asGridCoord(10,2)] : true,
            [utils.asGridCoord(11,2)] : true,
            [utils.asGridCoord(12,2)] : true,
            [utils.asGridCoord(13,2)] : true,
            [utils.asGridCoord(14,2)] : true,
            [utils.asGridCoord(15,2)] : true,

            // top right corner
            [utils.asGridCoord(12,3)] : true,
            [utils.asGridCoord(13,3)] : true,
            [utils.asGridCoord(14,3)] : true,
            [utils.asGridCoord(12,4)] : true,
            [utils.asGridCoord(13,4)] : true,
            [utils.asGridCoord(14,4)] : true,

            // chairs/tables
            [utils.asGridCoord(12,6)] : true,
            [utils.asGridCoord(13,6)] : true,
            [utils.asGridCoord(14,6)] : true,

            [utils.asGridCoord(11,8)] : true,
            [utils.asGridCoord(12,8)] : true,
            [utils.asGridCoord(13,8)] : true,
            [utils.asGridCoord(14,8)] : true,


            [utils.asGridCoord(8,5)] : true,
            [utils.asGridCoord(9,5)] : true,
            [utils.asGridCoord(10,5)] : true,

            // cashier table
            [utils.asGridCoord(1,4)] : true,
            [utils.asGridCoord(2,4)] : true,
            [utils.asGridCoord(3,4)] : true,
            [utils.asGridCoord(4,4)] : true,
            [utils.asGridCoord(5,4)] : true,
            [utils.asGridCoord(6,4)] : true,
            
            // bottom left chairs and tables
            [utils.asGridCoord(1,6)] : true,
            [utils.asGridCoord(1,7)] : true,
            [utils.asGridCoord(1,8)] : true,

            [utils.asGridCoord(3,6)] : true,
            [utils.asGridCoord(3,7)] : true,
            [utils.asGridCoord(3,8)] : true,

            // napkins
            [utils.asGridCoord(5,8)] : true,
            [utils.asGridCoord(6,8)] : true,
            [utils.asGridCoord(7,8)] : true,
            [utils.asGridCoord(8,8)] : true,

            // lower wall
            [utils.asGridCoord(1,9)] : true,
            [utils.asGridCoord(2,9)] : true,
            [utils.asGridCoord(3,9)] : true,
            [utils.asGridCoord(4,9)] : true,
            [utils.asGridCoord(5,9)] : true,
            [utils.asGridCoord(6,9)] : true,
            [utils.asGridCoord(7,9)] : true,
            [utils.asGridCoord(8,9)] : true,
            [utils.asGridCoord(9,9)] : true,
            [utils.asGridCoord(10,9)] : true,
            [utils.asGridCoord(11,9)] : true,
            [utils.asGridCoord(12,9)] : true,
            [utils.asGridCoord(13,9)] : true,
            [utils.asGridCoord(14,9)] : true,
            
            // right wall
            [utils.asGridCoord(15,1)] : true,
            [utils.asGridCoord(15,2)] : true,
            [utils.asGridCoord(15,3)] : true,
            [utils.asGridCoord(15,4)] : true,
            [utils.asGridCoord(15,5)] : true,
            [utils.asGridCoord(15,6)] : true,
            [utils.asGridCoord(15,7)] : true,
            [utils.asGridCoord(15,8)] : true,
            [utils.asGridCoord(15,9)] : true,
            [utils.asGridCoord(15,10)] : true,

            // left wall
            [utils.asGridCoord(0,1)] : true,
            [utils.asGridCoord(0,2)] : true,
            [utils.asGridCoord(0,3)] : true,
            [utils.asGridCoord(0,4)] : true,
            [utils.asGridCoord(0,5)] : true,
            [utils.asGridCoord(0,6)] : true,
            [utils.asGridCoord(0,7)] : true,
            [utils.asGridCoord(0,8)] : true,
            [utils.asGridCoord(0,9)] : true,
            [utils.asGridCoord(0,10)] : true,
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
                src: "/images/npc3.png"
            })
        }
    },
}