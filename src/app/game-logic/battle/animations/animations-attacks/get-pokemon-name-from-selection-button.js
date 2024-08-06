// import { pokemonSelectors } from "../../../../shared/header/pokemon-selectors.js";
// import { domElements } from "../../../../shared/dom/dom-elements.js";
// import { pokemonCardList } from "../../../../shared/pokemon/pokemon-card-list.js";

// export function getSecondPokemonCard(secondPokemonName) {
//   const secondPokemonCard = pokemonCardList[secondPokemonName];
//   return secondPokemonCard;
// }

// function getPokemonLocations(firstPokemonCard, secondPokemonCard) {
//   let firstPokemonCardInFirstLocation =
//     domElements.pokemonLeftLocation.contains(firstPokemonCard);
//   let firstPokemonCardInSecondLocation =
//     domElements.pokemonRightLocation.contains(firstPokemonCard);

//   let secondPokemonCardInFirstLocation =
//     domElements.pokemonLeftLocation.contains(secondPokemonCard);
//   let secondPokemonCardInSecondLocation =
//     domElements.pokemonRightLocation.contains(secondPokemonCard);
// }

// export function getPokemonNameFromSelectionButton() {
//   const secondPokemonName =
//     pokemonSelectors.secondPokemonSelectionButton.value ||
//     pokemonSelectors.randomAdversarySelectionButton.value;

//   let secondPokemonCard = getSecondPokemonCard(secondPokemonName);

//   getPokemonLocations(secondPokemonCard);
// }
