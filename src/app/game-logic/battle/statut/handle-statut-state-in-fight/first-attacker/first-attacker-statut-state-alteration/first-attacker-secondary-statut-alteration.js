import { deseableProtectCapacity } from "../../../factors-attacks/protect-factors-attacks/protect-detect-capacity-actived.js";
import { openDialogueWhenPokemonConfusedStatut } from "../../../../../../components/battle-dialogues/dialogues/pokemon-confused-statut.dialogue.js";
import { openDialogueWhenPokemonHurtByConfusing } from "../../../../../../components/battle-dialogues/dialogues/pokemon-hurt-by-confusing.js";
import { openDialogueWhenPokemonNoLongerConfused } from "../../../../../../components/battle-dialogues/dialogues/pokemon-no-longer-confused.js";
import { openDialogueWhenPokemonHurtsByCurse } from "../../../../../../components/battle-dialogues/dialogues/pokemon-hurts-by-curse.js";
import { pokemonVariables } from "../../../../../../shared/pokemon/pokemon-variables.js";

let confusingCount = 0;
let randomNumber = Math.random();

export function firstAttackerSecondaryStatutConfusingAlteration(firstAttacker) {
  switch (firstAttacker.secondaryStatut.isConfused) {
    case true:
      confusingCount++;

      randomNumber = Math.random();

      if (randomNumber <= 0.5) {
        pokemonVariables.isFirstAttackerConfusing = true;
        openDialogueWhenPokemonConfusedStatut(firstAttacker);
        openDialogueWhenPokemonHurtByConfusing(firstAttacker);
        deseableProtectCapacity();

        let percentage = 10;
        let decreaseValue = (percentage / 100) * firstAttacker.stats.hpMax;
        const newDecreaseValue = Math.round(decreaseValue);

        firstAttacker.stats.hp -= newDecreaseValue;
      } else {
        openDialogueWhenPokemonConfusedStatut(firstAttacker);
        pokemonVariables.isFirstAttackerConfusing = false;
      }

      if (confusingCount === 4) {
        openDialogueWhenPokemonNoLongerConfused(firstAttacker);
        pokemonVariables.isFirstAttackerConfusing = false;
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
}

export function firstAttackerSecondaryStatutScaredAlteration(firstAttacker) {
  if (firstAttacker.secondaryStatut.isScared) {
    return (pokemonVariables.isFirstAttackerScared = true);
  }
}

export function firstAttackerSecondaryStatutCursedAlteration(firstAttacker) {
  switch (firstAttacker.secondaryStatut.isCursed) {
    case true:
      openDialogueWhenPokemonHurtsByCurse(firstAttacker);
      let percentage = 20;
      let decreaseValue = (percentage / 100) * firstAttacker.stats.hpMax;
      const newDecreaseValue = Math.round(decreaseValue);
      firstAttacker.stats.hp -= newDecreaseValue;
      break;
  }
}
