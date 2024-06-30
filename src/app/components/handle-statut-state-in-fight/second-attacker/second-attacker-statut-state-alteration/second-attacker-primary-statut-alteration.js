import { deseableProtectCapacity } from "../../../factors-attacks/protect-factors-attacks/protect-detect-capacity-actived.js";

import {
  openDialogueWhenPokemonBlockedByParalyzedStatut,
  openDialogueWhenPokemonBlockedByFrozenStatut,
  openDialogueWhenPokemonHasThawedStatut,
  openDialogueWhenPokemonAttacksDespiteParalyzedStatut,
  openDialogueWhenPokemonIsAsleepStatut,
  openDialogueWhenPokemonWakeUp,
} from "../../../dialogue-fight.js";

let asleepCount = 0;
let randomNumber = Math.random();

function hpDeductionProcess(secondAttacker) {
  let percentage = 12.5;
  let decreaseValue = (percentage / 100) * secondAttacker.stats.hpMax;
  const newDecreaseValue = Math.round(decreaseValue);
  secondAttacker.stats.hp -= newDecreaseValue;
  return secondAttacker.stats.hp;
}

export let secondAttackerStatutStateVariableList = {
  isSecondAttackerFrozen: false,
  isSecondAttackerParalyzed: false,
  isSecondAttackerAsleep: false,
};

export const secondAttackerPrimaryStatutAlteration =
  function secondAttackerPrimaryStatutAlteration(secondAttacker) {
    switch (secondAttacker.primaryStatut) {
      case "burning":
        hpDeductionProcess(secondAttacker);
        break;

      case "poisoned":
        hpDeductionProcess(secondAttacker);
        break;

      case "paralyzed":
        randomNumber = Math.random();

        if (randomNumber <= 0.25) {
          secondAttackerStatutStateVariableList.isSecondAttackerParalyzed = true;
          openDialogueWhenPokemonBlockedByParalyzedStatut(secondAttacker);
          deseableProtectCapacity();
        } else {
          secondAttackerStatutStateVariableList.isSecondAttackerParalyzed = false;
          openDialogueWhenPokemonAttacksDespiteParalyzedStatut(secondAttacker);
        }
        break;

      case "frozen":
        randomNumber = Math.random();

        if (randomNumber <= 0.2) {
          secondAttackerStatutStateVariableList.isSecondAttackerFrozen = false;
          secondAttacker.primaryStatut = "normal";
          openDialogueWhenPokemonHasThawedStatut(secondAttacker);
        } else {
          secondAttackerStatutStateVariableList.isSecondAttackerFrozen = true;
          openDialogueWhenPokemonBlockedByFrozenStatut(secondAttacker);
          deseableProtectCapacity();
        }
        break;

      case "asleep":
        randomNumber = Math.random();

        if (randomNumber <= 0.5) {
          secondAttackerStatutStateVariableList.isSecondAttackerAsleep = true;
          openDialogueWhenPokemonIsAsleepStatut(secondAttacker);
          deseableProtectCapacity();
          asleepCount++;
        } else {
          secondAttackerStatutStateVariableList.isSecondAttackerAsleep = false;
          secondAttacker.primaryStatut = "normal";
          openDialogueWhenPokemonWakeUp(secondAttacker);
          asleepCount = 0;
        }

        if (asleepCount === 3) {
          secondAttackerStatutStateVariableList.isSecondAttackerAsleep = false;
          secondAttacker.primaryStatut = "normal";
          openDialogueWhenPokemonWakeUp(secondAttacker);
          asleepCount = 0;
        }
        break;

      case "normal":
        secondAttackerStatutStateVariableList.isSecondAttackerParalyzed = false;
        secondAttackerStatutStateVariableList.isSecondAttackerFrozen = false;
        secondAttackerStatutStateVariableList.isSecondAttackerAsleep = false;
        break;
    }
  };