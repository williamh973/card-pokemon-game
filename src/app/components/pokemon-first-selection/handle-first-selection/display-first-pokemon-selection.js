import { domElements } from "../../../shared/dom/dom-elements.js";
import { displayPokemonSelectedPopup } from "../../pokemon-selected-popup/display-pokemon-selected-popup.js";
import { pokemonCardList } from "../../../shared/pokemon/pokemon-card-list.js";
import { pokemonModelList } from "../../../shared/pokemon/pokemon-model-list.js";
import { startSlideInAnimation } from "../../../game-logic/battle/animations/utils/pokemon-display-animation.js";
import { cardImage } from "../../../shared/pokemon/cards/crustabri.card.js";

export function displayFirstPokemonSelection(pokemon) {
  function getPokemonModel() {
    const pokemonModel = pokemonModelList[pokemon];
    return pokemonModel;
  }

  function updatePokemonCardDisplay(pokemonCard) {
    const pokemonModel = getPokemonModel();
    domElements.pokemonLeftLocation.innerHTML = "";
    startSlideInAnimation(pokemonCard);
    cardImage(pokemonModel.imageLeftSide);
    domElements.pokemonLeftLocation.appendChild(pokemonCard);
  }

  function getPokemonCard() {
    const pokemonCard = pokemonCardList[pokemon];
    updatePokemonCardDisplay(pokemonCard);
    displayPokemonSelectedPopup(pokemon);
  }
  getPokemonCard();
}
