import { getClicks } from "../clicking/Click.js";
import { storeDisplay } from "./StoreDisplay.js";

export const purchaseCheck= () => {
    let storedClicks = getClicks();
    if (storedClicks > 500){
        storeDisplay();
    }
}

