import { battleSelectors } from "../../../shared/battle/battle-selectors.js";
import { getDisplayDialogueStyle } from "./dialogues-utils/get-display-dialogue-style.js";

export async function displayDialogue(text, delay) {
  return new Promise((resolve) => {
    getDisplayDialogueStyle(text);
    battleSelectors.displayDialogue.textContent = text;

    setTimeout(() => {
      battleSelectors.displayDialogue.style.display = "none";
      resolve();
    }, delay);
  });
}
