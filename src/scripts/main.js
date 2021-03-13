import { clickButton, clickMultiplierSelector, purchaseStoreA, update } from "./clicking/Click.js";
import { displayOpeningText } from "./text/TextDisplay.js";

const startGame = () => {
    console.log("The game has started.");
    clickButton();
    clickMultiplierSelector();
    setInterval(update, 1000);
    purchaseStoreA();
    displayOpeningText();
}

startGame();