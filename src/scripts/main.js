import { clickButton, automaticClickCounter, clickMultiplierSelector } from "./clicking/Click.js";

const startGame = () => {
    console.log("The game has started.");
    clickButton();
    automaticClickCounter();
    clickMultiplierSelector();
}

startGame();