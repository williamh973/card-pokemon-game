import { isProtectOrDetectCapacityActived } from "./protect-detect-capacity-actived.js";

import { openDialogueWhenPokemonReadyToProtectItself } from "../../dialogue-fight.js";

export let protectCount = 0;

export function pokemonDecreasePrecision(pokemon) {
  if (isProtectOrDetectCapacityActived) {
    openDialogueWhenPokemonReadyToProtectItself(pokemon);

    protectCount++;

    if (
      pokemon.firstAttack.name === "Abri" ||
      pokemon.firstAttack.name === "Detection"
    ) {
      pokemon.firstAttack.precision -= 15;
    } else if (
      pokemon.secondAttack.name === "Abri" ||
      pokemon.secondAttack.name === "Detection"
    ) {
      pokemon.secondAttack.precision -= 15;
    }

    resetPrecisionAttack(pokemon);
  }
}

function resetPrecisionAttack(pokemon) {
  if (protectCount === 5) {
    protectCount = 0;

    if (
      pokemon.firstAttack.name === "Abri" ||
      pokemon.firstAttack.name === "Detection"
    ) {
      pokemon.firstAttack.precision = pokemon.firstAttack.precisionMax;
    } else if (
      pokemon.secondAttack.name === "Abri" ||
      pokemon.secondAttack.name === "Detection"
    ) {
      pokemon.secondAttack.precision = pokemon.secondAttack.precisionMax;
    }
  }
}
