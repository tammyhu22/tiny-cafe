import { Overworld } from "./Overworld";
import "./styles/TextMessage.css";
import "./styles/styles.css";

(function() {
    console.log("It's working!")
    const overworld = new Overworld({
        element: document.querySelector(".game-container")
    });

    overworld.init();
})();