import { domElements } from "../../../shared/dom/dom-elements.js";
import { pokemonVariables } from "../../../shared/pokemon/pokemon-variables.js";
import { pokemonDisplayAnimation } from "../../../game-logic/battle/animations/pokemon-display-animation.js";

export function updateDisplayPokemonCard(firstPokemonCard, secondPokemonCard) {
  pokemonVariables.isFirstPokemonSelected = false;
  pokemonVariables.isSecondPokemonSelected = false;
  domElements.pokemonLeftLocation.innerHTML = "";
  domElements.pokemonRightLocation.innerHTML = "";

  pokemonDisplayAnimation(firstPokemonCard);
  domElements.pokemonLeftLocation.appendChild(firstPokemonCard);
  pokemonDisplayAnimation(secondPokemonCard);
  domElements.pokemonRightLocation.appendChild(secondPokemonCard);
}
