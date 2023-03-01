class OverworldEvent {
    constructor({map, event}) {
        this.map = map;
        this.event = event;
    }

    stand(resolve) {

    }

    walk(resolve) {
        // call resolve when done
        const who = this.map.gameObjects[ this.event.who ];
        console.log(who);
        console.log(this.event);
        who.startBehavior({
            map: this.map
        }, {
            type: "walk",
            direction: this.event.direction, // comes from overworld map
        })

        // set up a handler to complete when correct person is done walking, then resolve the event
        const completeHandler = e => {
            if(e.detail.whoId === this.event.who) {
                document.removeEventListener("PersonWalkingComplete", completeHandler);
                resolve();
            }
        }
        document.addEventListener("PersonWalkingComplete", completeHandler)
    }

    init() {
        return new Promise(resolve => {
            this[this.event.type](resolve)
        })
    }
}