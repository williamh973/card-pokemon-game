import { disabledProtectCapacity } from "../../../../attacks/factors-attacks/protect-factors-attacks/protect-detect-capacity-actived.js";
import { openDialogueWhenPokemonConfusedStatut } from "../../../../../../components/battle-dialogues/dialogues/pokemon-confused-statut.dialogue.js";
import { openDialogueWhenPokemonHurtByConfusing } from "../../../../../../components/battle-dialogues/dialogues/pokemon-hurt-by-confusing.js";
import { openDialogueWhenPokemonNoLongerConfused } from "../../../../../../components/battle-dialogues/dialogues/pokemon-no-longer-confused.js";
import { openDialogueWhenPokemonHurtsByCurse } from "../../../../../../components/battle-dialogues/dialogues/pokemon-hurts-by-curse.js";
import { pokemonVariables } from "../../../../../../shared/pokemon/pokemon-variables.js";

let confusingCount = 0;
let randomNumber = Math.random();

export function secondAttackerSecondaryStatutConfusingAlteration(
  secondAttacker
) {
  switch (secondAttacker.secondaryStatut.isConfused) {
    case true:
      confusingCount++;
      randomNumber = Math.random();

      if (randomNumber <= 0.5) {
        pokemonVariables.isSecondAttackerConfusing = true;
        openDialogueWhenPokemonConfusedStatut(secondAttacker);
        openDialogueWhenPokemonHurtByConfusing(secondAttacker);
        disabledProtectCapacity();

        let percentage = 10;
        let decreaseValue = (percentage / 100) * secondAttacker.stats.hpMax;
        const newDecreaseValue = Math.round(decreaseValue);

        secondAttacker.stats.hp -= newDecreaseValue;
      } else {
        openDialogueWhenPokemonConfusedStatut(secondAttacker);
        pokemonVariables.isSecondAttackerConfusing = false;
      }

      if (confusingCount === 4) {
        openDialogueWhenPokemonNoLongerConfused(secondAttacker);
        pokemonVariables.isSecondAttackerConfusing = false;
        secondAttacker.secondaryStatut.isConfused = false;
        secondAttacker.secondaryStatut.isNormal = true;
        confusingCount = 0;
      }
      break;
  }
}

export function secondAttackerSecondaryStatutScaredAlteration(secondAttacker) {
  if (secondAttacker.secondaryStatut.isScared) {
    return (pokemonVariables.isSecondAttackerScared = true);
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
