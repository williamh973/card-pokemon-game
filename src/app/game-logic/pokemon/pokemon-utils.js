import { pokemonCardIdList } from "../../shared/pokemon/pokemon-card-id-list.js";
import { pokemonSelectors } from "../../shared/header/pokemon-selectors.js";

export function getPokemonCardIds() {
  const firstPokemonCardId =
    pokemonCardIdList[pokemonSelectors.firstPokemonSelectionButton.value];
  const secondPokemonCardId =
    pokemonCardIdList[pokemonSelectors.secondPokemonSelectionButton.value];
  const randomPokemonCardId =
    pokemonCardIdList[pokemonSelectors.randomAdversarySelectionButton.value];

  return {
    firstPokemonCardId,
    secondPokemonCardId,
    randomPokemonCardId,
  };
}

export function getCardRects(
  firstPokemonCardId,
  secondPokemonCardId,
  randomPokemonCardId
) {
  const firstPokemonCard = document.getElementById(firstPokemonCardId);
  const secondPokemonCard = document.getElementById(secondPokemonCardId);
  const randomPokemonCard = document.getElementById(randomPokemonCardId);

  if (!firstPokemonCard) {
    console.error("First Pokémon card not found.");
    return null;
  }

  const firstRect = firstPokemonCard.getBoundingClientRect();
  let secondRect = null;
  let randomRect = null;

  if (secondPokemonCard) {
    secondRect = secondPokemonCard.getBoundingClientRect();
  } else {
    console.warn("Second Pokémon card not found.");
  }

  if (randomPokemonCard) {
    randomRect = randomPokemonCard.getBoundingClientRect();
  } else {
    // console.warn("Random Pokémon card not found.");
  }

  return {
    firstRect,
    secondRect,
    randomRect,
  };
}

export function calculateRectangleCoordinates(
  firstRect,
  secondRect,
  randomRect
) {
  const startX = firstRect.left + firstRect.width / 2;
  const startY = firstRect.top + firstRect.height / 2;

  let endX, endY;

  if (secondRect) {
    endX = secondRect.left + secondRect.width / 2;
    endY = secondRect.top + secondRect.height / 2;
  } else if (randomRect) {
    endX = randomRect.left + randomRect.width / 2;
    endY = randomRect.top + randomRect.height / 2;
  } else {
    console.error("No target Pokémon card found.");
    return null;
  }

  return { startX, startY, endX, endY };
}
