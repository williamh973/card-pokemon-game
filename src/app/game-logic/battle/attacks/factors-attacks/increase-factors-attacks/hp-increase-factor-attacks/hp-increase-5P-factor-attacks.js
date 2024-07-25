import { openDialogueWhenPokemonMakesHpIncrease5pFactorAttack } from "../../../../../../components/battle-dialogues/dialogues/pokemon-makes-hp-increase-5p-factor-attack.dialogue.js";
import { openDialogueWhenPokemonMissHpIncrease5pFactorAttack } from "../../../../../../components/battle-dialogues/dialogues/pokemon-miss-hp-increase-5p-factor-attack.dialogue.js";

function increaseHp(firstAttacker) {
  const increasingValue = 5;
  const currentHp = firstAttacker.stats.hp;
  const maxHp = firstAttacker.stats.hpMax;

  const newHpValue = currentHp + increasingValue;

  const actualIncrease =
    newHpValue > maxHp ? maxHp - currentHp : increasingValue;

  firstAttacker.stats.hp = Math.min(newHpValue, maxHp);

  return actualIncrease;
}

async function isCurrentHpAlreadyAboveHpMax(firstAttacker) {
  firstAttacker.stats.hp = firstAttacker.stats.hpMax;
  await openDialogueWhenPokemonMissHpIncrease5pFactorAttack();
  return firstAttacker.stats.hp;
}

function currentHpGreaterThanHpMaxAfterIncreased(firstAttacker) {
  if (firstAttacker.stats.hp >= firstAttacker.stats.hpMax) {
    firstAttacker.stats.hp = firstAttacker.stats.hpMax;
    return firstAttacker.stats.hp;
  }
}

export async function hpIncrease5pFactorAttack(
  firstAttacker,
  firstAttackerAttack
) {
  const possibleAttacksList = ["Soin"];

  if (
    possibleAttacksList.includes(firstAttackerAttack.name) &&
    firstAttacker.stats.hp < firstAttacker.stats.hpMax
  ) {
    const hpGained = increaseHp(firstAttacker);

    await openDialogueWhenPokemonMakesHpIncrease5pFactorAttack(
      firstAttacker,
      hpGained
    );
    increaseHp(firstAttacker);
    currentHpGreaterThanHpMaxAfterIncreased(firstAttacker);
  } else if (
    possibleAttacksList.includes(firstAttackerAttack.name) &&
    firstAttacker.stats.hp >= firstAttacker.stats.hpMax
  ) {
    isCurrentHpAlreadyAboveHpMax(firstAttacker);
  }
}
