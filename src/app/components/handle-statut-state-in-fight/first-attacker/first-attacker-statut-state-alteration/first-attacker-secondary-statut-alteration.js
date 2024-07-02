import { deseableProtectCapacity } from "../../../factors-attacks/protect-factors-attacks/protect-detect-capacity-actived.js";

import {
  openDialogueWhenPokemonConfused,
  openDialogueWhenPokemonHurtByConfusing,
  openDialogueWhenPokemonNoLongerConfused,
  openDialogueWhenPokemonHurtsByCurse,
} from "../../../dialogue-battle.js";

let confusingCount = 0;
let randomNumber = Math.random();

export const firstAttackerSecondaryStatutStateVariableList = {
  isFirstAttackerConfusing: false,
  isFirstAttackerScared: false,
};

export const firstAttackerSecondaryStatutConfusingAlteration =
  function firstAttackerSecondaryStatutConfusingAlteration(firstAttacker) {
    switch (firstAttacker.secondaryStatut.isConfused) {
      case true:
        confusingCount++;

        randomNumber = Math.random();

        if (randomNumber <= 0.5) {
          firstAttackerSecondaryStatutStateVariableList.isFirstAttackerConfusing = true;
          openDialogueWhenPokemonConfused(firstAttacker);
          openDialogueWhenPokemonHurtByConfusing(firstAttacker);
          deseableProtectCapacity();

          let percentage = 10;
          let decreaseValue = (percentage / 100) * firstAttacker.stats.hpMax;
          const newDecreaseValue = Math.round(decreaseValue);

          firstAttacker.stats.hp -= newDecreaseValue;
        } else {
          openDialogueWhenPokemonConfused(firstAttacker);
          firstAttackerSecondaryStatutStateVariableList.isFirstAttackerConfusing = false;
        }

        if (confusingCount === 4) {
          openDialogueWhenPokemonNoLongerConfused(firstAttacker);
          firstAttackerSecondaryStatutStateVariableList.isFirstAttackerConfusing = false;
          firstAttacker.secondaryStatut.isConfused = false;

          if (
            !firstAttacker.secondaryStatut.isConfused &&
            !firstAttacker.secondaryStatut.isCursed &&
            !firstAttacker.secondaryStatut.isScared
          ) {
            firstAttacker.secondaryStatut.isNormal = true;
          } else {
            firstAttacker.secondaryStatut.isNormal = false;
          }

          confusingCount = 0;
        }
        break;
    }
  };

export const firstAttackerSecondaryStatutScaredAlteration =
  function firstAttackerSecondaryStatutScaredAlteration(firstAttacker) {
    if (firstAttacker.secondaryStatut.isScared) {
      return (firstAttackerSecondaryStatutStateVariableList.isFirstAttackerScared = true);
    }
  };

export const firstAttackerSecondaryStatutCursedAlteration =
  function firstAttackerSecondaryStatutCursedAlteration(firstAttacker) {
    switch (firstAttacker.secondaryStatut.isCursed) {
      case true:
        openDialogueWhenPokemonHurtsByCurse(firstAttacker);
        let percentage = 20;
        let decreaseValue = (percentage / 100) * firstAttacker.stats.hpMax;
        const newDecreaseValue = Math.round(decreaseValue);
        firstAttacker.stats.hp -= newDecreaseValue;
        break;
    }
  };
