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
        this.updatePosition();
        this.updateSprite(state);

        if(this.isPlayerControlled && this.movingProgressRemaining === 0 && state.arrow) {
            this.direction = state.arrow;
            this.movingProgressRemaining = 16;
        }
    }

    updatePosition() {
        if (this.movingProgressRemaining > 0) {
            const [property, change] = this.directionUpdate[this.direction];
            this[property] += change;
            this.movingProgressRemaining -= 1; // work to 0, done moving to next cell eventually
        }
    }

    updateSprite(state) {
        // if made to the next space and make sure arrow is not pressed = stop/idle
        if(this.isPlayerControlled && this.movingProgressRemaining === 0 && !state.arrow) {
            this.sprite.setAnimation("idle-" + this.direction);
            return;
        }
        
        if(this.movingProgressRemaining > 0) {
            this.sprite.setAnimation("walk-" + this.direction);
        }
    }
}