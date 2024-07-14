import { battleSelectors } from "../../../shared/battle/battle-selectors.js";
import { dialogueConstant } from "../../../shared/battle/dialogues/dialogue-constant.js";

export function openDialoguePokemonAlreadyCursed(pokemon) {
  setTimeout(function () {
    battleSelectors.displayDialogue.style.display = "flex";

    battleSelectors.displayDialogue.textContent = `Mais ${pokemon.name} est déjà maudit !`;

    setTimeout(function () {
      battleSelectors.displayDialogue.style.display = "none";
    }, dialogueConstant.END_NEXT_DISPLAY_DURATION);
  }, dialogueConstant.START_NEXT_DISPLAY_DURATION);
}