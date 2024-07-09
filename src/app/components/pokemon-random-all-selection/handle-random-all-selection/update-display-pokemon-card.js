import { domElements } from "../../../shared/dom/dom-elements.js";
import { pokemonVariables } from "../../../shared/pokemon/pokemon-variables.js";

export function updateDisplayPokemonCard(firstPokemonCard, secondPokemonCard) {
  pokemonVariables.isFirstPokemonSelected = false;
  pokemonVariables.isSecondPokemonSelected = false;
  domElements.pokemonFirstLocation.innerHTML = "";
  domElements.pokemonSecondLocation.innerHTML = "";

  domElements.pokemonFirstLocation.appendChild(firstPokemonCard);
  domElements.pokemonSecondLocation.appendChild(secondPokemonCard);
}
