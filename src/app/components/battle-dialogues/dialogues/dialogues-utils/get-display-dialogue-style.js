import { battleSelectors } from "../../../../shared/battle/battle-selectors.js";

const possibleStateAttacksList = [`Coup critique !`];

export function getDisplayDialogueStyle(text) {
  battleSelectors.displayDialogue.style.display = "flex";
  battleSelectors.displayDialogue.classList.add("dialogue");

  if (possibleStateAttacksList.includes(text)) {
    return (
      (battleSelectors.displayDialogue.style.color = "red"),
      (battleSelectors.displayDialogue.style.fontWeight = "bold")
    );
  } else {
    return (
      (battleSelectors.displayDialogue.style.color = "black"),
      (battleSelectors.displayDialogue.style.fontWeight = "normal")
    );
  }
}
