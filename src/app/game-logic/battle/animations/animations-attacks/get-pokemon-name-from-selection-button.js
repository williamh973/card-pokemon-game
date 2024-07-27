// import { pokemonSelectors } from "../../../../shared/header/pokemon-selectors.js";
// import { domElements } from "../../../../shared/dom/dom-elements.js";
// import { pokemonCardList } from "../../../../shared/pokemon/pokemon-card-list.js";

// export function getSecondPokemonCard(secondPokemonName) {
//   const secondPokemonCard = pokemonCardList[secondPokemonName];
//   return secondPokemonCard;
// }

// function getPokemonLocations(firstPokemonCard, secondPokemonCard) {
//   let firstPokemonCardInFirstLocation =
//     domElements.pokemonFirstLocation.contains(firstPokemonCard);
//   let firstPokemonCardInSecondLocation =
//     domElements.pokemonSecondLocation.contains(firstPokemonCard);

//   let secondPokemonCardInFirstLocation =
//     domElements.pokemonFirstLocation.contains(secondPokemonCard);
//   let secondPokemonCardInSecondLocation =
//     domElements.pokemonSecondLocation.contains(secondPokemonCard);
// }

// export function getPokemonNameFromSelectionButton() {
//   const secondPokemonName =
//     pokemonSelectors.secondPokemonSelectionButton.value ||
//     pokemonSelectors.randomAdversarySelectionButton.value;

//   let secondPokemonCard = getSecondPokemonCard(secondPokemonName);

//   getPokemonLocations(secondPokemonCard);
// }
