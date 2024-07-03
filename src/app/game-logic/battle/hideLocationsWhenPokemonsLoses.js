import { updatePlayerScore } from "../score/updatePlayerScore.js";
import { domElements } from "../../shared/dom/dom-elements.js";
import { pokemonCardList } from "../../shared/pokemon/pokemon-card-list.js";
import { pokemonSelectors } from "../../shared/header/pokemon-selectors.js";

function getPokemonCards() {
  const firstPokemonCard =
    pokemonCardList[pokemonSelectors.selectFirstPokemonButton.value];
  const secondPokemonCard =
    pokemonCardList[pokemonSelectors.selectSecondPokemonButton.value];
  const randomPokemonCard =
    pokemonCardList[pokemonSelectors.selectRandomSelectionButton.value];
  return { firstPokemonCard, secondPokemonCard, randomPokemonCard };
}

function isPokemonInFirstLocation(pokemonCard) {
  return domElements.pokemonFirstLocation.contains(pokemonCard);
}

function isPokemonInSecondLocation(pokemonCard) {
  return domElements.pokemonSecondLocation.contains(pokemonCard);
}

export function hideFirstAttackerWhenLose(firstAttacker, enemyPokemon) {
  const { firstPokemonCard } = getPokemonCards();
  if (
    firstAttacker.name === enemyPokemon &&
    isPokemonInFirstLocation(firstPokemonCard)
  ) {
    updatePlayerScore();
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
  }
}
