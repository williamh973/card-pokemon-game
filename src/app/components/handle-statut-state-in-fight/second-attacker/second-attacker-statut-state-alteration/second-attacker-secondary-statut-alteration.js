import { deseableProtectCapacity } from "../../../factors-attacks/protect-factors-attacks/protect-detect-capacity-actived.js";

import {
  openDialogueWhenPokemonConfused,
  openDialogueWhenPokemonHurtByConfusing,
  openDialogueWhenPokemonNoLongerConfused,
  openDialogueWhenPokemonHurtsByCurse,
} from "../../../dialogue-battle.js";

let confusingCount = 0;
let randomNumber = Math.random();

export let secondAttackerSecondaryStatutStateVariableList = {
  isSecondAttackerConfusing: false,
  isSecondAttackerScared: false,
};

export const secondAttackerSecondaryStatutConfusingAlteration =
  function secondAttackerSecondaryStatutConfusingAlteration(secondAttacker) {
    switch (secondAttacker.secondaryStatut.isConfused) {
      case true:
        confusingCount++;
        randomNumber = Math.random();

        if (randomNumber <= 0.5) {
          secondAttackerSecondaryStatutStateVariableList.isSecondAttackerConfusing = true;
          openDialogueWhenPokemonConfused(secondAttacker);
          openDialogueWhenPokemonHurtByConfusing(secondAttacker);
          deseableProtectCapacity();

          let percentage = 10;
          let decreaseValue = (percentage / 100) * secondAttacker.stats.hpMax;
          const newDecreaseValue = Math.round(decreaseValue);

          secondAttacker.stats.hp -= newDecreaseValue;
        } else {
          openDialogueWhenPokemonConfused(secondAttacker);
          secondAttackerSecondaryStatutStateVariableList.isSecondAttackerConfusing = false;
        }

        if (confusingCount === 4) {
          openDialogueWhenPokemonNoLongerConfused(secondAttacker);
          secondAttackerSecondaryStatutStateVariableList.isSecondAttackerConfusing = false;
          secondAttacker.secondaryStatut.isConfused = false;
          secondAttacker.secondaryStatut.isNormal = true;
          confusingCount = 0;
        }
        break;
    }
  };

export const secondAttackerSecondaryStatutScaredAlteration =
  function secondAttackerSecondaryStatutScaredAlteration(secondAttacker) {
    if (secondAttacker.secondaryStatut.isScared) {
      return (secondAttackerSecondaryStatutStateVariableList.isSecondAttackerScared = true);
    }
  };

export const secondAttackerSecondaryStatutCursedAlteration =
  function secondAttackerSecondaryStatutCursedAlteration(secondAttacker) {
    switch (secondAttacker.secondaryStatut.isCursed) {
      case true:
        openDialogueWhenPokemonHurtsByCurse(secondAttacker);
        let percentage = 20;
        let decreaseValue = (percentage / 100) * secondAttacker.stats.hpMax;
        const newDecreaseValue = Math.round(decreaseValue);
        secondAttacker.stats.hp -= newDecreaseValue;
        break;
    }
  };
