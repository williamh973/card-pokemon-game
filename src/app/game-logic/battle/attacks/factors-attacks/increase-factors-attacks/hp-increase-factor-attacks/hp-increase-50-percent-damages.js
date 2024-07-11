import { openDialogueWhenPokemonMakesHpIncrease50PercentOfDamagesFactorAttack } from "../../../../../../components/battle-dialogues/dialogues/pokemon-makes-hp-increase-50-percent-of-damage-factor-attack.dialogue.js";
import { openDialogueWhenPokemonMissAttack } from "../../../../../../components/battle-dialogues/dialogues/pokemon-miss-attack.dialogue.js";

function increaseHp(firstAttacker, damages) {
  if (firstAttacker.stats.hp < firstAttacker.stats.hpMax) {
    const increasingValue = damages / 2;

    const currentHp = firstAttacker.stats.hp;
    const maxHp = firstAttacker.stats.hpMax;

    const newHpValue = currentHp + increasingValue;
    const actualIncrease =
      newHpValue > maxHp ? maxHp - currentHp : increasingValue;
    firstAttacker.stats.hp = Math.min(newHpValue, maxHp);

    openDialogueWhenPokemonMakesHpIncrease50PercentOfDamagesFactorAttack(
      firstAttacker,
      actualIncrease
    );

    return actualIncrease;
  } else if (firstAttacker.stats.hp >= firstAttacker.stats.hpMax) {
    isCurrentHpAlreadyAboveHpMax(firstAttacker);
  }
}

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

export function hpIncrease50PercentOfDamagesFactorForFirstAttack(
  firstAttacker,
  secondAttacker,
  isFirstAttackActive,
  damages
) {
  if (
    firstAttacker.firstAttack.name === "Dévorêve" &&
    secondAttacker.primaryStatut === "asleep" &&
    isFirstAttackActive
  ) {
    increaseHp(firstAttacker, damages);

    currentHpGreaterThanHpMaxAfterIncreased(firstAttacker);
    return 1;
  } else if (
    firstAttacker.firstAttack.name === "Dévorêve" &&
    secondAttacker.primaryStatut !== "asleep" &&
    isFirstAttackActive
  ) {
    openDialogueWhenPokemonMissAttack(firstAttacker);
    return 0;
  }
}

export function hpIncrease50PercentOfDamagesFactorForSecondAttack(
  firstAttacker,
  secondAttacker,
  isSecondAttackActive,
  damages
) {
  if (
    firstAttacker.secondAttack.name === "Dévorêve" &&
    secondAttacker.primaryStatut === "asleep" &&
    isSecondAttackActive
  ) {
    increaseHp(firstAttacker, damages);

    currentHpGreaterThanHpMaxAfterIncreased(firstAttacker);
    return 1;
  } else if (
    firstAttacker.secondAttack.name === "Dévorêve" &&
    secondAttacker.primaryStatut !== "asleep" &&
    isSecondAttackActive
  ) {
    openDialogueWhenPokemonMissAttack(firstAttacker);
    return 0;
  }
}
