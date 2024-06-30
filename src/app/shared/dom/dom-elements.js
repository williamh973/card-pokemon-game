export const domElements = {
  get containerFullPopupPokemonSelected() {
    return document.getElementById("container-display-pokemon-selected");
  },
  get displayPopupPokemonSelected() {
    return document.getElementById("pokemon-selected");
  },
  headContainer: document.getElementById("header-container"),
  main: document.getElementById("main"),
  definiteModTitle: document.getElementById("definite-mod-title"),
  randomModTitle: document.getElementById("random-mod-title"),
  pokemonFirstLocation: document.getElementById("pokemon-first-location"),
  pokemonSecondLocation: document.getElementById("pokemon-second-location"),
  containerFullPopupDialogueFight: document.getElementById(
    "container-display-dialogue"
  ),
  fightInProgress: document.getElementById("fight-in-progress"),
  fightButtonContainer: document.getElementById("container-btn-fight"),
  fightButton: document.getElementById("fightButton"),
  displayDialogue: document.getElementById("dialogue"),
  isDefiniteModActived: false,
  isRandomModActived: false,

  pokemonStatsContainer: document.getElementById("container-stats"),
};
