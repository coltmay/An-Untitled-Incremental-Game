import { getSystemText } from "./Text.js";

const textBlock = document.getElementById("textDisplay")
const openingText = getSystemText();

export const displayOpeningText = () => {
    textBlock.innerHTML = openingText[1];
}