import { domElements } from "../../../shared/dom/dom-elements.js";
import { pokemonSelected } from "../../pokemon-selected-confirm-popup/pokemon-selected.js";
import { pokemonCardList } from "../../../shared/pokemon/pokemon-card-list.js";

export function handlePokemonSecondSelection(pokemon) {
  domElements.pokemonSecondLocation.innerHTML = "";

  function getPokemonCard() {
    const card = pokemonCardList[pokemon];
    domElements.pokemonSecondLocation.appendChild(card);
    pokemonSelected(pokemon);
  }
  getPokemonCard();
}
