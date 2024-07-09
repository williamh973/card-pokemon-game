export const domElements = {
  get containerFullPopupPokemonSelected() {
    return document.getElementById("container-display-pokemon-selected");
  },
  get displayPopupPokemonSelected() {
    return document.getElementById("pokemon-selected");
  },
  get ring() {
    return document.getElementById("ring");
  },
  main: document.getElementById("main"),
  headContainer: document.getElementById("header-container"),
  definiteModTitle: document.getElementById("definite-mod-title"),
  randomAdversaryModTitle: document.getElementById(
    "random-adversary-mod-title"
  ),
  pokemonFirstLocation: document.getElementById("pokemon-first-location"),
  pokemonSecondLocation: document.getElementById("pokemon-second-location"),
  isDefiniteModActived: false,
  isRandomAdversaryModActivated: false,

  pokemonStatsContainer: document.getElementById("container-stats"),
};
