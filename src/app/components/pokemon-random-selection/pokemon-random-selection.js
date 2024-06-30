import { domElements } from "../../shared/dom/dom-elements.js";
import { pokemonVariables } from "../../shared/pokemon/pokemon-variables.js";
import { handleSelectionRandomPokemon } from "../handle-menu-and-selections/handlePokemonRandomSelection.js";
import { pokemonSelectors } from "../../shared/header/pokemon-selectors.js";
import { possibleRandomPokemonsList } from "../handle-menu-and-selections/possible-random-pokemons-list.js";

document.addEventListener("DOMContentLoaded", () => {
  fetch(
    "./src/app/components/pokemon-random-selection/pokemon-random-selection.html"
  )
    .then((response) => response.text())
    .then((data) => {
      pokemonSelectors.selectRandomSelectionContainer.innerHTML = data;
      initializeRandomSelection();
    })
    .catch((reject) => reject);

  function initializeRandomSelection() {
    pokemonSelectors.selectRandomSelectionButton.addEventListener(
      "click",
      () => {
        const randomIndex = Math.floor(
          Math.random() * possibleRandomPokemonsList.length
        );
        const pokemon = possibleRandomPokemonsList[randomIndex];
        pokemonSelectors.selectSecondPokemonButton.value = pokemon;
        handleSelectionRandomPokemon(pokemon);
        pokemonVariables.isSecondPokemonSelected = true;
        pokemonVariables.enemyPokemon = pokemon;
        domElements.fightButtonContainer.style.display = "flex";
        activateFightButton();
        domElements.containerFullPopupDialogueFight.style.display = "none";
        domElements.displayDialogue.style.display = "none";
      }
    );
  }
});
