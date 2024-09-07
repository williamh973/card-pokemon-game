import { domElements } from "../../../shared/dom/dom-elements.js";
import { displayPokemonSelectedPopup } from "../../pokemon-selected-popup/display-pokemon-selected-popup.js";
import { pokemonCardList } from "../../../shared/pokemon/pokemon-card-list.js";
import { startSlideInAnimation } from "../../../game-logic/battle/animations/utils/pokemon-display-animation.js";

export function displayRandomPokemonSelection(pokemon) {
  function updatePokemonCardDisplay(pokemonCard) {
    domElements.pokemonRightLocation.innerHTML = "";
    startSlideInAnimation(pokemonCard);
    domElements.pokemonRightLocation.appendChild(pokemonCard);
  }

  function getPokemonCard() {
    const pokemonCard = pokemonCardList[pokemon];
    updatePokemonCardDisplay(pokemonCard);
    displayPokemonSelectedPopup(pokemon);
  }
  getPokemonCard();
}
