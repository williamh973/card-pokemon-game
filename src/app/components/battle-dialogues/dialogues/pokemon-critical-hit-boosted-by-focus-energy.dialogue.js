import { dialogueConstant } from "../../../shared/battle/dialogues/dialogue-constant.js";
import { battleSelectors } from "../../../shared/battle/battle-selectors.js";

export function openDialogueWhenPokemonCriticalHitBoostedByFocusEnergy(
  attacker
) {
  setTimeout(function () {
    battleSelectors.displayDialogue.style.display = "flex";

    battleSelectors.displayDialogue.textContent = `${attacker.name} se gonfle !`;

    setTimeout(function () {
      battleSelectors.displayDialogue.style.display = "none";
    }, dialogueConstant.END_NEXT_DISPLAY_DURATION);
  }, dialogueConstant.START_NEXT_DISPLAY_DURATION);
}
