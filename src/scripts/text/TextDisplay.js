import { getText } from "./TextNodes.js";
import { TextAsHTML } from "./TextHTML.js";

// let textDisplay = [];

const textElement = document.getElementById("textDisplay");

export const textBoxArray = () => {
    let textArray = getText();
    for (let textObject of textArray) {
        console.log(textObject.text)
        textElement.innerHTML += TextAsHTML(textObject);
    }
}