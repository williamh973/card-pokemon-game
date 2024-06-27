import { deseableProtectCapacity } from "../../../factors-attacks/protect-factors-attacks/protect-detect-capacity-actived.js";

import {
  openDialogueWhenPokemonBlockedByParalyzedStatut,
  openDialogueWhenPokemonBlockedByFrozenStatut,
  openDialogueWhenPokemonHasThawedStatut,
  openDialogueWhenPokemonAttacksDespiteParalyzedStatut,
  openDialogueWhenPokemonIsAsleepStatut,
  openDialogueWhenPokemonWakeUp,
} from "../../../dialogue-fight.js";

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

export const firstAttackerPrimaryStatutAlteration =
  function firstAttackerPrimaryStatutAlteration(firstAttacker) {
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
  };
