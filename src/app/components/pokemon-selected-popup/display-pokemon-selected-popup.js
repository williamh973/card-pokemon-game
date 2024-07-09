import { domElements } from "../../shared/dom/dom-elements.js";
import { pokemonNameList } from "../../shared/pokemon/pokemon-name-list.js";
import { pokemonVariables } from "../../shared/pokemon/pokemon-variables.js";

export function displayPokemonSelectedPopup(pokemon) {
  const POPUP_DISPLAY_TIMELAPS = 1_500;

  pokemonNameList.find((pokemonFromPokemonList) => {
    if (pokemonFromPokemonList === pokemon) {
      domElements.containerFullPopupPokemonSelected.style.display = "flex";
      domElements.displayPopupPokemonSelected.textContent = `${pokemon} ${pokemonVariables.selection}`;
    }
  });

  setTimeout(() => {
    domElements.containerFullPopupPokemonSelected.style.display = "none";
  }, POPUP_DISPLAY_TIMELAPS);
}
