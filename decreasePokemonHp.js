import pikachuStats from "./stats/pikachuStats.js";
import evoliStats from "./stats/evoliStats.js";
import roucoolStats from "./stats/roucoolStats.js";
import racaillouStats from "./stats/racaillouStats.js";

import pikachuCard from "./cards/pikachuCard.js";
import evoliCard from "./cards/evoliCard.js";
import roucoolCard from "./cards/roucoolCard.js";
import racaillouCard from "./cards/racaillouCard.js";

import selectors from "./main-game.js";

export const decreaseHp = function decreaseHp() {
  if (
    selectors.selectFirstPokemonButton.value === "pikachu" ||
    selectors.selectSecondPokemonButton.value === "pikachu" ||
    selectors.pokemonFirstLocation.contains(pikachuCard) ||
    selectors.pokemonSecondLocation.contains(pikachuCard)
  ) {
    document.getElementById("pikachuHealth").textContent =
      `  ${pikachuStats.stats.hp} Pv`;
  }

  if (
    selectors.selectFirstPokemonButton.value === "evoli" ||
    selectors.selectSecondPokemonButton.value === "evoli" ||
    selectors.pokemonFirstLocation.contains(evoliCard) ||
    selectors.pokemonSecondLocation.contains(evoliCard)
  ) {
    document.getElementById("evoliHealth").textContent =
      `${evoliStats.stats.hp} Pv`;
  }

  if (
    selectors.selectFirstPokemonButton.value === "roucool" ||
    selectors.selectSecondPokemonButton.value === "roucool" ||
    selectors.pokemonFirstLocation.contains(roucoolCard) ||
    selectors.pokemonSecondLocation.contains(roucoolCard)
  ) {
    document.getElementById("roucoolHealth").textContent =
      `${roucoolStats.stats.hp} Pv`;
  }

  if (
    selectors.selectFirstPokemonButton.value === "racaillou" ||
    selectors.selectSecondPokemonButton.value === "racaillou" ||
    selectors.pokemonFirstLocation.contains(racaillouCard) ||
    selectors.pokemonSecondLocation.contains(racaillouCard)
  ) {
    document.getElementById("racaillouHealth").textContent =
      `${racaillouStats.stats.hp} Pv`;
  }
};
