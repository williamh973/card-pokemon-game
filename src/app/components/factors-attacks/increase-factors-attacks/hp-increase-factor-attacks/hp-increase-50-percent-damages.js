import {
  openDialogueWhenPokemonMakesHpIncrease50PercentOfDamagesFactorAttack,
  openDialogueWhenPokemonMissAttack,
} from "../../../dialogue-fight.js";

function increaseHp(firstAttacker, degats) {
  if (firstAttacker.stats.hp < firstAttacker.stats.hpMax) {
    const increasingValue = degats / 2;

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

export const hpIncrease50PercentOfDamagesFactorForFirstAttack =
  function hpIncrease50PercentOfDamagesFactorForFirstAttack(
    firstAttacker,
    secondAttacker,
    isFirstAttackActive,
    degats
  ) {
    if (
      firstAttacker.firstAttack.name === "Dévorêve" &&
      secondAttacker.primaryStatut === "asleep" &&
      isFirstAttackActive
    ) {
      increaseHp(firstAttacker, degats);

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
  };

export const hpIncrease50PercentOfDamagesFactorForSecondAttack =
  function hpIncrease50PercentOfDamagesFactorForSecondAttack(
    firstAttacker,
    secondAttacker,
    isSecondAttackActive,
    degats
  ) {
    if (
      firstAttacker.secondAttack.name === "Dévorêve" &&
      secondAttacker.primaryStatut === "asleep" &&
      isSecondAttackActive
    ) {
      increaseHp(firstAttacker, degats);

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
  };
