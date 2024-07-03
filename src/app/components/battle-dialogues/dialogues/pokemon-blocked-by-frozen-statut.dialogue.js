import { battleSelectors } from "../../../shared/battle/battle-selectors.js";
import { dialogueConstant } from "../../../shared/battle/dialogues/dialogue-constant.js";

export function openDialogueWhenPokemonBlockedByFrozenStatut(pokemon) {
  setTimeout(function () {
    battleSelectors.displayDialogue.style.display = "flex";

    battleSelectors.displayDialogue.textContent = `Le gel empêche ${pokemon.name} d'attaquer !`;

    setTimeout(function () {
      battleSelectors.displayDialogue.style.display = "none";
    }, dialogueConstant.END_ALTERATION_STATUT_DISPLAY_DURATION);
  }, dialogueConstant.START_ALTERATION_STATUT_DISPLAY_DURATION);
}
