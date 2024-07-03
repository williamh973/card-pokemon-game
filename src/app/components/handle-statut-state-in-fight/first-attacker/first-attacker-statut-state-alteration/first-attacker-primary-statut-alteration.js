import { deseableProtectCapacity } from "../../../factors-attacks/protect-factors-attacks/protect-detect-capacity-actived.js";

import { openDialogueWhenPokemonBlockedByParalyzedStatut } from "../../../battle-dialogues/dialogues/pokemon-blocked-by-paralyzed-statut.dialogue.js";
import { openDialogueWhenPokemonAttacksDespiteParalyzedStatut } from "../../../battle-dialogues/dialogues/pokemon-attacks-despite-paralyzed-statut.dialogue.js";
import { openDialogueWhenPokemonHasThawedStatut } from "../../../battle-dialogues/dialogues/pokemon-has-thawed-statut.dialogue.js";
import { openDialogueWhenPokemonBlockedByFrozenStatut } from "../../../battle-dialogues/dialogues/pokemon-blocked-by-frozen-statut.dialogue.js";
import { openDialogueWhenPokemonIsAsleepStatut } from "../../../battle-dialogues/dialogues/pokemon-has-asleep-statut.dialogue.js";
import { openDialogueWhenPokemonWakeUp } from "../../../battle-dialogues/dialogues/pokemon-wake-up.dialogue.js";

export const firstAttackerStatutStateVariableList = {
  isFirstAttackerFrozen: false,
  isFirstAttackerParalyzed: false,
  isFirstAttackerAsleep: false,
};

let asleepCount = 0;
let randomNumber = Math.random();

function hpDeductionProcess(firstAttacker) {
  let percentage = 12.5;
  let decreaseValue = (percentage / 100) * firstAttacker.stats.hpMax;
  const newDecreaseValue = Math.round(decreaseValue);
  firstAttacker.stats.hp -= newDecreaseValue;
  return firstAttacker.stats.hp;
}

export function firstAttackerPrimaryStatutAlteration(firstAttacker) {
  switch (firstAttacker.primaryStatut) {
    case "burning":
      hpDeductionProcess(firstAttacker);
      break;

    case "poisoned":
      hpDeductionProcess(firstAttacker);
      break;

    case "paralyzed":
      randomNumber = Math.random();

      if (randomNumber <= 0.25) {
        firstAttackerStatutStateVariableList.isFirstAttackerParalyzed = true;
        openDialogueWhenPokemonBlockedByParalyzedStatut(firstAttacker);
        deseableProtectCapacity();
      } else {
        firstAttackerStatutStateVariableList.isFirstAttackerParalyzed = false;
        openDialogueWhenPokemonAttacksDespiteParalyzedStatut(firstAttacker);
      }
      break;

    case "frozen":
      randomNumber = Math.random();

      if (randomNumber <= 0.2) {
        firstAttackerStatutStateVariableList.isFirstAttackerFrozen = false;
        firstAttacker.primaryStatut = "normal";
        openDialogueWhenPokemonHasThawedStatut(firstAttacker);
      } else {
        firstAttackerStatutStateVariableList.isFirstAttackerFrozen = true;
        openDialogueWhenPokemonBlockedByFrozenStatut(firstAttacker);
        deseableProtectCapacity();
      }
      break;

    case "asleep":
      randomNumber = Math.random();

      if (randomNumber <= 0.5) {
        firstAttackerStatutStateVariableList.isFirstAttackerAsleep = true;
        openDialogueWhenPokemonIsAsleepStatut(firstAttacker);
        deseableProtectCapacity();
        asleepCount++;
      } else {
        firstAttackerStatutStateVariableList.isFirstAttackerAsleep = false;
        firstAttacker.primaryStatut = "normal";
        openDialogueWhenPokemonWakeUp(firstAttacker);
        asleepCount = 0;
      }

      if (asleepCount === 3) {
        firstAttackerStatutStateVariableList.isFirstAttackerAsleep = false;
        firstAttacker.primaryStatut = "normal";
        openDialogueWhenPokemonWakeUp(firstAttacker);
        asleepCount = 0;
      }
      break;

    case "normal":
      firstAttackerStatutStateVariableList.isFirstAttackerParalyzed = false;
      firstAttackerStatutStateVariableList.isFirstAttackerFrozen = false;
      firstAttackerStatutStateVariableList.isFirstAttackerAsleep = false;
      break;
  }
}
