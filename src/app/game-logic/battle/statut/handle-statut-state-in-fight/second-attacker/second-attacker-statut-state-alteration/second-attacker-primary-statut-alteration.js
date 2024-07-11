import { deseableProtectCapacity } from "../../../../attacks/factors-attacks/protect-factors-attacks/protect-detect-capacity-actived.js";

import { openDialogueWhenPokemonBlockedByParalyzedStatut } from "../../../../../../components/battle-dialogues/dialogues/pokemon-blocked-by-paralyzed-statut.dialogue.js";
import { openDialogueWhenPokemonAttacksDespiteParalyzedStatut } from "../../../../../../components/battle-dialogues/dialogues/pokemon-attacks-despite-paralyzed-statut.dialogue.js";
import { openDialogueWhenPokemonHasThawedStatut } from "../../../../../../components/battle-dialogues/dialogues/pokemon-has-thawed-statut.dialogue.js";
import { openDialogueWhenPokemonBlockedByFrozenStatut } from "../../../../../../components/battle-dialogues/dialogues/pokemon-blocked-by-frozen-statut.dialogue.js";
import { openDialogueWhenPokemonIsAsleepStatut } from "../../../../../../components/battle-dialogues/dialogues/pokemon-has-asleep-statut.dialogue.js";
import { openDialogueWhenPokemonWakeUp } from "../../../../../../components/battle-dialogues/dialogues/pokemon-wake-up.dialogue.js";
import { pokemonVariables } from "../../../../../../shared/pokemon/pokemon-variables.js";

let asleepCount = 0;
let randomNumber = Math.random();

function hpDeductionProcess(secondAttacker) {
  let percentage = 12.5;
  let decreaseValue = (percentage / 100) * secondAttacker.stats.hpMax;
  const newDecreaseValue = Math.round(decreaseValue);
  secondAttacker.stats.hp -= newDecreaseValue;
  return secondAttacker.stats.hp;
}

export function secondAttackerPrimaryStatutAlteration(secondAttacker) {
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
        pokemonVariables.isSecondAttackerParalyzed = true;
        openDialogueWhenPokemonBlockedByParalyzedStatut(secondAttacker);
        deseableProtectCapacity();
      } else {
        pokemonVariables.isSecondAttackerParalyzed = false;
        openDialogueWhenPokemonAttacksDespiteParalyzedStatut(secondAttacker);
      }
      break;

    case "frozen":
      randomNumber = Math.random();

      if (randomNumber <= 0.2) {
        pokemonVariables.isSecondAttackerFrozen = false;
        secondAttacker.primaryStatut = "normal";
        openDialogueWhenPokemonHasThawedStatut(secondAttacker);
      } else {
        pokemonVariables.isSecondAttackerFrozen = true;
        openDialogueWhenPokemonBlockedByFrozenStatut(secondAttacker);
        deseableProtectCapacity();
      }
      break;

    case "asleep":
      randomNumber = Math.random();

      if (randomNumber <= 0.5) {
        pokemonVariables.isSecondAttackerAsleep = true;
        openDialogueWhenPokemonIsAsleepStatut(secondAttacker);
        deseableProtectCapacity();
        asleepCount++;
      } else {
        pokemonVariables.isSecondAttackerAsleep = false;
        secondAttacker.primaryStatut = "normal";
        openDialogueWhenPokemonWakeUp(secondAttacker);
        asleepCount = 0;
      }

      if (asleepCount === 3) {
        pokemonVariables.isSecondAttackerAsleep = false;
        secondAttacker.primaryStatut = "normal";
        openDialogueWhenPokemonWakeUp(secondAttacker);
        asleepCount = 0;
      }
      break;

    case "normal":
      pokemonVariables.isSecondAttackerParalyzed = false;
      pokemonVariables.isSecondAttackerFrozen = false;
      pokemonVariables.isSecondAttackerAsleep = false;
      break;
  }
}
