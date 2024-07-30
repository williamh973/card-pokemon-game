import { cursedStatut } from "./cursed-statut.js";
import { updateDisplayPokemonHp } from "../../../update-display-Pokemon-hp.js";
import { openDialoguePokemonAlreadyCursed } from "../../../../../components/battle-dialogues/dialogues/pokemon-already-cursed.dialogue.js";

function checkSecondAttackerAlreadyCursed(secondAttacker) {
  return secondAttacker.secondaryStatut.isCursed;
}

export function firstAttackerDecrease50PercentHp(firstAttacker) {
  let percentage = 50;
  let decreaseValue = (percentage / 100) * firstAttacker.stats.hpMax;
  const hpValue = Math.round(decreaseValue);
  return hpValue;
}

export async function cursedStatut100PercentProbability(
  firstAttacker,
  secondAttacker,
  firstAttackerAttack
) {
  const possibleAttacksList = ["Malédiction"];
  if (
    possibleAttacksList.includes(firstAttackerAttack.name) &&
    !checkSecondAttackerAlreadyCursed(secondAttacker)
  ) {
    let firstAttackerHpDecreasedValue =
      firstAttackerDecrease50PercentHp(firstAttacker);

    if (firstAttacker.stats.hp > firstAttackerHpDecreasedValue) {
      await cursedStatut(firstAttacker, secondAttacker);
      updateDisplayPokemonHp(firstAttacker, secondAttacker);
    }
  } else if (
    possibleAttacksList.includes(firstAttackerAttack.name) &&
    checkSecondAttackerAlreadyCursed(secondAttacker)
  ) {
    await openDialoguePokemonAlreadyCursed(secondAttacker);
  } else {
    return;
  }
}
