// Defines main element to begin event bubbling.
const applicationElement = document.querySelector(".game");

// Assigns base values of clicks and click multipler.
let clicks = 0;
let clickMultiplier = 1;

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
    counter.innerHTML = `Clicks: ${clicks}`;
}

// Automatically updates clicks and counter every 1 second.
export const automaticClickCounter = () => {
    setInterval(clickCounter, 1000)
    setInterval(updateClickCounter, 1000)
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