class OverworldEvent {
    constructor({map, event}) {
        this.map = map;
        this.event = event;
    }

    stand(resolve) {
        const who = this.map.gameObjects[ this.event.who ];
        console.log(who);
        console.log(this.event);
        who.startBehavior({
            map: this.map
        }, {
            type: "stand",
            direction: this.event.direction, // comes from overworld map
            time: this.event.time
        })

        // set up a handler to complete when correct person is done walking, then resolve the event
        const completeHandler = e => {
            if(e.detail.whoId === this.event.who) {
                document.removeEventListener("PersonStandComplete", completeHandler);
                resolve();
            }
        }
        document.addEventListener("PersonStandComplete", completeHandler)
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
            retry: true // not always appropriate to do (for hero), but if something interrupts a scheduled walk then we pass this retry flag
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