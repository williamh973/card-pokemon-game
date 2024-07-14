import { openDialogueWhenPokemonMakesSpeedIncrease5pFactorAttack } from "../../../../../../components/battle-dialogues/dialogues/pokemon-makes-speed-increase-5p-factor-attack.dialogue.js";
import { pokemonVariables } from "../../../../../../shared/pokemon/pokemon-variables.js";

export function speedIncrease5pFactorForFirstAttack(pokemon) {
  if (
    (pokemon.firstAttack.name === "Pouvoir Antique" ||
      pokemon.firstAttack.name === "Vent Argenté" ||
      pokemon.firstAttack.name === "Vent Mauvais" ||
      pokemon.firstAttack.name === "Danse Draco" ||
      pokemon.firstAttack.name === "Vent Arrière") &&
    pokemonVariables.isFirstAttackActive
  ) {
    openDialogueWhenPokemonMakesSpeedIncrease5pFactorAttack(pokemon);
    const increasingValue = 5;
    const newSpeedValue = (pokemon.stats.speed += increasingValue);
    return newSpeedValue;
  }
}

export function speedIncrease5pFactorForSecondAttack(
  pokemon,
  isSecondAttackActive
) {
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
}
