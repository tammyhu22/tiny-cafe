class Person extends GameObject {
    constructor(config) {
        super(config);
        this.movingProgressRemaining = 0; // how much left to go

        this.isPlayerControlled = config.isPlayerControlled || false;

        this.directionUpdate = {
            "up" :["y", -1],
            "down" :["y", 1],
            "left" :["x", -1],
            "right" :["x", 1],
        }
    }

    update(state) {
        if (this.movingProgressRemaining > 0) {
            this.updatePosition();
        } else {
            // more cases for starting to walk will come here
            //
            //
            
            // case: we're keyboard ready and have an arrow pressed
            if(this.isPlayerControlled && state.arrow) {
                this.startBehavior(state, {
                    type: "walk",
                    direction: state.arrow
                })
            }
            this.updateSprite(state);
        }
    }

    startBehavior(state, behavior) {
        // set character direction to whatever behavior has
        this.direction = state.arrow;
        if (behavior.type === "walk") {

            // stop here if space is not free
            if (state.map.isSpaceTaken(this.x, this.y, this.direction)) {
                return;
            }

            // ready to walk
            state.map.moveWall(this.x, this.y, this.direction); // for every step hero is taking, wall moves with him
            this.movingProgressRemaining = 16;  
        }

    }

    updatePosition() {
            const [property, change] = this.directionUpdate[this.direction];
            this[property] += change;
            this.movingProgressRemaining -= 1; // work to 0, done moving to next cell eventually
    }

    updateSprite() {

        if(this.movingProgressRemaining > 0) {
            this.sprite.setAnimation("walk-" + this.direction);
            return;
        }
        this.sprite.setAnimation("idle-" + this.direction);
        // if made to the next space and make sure arrow is not pressed = stop/idle
        
    }
}