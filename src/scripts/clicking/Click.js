const applicationElement = document.querySelector(".game");

let clicks = 0;
let clickMultiplier = 1;

export const clickButton = () => {
    applicationElement.addEventListener("click", event => {
        if (event.target.id === "clickButton") {
        clickCounter();
        updateClickCounter();
        }
    })
}

const clickCounter = () => {
    clicks += clickMultiplier;
}

const updateClickCounter = () => {
    const counter = document.getElementById("clickCounter");
    counter.innerHTML = `Clicks: ${clicks}`;
}

export const automaticClickCounter = () => {
    setInterval(clickCounter, 500)
    setInterval(updateClickCounter, 500)
}