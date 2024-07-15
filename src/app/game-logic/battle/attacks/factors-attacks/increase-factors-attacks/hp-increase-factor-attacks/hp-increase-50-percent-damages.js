import { openDialogueWhenPokemonMakesHpIncrease50PercentOfDamagesFactorAttack } from "../../../../../../components/battle-dialogues/dialogues/pokemon-makes-hp-increase-50-percent-of-damage-factor-attack.dialogue.js";
import { openDialogueWhenPokemonMissAttack } from "../../../../../../components/battle-dialogues/dialogues/pokemon-miss-attack.dialogue.js";
import { pokemonVariables } from "../../../../../../shared/pokemon/pokemon-variables.js";

function isCurrentHpAlreadyAboveHpMax(firstAttacker) {
  firstAttacker.stats.hp = firstAttacker.stats.hpMax;
  return firstAttacker.stats.hp;
}

function currentHpGreaterThanHpMaxAfterIncreased(firstAttacker) {
  if (firstAttacker.stats.hp >= firstAttacker.stats.hpMax) {
    firstAttacker.stats.hp = firstAttacker.stats.hpMax;
    return firstAttacker.stats.hp;
  }
}

function increasingHpValue(firstAttacker, increasingValue, currentHp, maxHp) {
  const newHpValue = currentHp + increasingValue;
  if (newHpValue > maxHp) {
    const actualIncrease = maxHp - currentHp;
    firstAttacker.stats.hp = Math.min(newHpValue, maxHp);

    openDialogueWhenPokemonMakesHpIncrease50PercentOfDamagesFactorAttack(
      firstAttacker,
      actualIncrease
    );
    return actualIncrease;
  } else {
    return increasingValue;
  }
}

function checkFirstAttackerPossibleIncreaseHp(
  firstAttacker,
  increasingValue,
  currentHp,
  maxHp
) {
  if (firstAttacker.stats.hp < firstAttacker.stats.hpMax) {
    increasingHpValue(firstAttacker, increasingValue, currentHp, maxHp);
  } else if (firstAttacker.stats.hp >= firstAttacker.stats.hpMax) {
    isCurrentHpAlreadyAboveHpMax(firstAttacker);
  }
}

export function hpIncrease50PercentOfDamagesFactorAttack(
  firstAttacker,
  firstAttackerAttack,
  secondAttacker,
  damages
) {
  const possibleAttacksList = ["Dévorêve"];

  if (
    possibleAttacksList.includes(firstAttackerAttack.name) &&
    secondAttacker.primaryStatut === "asleep"
  ) {
    checkFirstAttackerPossibleIncreaseHp(firstAttacker, damages);

    currentHpGreaterThanHpMaxAfterIncreased(firstAttacker);
    return 1;
  } else if (
    possibleAttacksList.includes(firstAttackerAttack.name) &&
    secondAttacker.primaryStatut !== "asleep"
  ) {
    openDialogueWhenPokemonMissAttack(firstAttacker);
    return 0;
  } else {
    return 1;
  }
}
