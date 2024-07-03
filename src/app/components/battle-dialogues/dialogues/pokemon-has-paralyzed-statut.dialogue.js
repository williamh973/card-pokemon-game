import { battleSelectors } from "../../../shared/battle/battle-selectors.js";
import { dialogueConstant } from "../../../shared/battle/dialogues/dialogue-constant.js";

export function openDialogueWhenPokemonHasParalyzedStatut(pokemon) {
  setTimeout(function () {
    battleSelectors.displayDialogue.style.display = "flex";

    battleSelectors.displayDialogue.textContent = `${pokemon.name} est paralysé, il pourrait ne pas attaquer !`;

    setTimeout(function () {
      battleSelectors.displayDialogue.style.display = "none";
    }, dialogueConstant.END_NEXT_DISPLAY_DURATION);
  }, dialogueConstant.START_NEXT_DISPLAY_DURATION);
}
