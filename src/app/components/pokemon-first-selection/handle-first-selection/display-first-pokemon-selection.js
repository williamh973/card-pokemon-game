import { domElements } from "../../../shared/dom/dom-elements.js";
import { displayPokemonSelectedPopup } from "../../pokemon-selected-popup/display-pokemon-selected-popup.js";
import { pokemonCardList } from "../../../shared/pokemon/pokemon-card-list.js";

export function displayFirstPokemonSelection(pokemon) {
  function updatePokemonCardDisplay(card) {
    domElements.pokemonFirstLocation.innerHTML = "";
    domElements.pokemonFirstLocation.appendChild(card);
  }

  function getPokemonCard() {
    const card = pokemonCardList[pokemon];
    updatePokemonCardDisplay(card);
    displayPokemonSelectedPopup(pokemon);
  }
  getPokemonCard();
}
