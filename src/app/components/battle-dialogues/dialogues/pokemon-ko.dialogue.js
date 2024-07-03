import { battleSelectors } from "../../../shared/battle/battle-selectors.js";

export function openDialogueWhenPokemonKo() {
  setTimeout(function () {
    battleSelectors.displayDialogue.style.display = "flex";
    battleSelectors.displayDialogue.textContent = "Choisir un autre pokemon.";
  }, 3000);
}
