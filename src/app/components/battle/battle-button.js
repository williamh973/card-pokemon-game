import { pokemonVariables } from "../../shared/pokemon/pokemon-variables.js";
import { domElements } from "../../shared/dom/dom-elements.js";

export function activateBattleButton() {
  if (
    pokemonVariables.isFirstPokemonSelected &&
    pokemonVariables.isSecondPokemonSelected
  ) {
    domElements.fightButton.disabled = false;
  }
}
