import { dialogueConstant } from "../../../shared/battle/dialogues/dialogue-constant.js";
import { battleSelectors } from "../../../shared/battle/battle-selectors.js";

export function openDialogueWhenPokemonMakesFirstAttack(attacker) {
  battleSelectors.displayDialogue.style.display = "flex";
  battleSelectors.displayDialogue.textContent = `${attacker.name} utilise ${attacker.firstAttack.name} !`;

  setTimeout(function () {
    battleSelectors.displayDialogue.style.display = "none";
  }, dialogueConstant.END_ATTACKS_DISPLAY_DURATION);
}

export function openDialogueWhenPokemonMakesSecondAttack(attacker) {
  battleSelectors.displayDialogue.style.display = "flex";

  battleSelectors.displayDialogue.textContent = `${attacker.name} utilise ${attacker.secondAttack.name} !`;

  setTimeout(function () {
    battleSelectors.displayDialogue.style.display = "none";
  }, dialogueConstant.END_ATTACKS_DISPLAY_DURATION);
}
