import { openDialogueWhenPokemonMakesHpIncrease5pFactorAttack } from "../../../../../../components/battle-dialogues/dialogues/pokemon-makes-hp-increase-5p-factor-attack.dialogue.js";
import { openDialogueWhenPokemonMissHpIncrease5pFactorAttack } from "../../../../../../components/battle-dialogues/dialogues/pokemon-miss-hp-increase-5p-factor-attack.dialogue.js";
import { pokemonVariables } from "../../../../../../shared/pokemon/pokemon-variables.js";

function increaseHp(pokemon) {
  const increasingValue = 5;
  const currentHp = pokemon.stats.hp;
  const maxHp = pokemon.stats.hpMax;

  const newHpValue = currentHp + increasingValue;

  const actualIncrease =
    newHpValue > maxHp ? maxHp - currentHp : increasingValue;

  pokemon.stats.hp = Math.min(newHpValue, maxHp);

  return actualIncrease;
}

function isCurrentHpAlreadyAboveHpMax(pokemon) {
  pokemon.stats.hp = pokemon.stats.hpMax;
  openDialogueWhenPokemonMissHpIncrease5pFactorAttack();
  return pokemon.stats.hp;
}

function currentHpGreaterThanHpMaxAfterIncreased(pokemon) {
  if (pokemon.stats.hp >= pokemon.stats.hpMax) {
    pokemon.stats.hp = pokemon.stats.hpMax;
    return pokemon.stats.hp;
  }
}

export function hpIncrease5pFactorForFirstAttack(pokemon) {
  if (
    pokemon.firstAttack.name === "Soin" &&
    pokemonVariables.isFirstAttackActive &&
    pokemon.stats.hp < pokemon.stats.hpMax
  ) {
    const hpGained = increaseHp(pokemon);

    openDialogueWhenPokemonMakesHpIncrease5pFactorAttack(pokemon, hpGained);
    increaseHp(pokemon);
    currentHpGreaterThanHpMaxAfterIncreased(pokemon);
  } else if (
    pokemon.firstAttack.name === "Soin" &&
    pokemonVariables.isFirstAttackActive &&
    pokemon.stats.hp >= pokemon.stats.hpMax
  ) {
    isCurrentHpAlreadyAboveHpMax(pokemon);
  }
}

export const hpIncrease5pFactorForSecondAttack =
  function hpIncrease5pFactorForSecondAttack(pokemon, isSecondAttackActive) {
    if (
      pokemon.secondAttack.name === "Soin" &&
      isSecondAttackActive &&
      pokemon.stats.hp < pokemon.stats.hpMax
    ) {
      const hpGained = increaseHp(pokemon);

      openDialogueWhenPokemonMakesHpIncrease5pFactorAttack(pokemon, hpGained);
      increaseHp(pokemon);
      currentHpGreaterThanHpMaxAfterIncreased(pokemon);
    } else if (
      pokemon.secondAttack.name === "Soin" &&
      isSecondAttackActive &&
      pokemon.stats.hp >= pokemon.stats.hpMax
    ) {
      isCurrentHpAlreadyAboveHpMax(pokemon);
    }
  };