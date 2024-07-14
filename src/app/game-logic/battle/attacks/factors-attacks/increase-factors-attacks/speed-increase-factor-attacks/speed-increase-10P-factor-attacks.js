import { openDialogueWhenPokemonMakesSpeedIncrease10pFactorAttack } from "../../../../../../components/battle-dialogues/dialogues/pokemon-makes-speed-increase-10p-factor-attack.dialogue.js";
import { pokemonVariables } from "../../../../../../shared/pokemon/pokemon-variables.js";

export function speedIncrease10pFactorForFirstAttack(pokemon) {
  if (
    (pokemon.firstAttack.name === "Accupression" ||
      pokemon.firstAttack.name === "Hâte" ||
      pokemon.firstAttack.name === "Accupression") &&
    pokemonVariables.isFirstAttackActive
  ) {
    openDialogueWhenPokemonMakesSpeedIncrease10pFactorAttack(pokemon);
    const increasingValue = 10;
    const newSpeedValue = (pokemon.stats.speed += increasingValue);
    return newSpeedValue;
  }
}

export const speedIncrease10pFactorForSecondAttack =
  function speedIncrease10pFactorForSecondAttack(
    pokemon,
    isSecondAttackActive
  ) {
    if (
      (pokemon.secondAttack.name === "Accupression" ||
        pokemon.secondAttack.name === "Hâte" ||
        pokemon.secondAttack.name === "Poliroche") &&
      isSecondAttackActive
    ) {
      openDialogueWhenPokemonMakesSpeedIncrease10pFactorAttack(pokemon);
      const increasingValue = 10;
      const newSpeedValue = (pokemon.stats.speed += increasingValue);
      return newSpeedValue;
    }
  };