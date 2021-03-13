const applicationElement = document.querySelector(".game");

let clicks = 0;
let clickMultiplier = 1;

const clickCounter = () => {
    applicationElement.addEventListener("click", event => {
        if (event.target.id === "clickButton") {
        clicks += clickMultiplier;
        updateClickCounter();
        }
    })
}

const updateClickCounter = () => {
    const counter = document.getElementById("clickCounter");
    counter.innerHTML = `Clicks: ${clicks}`;
}

const startGame = () => {
    console.log("The game has started.")
    clickCounter();
}
startGame();