import { updatePlayerScore } from "../score/updatePlayerScore.js";
import { domElements } from "../../shared/dom/dom-elements.js";
import { pokemonCardList } from "../../shared/pokemon/pokemon-card-list.js";
import { pokemonSelectors } from "../../shared/header/pokemon-selectors.js";
import { updateComputerScore } from "../score/updateComputerScore.js";

function getPokemonCards() {
  const firstPokemonCard =
    pokemonCardList[pokemonSelectors.firstPokemonSelectionButton.value];
  const secondPokemonCard =
    pokemonCardList[pokemonSelectors.secondPokemonSelectionButton.value];
  const randomPokemonCard =
    pokemonCardList[pokemonSelectors.randomAdversarySelectionButton.value];
  return { firstPokemonCard, secondPokemonCard, randomPokemonCard };
}

function isPokemonInFirstLocation(pokemonCard) {
  return domElements.pokemonLeftLocation.contains(pokemonCard);
}

function isPokemonInSecondLocation(pokemonCard) {
  return domElements.pokemonRightLocation.contains(pokemonCard);
}

export function hideFirstAttackerWhenLose(firstAttacker, enemyPokemon) {
  const { firstPokemonCard } = getPokemonCards();
  if (
    firstAttacker.name === enemyPokemon &&
    isPokemonInFirstLocation(firstPokemonCard)
  ) {
    updatePlayerScore();
  } else {
    updateComputerScore();
  }
}

export function hideSecondAttackerWhenLose(secondAttacker, enemyPokemon) {
  const { secondPokemonCard, randomPokemonCard } = getPokemonCards();
  if (
    (secondAttacker.name === enemyPokemon &&
      isPokemonInSecondLocation(secondPokemonCard)) ||
    (secondAttacker.name === enemyPokemon &&
      isPokemonInSecondLocation(randomPokemonCard))
  ) {
    updatePlayerScore();
  } else {
    updateComputerScore();
  }
}
