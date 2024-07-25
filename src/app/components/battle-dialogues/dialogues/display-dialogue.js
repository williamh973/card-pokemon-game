import { battleSelectors } from "../../../shared/battle/battle-selectors.js";

export async function displayDialogue(text, delay) {
  return new Promise((resolve) => {
    battleSelectors.displayDialogue.style.display = "flex";
    battleSelectors.displayDialogue.textContent = text;
    console.log(text);
    setTimeout(() => {
      battleSelectors.displayDialogue.style.display = "none";
      resolve();
    }, delay);
  });
}
