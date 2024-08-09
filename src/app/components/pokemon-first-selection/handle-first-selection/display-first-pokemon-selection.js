import { domElements } from "../../../shared/dom/dom-elements.js";
import { displayPokemonSelectedPopup } from "../../pokemon-selected-popup/display-pokemon-selected-popup.js";
import { pokemonCardList } from "../../../shared/pokemon/pokemon-card-list.js";
import { pokemonDisplayAnimation } from "../../../game-logic/battle/animations/utils/pokemon-display-animation.js";

export function displayFirstPokemonSelection(pokemon) {
  function updatePokemonCardDisplay(pokemonCard) {
    domElements.pokemonLeftLocation.innerHTML = "";
    pokemonDisplayAnimation(pokemonCard);
    domElements.pokemonLeftLocation.appendChild(pokemonCard);
  }

  function getPokemonCard() {
    const pokemonCard = pokemonCardList[pokemon];
    updatePokemonCardDisplay(pokemonCard);
    displayPokemonSelectedPopup(pokemon);
  }
  getPokemonCard();
}
