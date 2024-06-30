export const pokemonSelectors = {
  get selectFirstPokemonContainer() {
    return document.getElementById("pokemon-firstSelection-container");
  },
  get selectFirstPokemonButton() {
    return document.getElementById("pokemonFirstSelection");
  },
  get selectSecondPokemonContainer() {
    return document.getElementById("pokemon-secondSelection-container");
  },
  get selectSecondPokemonButton() {
    return document.getElementById("pokemonSecondSelection");
  },
  get selectRandomSelectionContainer() {
    return document.getElementById("pokemon-randomSelection-container");
  },
  get selectRandomSelectionButton() {
    return document.getElementById("pokemonRandomSelection");
  },
};
