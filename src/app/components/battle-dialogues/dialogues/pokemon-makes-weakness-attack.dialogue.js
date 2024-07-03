import { dialogueConstant } from "../../../shared/battle/dialogues/dialogue-constant.js";
import { battleSelectors } from "../../../shared/battle/battle-selectors.js";

export function openDialogueWhenPokemonMakesWeaknessAttack() {
  setTimeout(function () {
    battleSelectors.displayDialogue.style.display = "flex";

    battleSelectors.displayDialogue.textContent = `C'est super efficace !`;

    setTimeout(function () {
      battleSelectors.displayDialogue.style.display = "none";
    }, dialogueConstant.END_NEXT_DISPLAY_DURATION);
  }, dialogueConstant.START_NEXT_DISPLAY_DURATION);
}
