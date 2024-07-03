import { dialogueConstant } from "../../../shared/battle/dialogues/dialogue-constant.js";
import { battleSelectors } from "../../../shared/battle/battle-selectors.js";

export function openDialogueWhenPokemonCriticalHitAlreadyBoostedByFocusEnergy(
  attacker
) {
  setTimeout(function () {
    battleSelectors.displayDialogue.style.display = "flex";

    battleSelectors.displayDialogue.textContent = `${attacker.name} est déjà boosté !`;

    setTimeout(function () {
      battleSelectors.displayDialogue.style.display = "none";
    }, dialogueConstant.END_NEXT_DISPLAY_DURATION);
  }, dialogueConstant.START_NEXT_DISPLAY_DURATION);
}
