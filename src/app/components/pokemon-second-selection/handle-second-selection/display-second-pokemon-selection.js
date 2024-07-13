import { domElements } from "../../../shared/dom/dom-elements.js";
import { displayPokemonSelectedPopup } from "../../pokemon-selected-popup/display-pokemon-selected-popup.js";
import { pokemonCardList } from "../../../shared/pokemon/pokemon-card-list.js";
import { pokemonDisplayAnimation } from "../../../game-logic/battle/animations/pokemon-display-animation.js";

export function displaySecondPokemonSelection(pokemon) {
  function updatePokemonCardDisplay(pokemonCard) {
    domElements.pokemonSecondLocation.innerHTML = "";
    pokemonDisplayAnimation(pokemonCard);
    domElements.pokemonSecondLocation.appendChild(pokemonCard);
  }
  function getPokemonCard() {
    const pokemonCard = pokemonCardList[pokemon];
    updatePokemonCardDisplay(pokemonCard);
    displayPokemonSelectedPopup(pokemon);
  }
  getPokemonCard();
}
