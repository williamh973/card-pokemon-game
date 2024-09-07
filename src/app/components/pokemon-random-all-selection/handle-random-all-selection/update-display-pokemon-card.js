import { domElements } from "../../../shared/dom/dom-elements.js";
import { pokemonVariables } from "../../../shared/pokemon/pokemon-variables.js";
import { startSlideInAnimation } from "../../../game-logic/battle/animations/utils/pokemon-display-animation.js";

export function updateDisplayPokemonCard(firstPokemonCard, secondPokemonCard) {
  pokemonVariables.isFirstPokemonSelected = false;
  pokemonVariables.isSecondPokemonSelected = false;
  domElements.pokemonLeftLocation.innerHTML = "";
  domElements.pokemonRightLocation.innerHTML = "";

  startSlideInAnimation(firstPokemonCard);
  domElements.pokemonLeftLocation.appendChild(firstPokemonCard);
  startSlideInAnimation(secondPokemonCard);
  domElements.pokemonRightLocation.appendChild(secondPokemonCard);
}
