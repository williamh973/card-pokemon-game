import { battleSelectors } from "../../../shared/battle/battle-selectors.js";
import { dialogueConstant } from "../../../shared/battle/dialogues/dialogue-constant.js";

export function openDialogueWhenPokemonIsAsleepStatut(pokemon) {
  setTimeout(function () {
    battleSelectors.displayDialogue.style.display = "flex";

    battleSelectors.displayDialogue.textContent = `${pokemon.name} dort !`;

    setTimeout(function () {
      battleSelectors.displayDialogue.style.display = "none";
    }, dialogueConstant.END_ALTERATION_STATUT_DISPLAY_DURATION);
  }, dialogueConstant.START_ALTERATION_STATUT_DISPLAY_DURATION);
}