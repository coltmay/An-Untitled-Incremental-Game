import { clickButton, clickMultiplierSelector, update } from "./clicking/Click.js";

const startGame = () => {
    console.log("The game has started.");
    clickButton();
    clickMultiplierSelector();
    setInterval(update, 1000);
}

startGame();