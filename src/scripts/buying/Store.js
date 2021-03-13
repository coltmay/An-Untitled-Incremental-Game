import { getClicks } from "../clicking/Click.js";

export const purchaseCheck= () => {
    let storedClicks = getClicks();
    if (storedClicks > 1000){
        console.log("Check passed, over 1000 clicks stored.  Purchase options will be available in future updates.");
    }
}