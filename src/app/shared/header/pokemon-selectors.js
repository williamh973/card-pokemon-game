export const pokemonSelectors = {
  get selectFirstPokemonContainer() {
    return document.getElementById("pokemon-firstSelection-container");
  },
  get firstPokemonSelectionButton() {
    return document.getElementById("pokemonFirstSelection");
  },
  get selectSecondPokemonContainer() {
    return document.getElementById("pokemon-secondSelection-container");
  },
  get secondPokemonSelectionButton() {
    return document.getElementById("pokemonSecondSelection");
  },
  get selectRandomSelectionContainer() {
    return document.getElementById("pokemon-randomSelection-container");
  },
  get randomAdversarySelectionButton() {
    return document.getElementById("pokemonRandomSelection");
  },
  get selectRandomAllSelectionContainer() {
    return document.getElementById("pokemon-randomAllSelection-container");
  },
  get randomAllSelectionButton() {
    return document.getElementById("pokemonRandomAllSelection");
  },
};
