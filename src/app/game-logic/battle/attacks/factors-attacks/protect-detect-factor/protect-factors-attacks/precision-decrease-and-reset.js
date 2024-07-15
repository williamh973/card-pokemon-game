import { isProtectOrDetectCapacityActived } from "./protect-detect-capacity-actived.js";
import { openDialogueWhenPokemonReadyToProtectItself } from "../../../../../../components/battle-dialogues/dialogues/pokemon-ready-to-protect-itself.dialogue.js";

export let protectCount = 0;
const possibleAttacksList = ["Abri", "Détection"];

export function pokemonDecreasePrecision(firstAttacker, firstAttackerAttack) {
  if (isProtectOrDetectCapacityActived) {
    openDialogueWhenPokemonReadyToProtectItself(firstAttacker);

    protectCount++;

    if (possibleAttacksList.includes(firstAttackerAttack.name)) {
      firstAttackerAttack.precision -= 15;
    }
    resetPrecisionAttack(firstAttackerAttack);
  }
}

function resetPrecisionAttack(firstAttackerAttack) {
  if (protectCount === 5) {
    protectCount = 0;

    if (possibleAttacksList.includes(firstAttackerAttack.name)) {
      firstAttackerAttack.precision = firstAttackerAttack.precisionMax;
    }
  }
}
