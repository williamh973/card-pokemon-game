import { deseableProtectCapacity } from "../../../factors-attacks/protect-factors-attacks/protect-detect-capacity-actived.js";
import { openDialogueWhenPokemonConfusedStatut } from "../../../battle-dialogues/dialogues/pokemon-confused-statut.dialogue.js";
import { openDialogueWhenPokemonHurtByConfusing } from "../../../battle-dialogues/dialogues/pokemon-hurt-by-confusing.js";
import { openDialogueWhenPokemonNoLongerConfused } from "../../../battle-dialogues/dialogues/pokemon-no-longer-confused.js";
import { openDialogueWhenPokemonHurtsByCurse } from "../../../battle-dialogues/dialogues/pokemon-hurts-by-curse.js";
let confusingCount = 0;
let randomNumber = Math.random();

export let secondAttackerSecondaryStatutStateVariableList = {
  isSecondAttackerConfusing: false,
  isSecondAttackerScared: false,
};

export function secondAttackerSecondaryStatutConfusingAlteration(
  secondAttacker
) {
  switch (secondAttacker.secondaryStatut.isConfused) {
    case true:
      confusingCount++;
      randomNumber = Math.random();

      if (randomNumber <= 0.5) {
        secondAttackerSecondaryStatutStateVariableList.isSecondAttackerConfusing = true;
        openDialogueWhenPokemonConfusedStatut(secondAttacker);
        openDialogueWhenPokemonHurtByConfusing(secondAttacker);
        deseableProtectCapacity();

        let percentage = 10;
        let decreaseValue = (percentage / 100) * secondAttacker.stats.hpMax;
        const newDecreaseValue = Math.round(decreaseValue);

        secondAttacker.stats.hp -= newDecreaseValue;
      } else {
        openDialogueWhenPokemonConfusedStatut(secondAttacker);
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
}

export function secondAttackerSecondaryStatutScaredAlteration(secondAttacker) {
  if (secondAttacker.secondaryStatut.isScared) {
    return (secondAttackerSecondaryStatutStateVariableList.isSecondAttackerScared = true);
  }
}

export function secondAttackerSecondaryStatutCursedAlteration(secondAttacker) {
  switch (secondAttacker.secondaryStatut.isCursed) {
    case true:
      openDialogueWhenPokemonHurtsByCurse(secondAttacker);
      let percentage = 20;
      let decreaseValue = (percentage / 100) * secondAttacker.stats.hpMax;
      const newDecreaseValue = Math.round(decreaseValue);
      secondAttacker.stats.hp -= newDecreaseValue;
      break;
  }
}
