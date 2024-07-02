import { openDialogueWhenPokemonMakesSpeedIncrease5pFactorAttack } from "../../../dialogue-battle.js";

export const speedIncrease5pFactorForFirstAttack =
  function speedIncrease5pFactorForFirstAttack(pokemon, isFirstAttackActive) {
    if (
      (pokemon.firstAttack.name === "Pouvoir Antique" ||
        pokemon.firstAttack.name === "Vent Argenté" ||
        pokemon.firstAttack.name === "Vent Mauvais" ||
        pokemon.firstAttack.name === "Danse Draco" ||
        pokemon.firstAttack.name === "Vent Arrière") &&
      isFirstAttackActive
    ) {
      openDialogueWhenPokemonMakesSpeedIncrease5pFactorAttack(pokemon);
      const increasingValue = 5;
      const newSpeedValue = (pokemon.stats.speed += increasingValue);
      return newSpeedValue;
    }
  };

export const speedIncrease5pFactorForSecondAttack =
  function speedIncrease5pFactorForSecondAttack(pokemon, isSecondAttackActive) {
    if (
      (pokemon.secondAttack.name === "Pouvoir Antique" ||
        pokemon.secondAttack.name === "Vent Argenté" ||
        pokemon.secondAttack.name === "Vent Mauvais" ||
        pokemon.secondAttack.name === "Danse Draco" ||
        pokemon.secondAttack.name === "Vent Arrière") &&
      isSecondAttackActive
    ) {
      openDialogueWhenPokemonMakesSpeedIncrease5pFactorAttack(pokemon);
      const increasingValue = 5;
      const newSpeedValue = (pokemon.stats.speed += increasingValue);
      return newSpeedValue;
    }
  };
