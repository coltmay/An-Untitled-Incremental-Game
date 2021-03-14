import { purchaseCheck } from "../buying/Store.js";

// Defines main element to begin event bubbling.
const applicationElement = document.querySelector(".game");

// Assigns base values of clicks and click multipler.
let clicks = 0;
let superClicks = 0;
let clickMultiplier = 1;

// Returns total clicks
export const getClicks = () => {
    return clicks;
}

// Event listener that listens for button click, then updates click value and counter.
export const clickButton = () => {
    applicationElement.addEventListener("click", event => {
        if (event.target.id === "clickButton") {
        clickCounter();
        updateClickCounter();
        }
    })
}

//  Updates clicks based on multiplier.
const clickCounter = () => {
    clicks += clickMultiplier;
}

// Updates click counter based on clicks value.
const updateClickCounter = () => {
    const counter = document.getElementById("clickCounter");
    counter.innerHTML = clicks;
}

const updateSuperClickCounter = () => {
    const superCounter = document.getElementById("superClickCounter")
    superCounter.innerHTML = superClicks;
}

// Event listener that listens for a change in the multiplier selector, then returns the multiplier to be used.
export const clickMultiplierSelector = () => {
    applicationElement.addEventListener("change", event => {
        if (event.target.id === "multiplierSelector") {
            clickMultiplier = parseInt(event.target.value);
            return clickMultiplier;
        }
    })
}

// Automatically updates every 1 second.  Increments in startGame in main.
export const update = () => {
    clickCounter();
    updateClickCounter();
    updateSuperClickCounter();
    purchaseCheck();
}

// Store that allows purchase if clicks are over 500.
export const purchaseStoreA = () => {
    applicationElement.addEventListener("click", event => {
        if (event.target.id === "storeA") {
            if (clicks > 500) {
            clicks -= 500;
            superClicks += 1
            updateClickCounter();
            updateSuperClickCounter();
            }
        }
    })
}