import { clickButton, automaticClickCounter } from "./clicking/Click.js";


const startGame = () => {
    console.log("The game has started.");
    clickButton();
    automaticClickCounter();
}

startGame();