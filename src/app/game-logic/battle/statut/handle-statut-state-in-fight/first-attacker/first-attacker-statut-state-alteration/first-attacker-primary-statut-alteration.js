import { disabledProtectCapacity } from "../../../../attacks/factors-attacks/protect-factors-attacks/protect-detect-capacity-actived.js";

import { openDialogueWhenPokemonBlockedByParalyzedStatut } from "../../../../../../components/battle-dialogues/dialogues/pokemon-blocked-by-paralyzed-statut.dialogue.js";
import { openDialogueWhenPokemonAttacksDespiteParalyzedStatut } from "../../../../../../components/battle-dialogues/dialogues/pokemon-attacks-despite-paralyzed-statut.dialogue.js";
import { openDialogueWhenPokemonHasThawedStatut } from "../../../../../../components/battle-dialogues/dialogues/pokemon-has-thawed-statut.dialogue.js";
import { openDialogueWhenPokemonBlockedByFrozenStatut } from "../../../../../../components/battle-dialogues/dialogues/pokemon-blocked-by-frozen-statut.dialogue.js";
import { openDialogueWhenPokemonIsAsleepStatut } from "../../../../../../components/battle-dialogues/dialogues/pokemon-has-asleep-statut.dialogue.js";
import { openDialogueWhenPokemonWakeUp } from "../../../../../../components/battle-dialogues/dialogues/pokemon-wake-up.dialogue.js";
import { pokemonVariables } from "../../../../../../shared/pokemon/pokemon-variables.js";

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
        pokemonVariables.isFirstAttackerParalyzed = true;
        openDialogueWhenPokemonBlockedByParalyzedStatut(firstAttacker);
        disabledProtectCapacity();
      } else {
        pokemonVariables.isFirstAttackerParalyzed = false;
        openDialogueWhenPokemonAttacksDespiteParalyzedStatut(firstAttacker);
      }
      break;

    case "frozen":
      randomNumber = Math.random();

      if (randomNumber <= 0.2) {
        pokemonVariables.isFirstAttackerFrozen = false;
        firstAttacker.primaryStatut = "normal";
        openDialogueWhenPokemonHasThawedStatut(firstAttacker);
      } else {
        pokemonVariables.isFirstAttackerFrozen = true;
        openDialogueWhenPokemonBlockedByFrozenStatut(firstAttacker);
        disabledProtectCapacity();
      }
      break;

    case "asleep":
      randomNumber = Math.random();

      if (randomNumber <= 0.5) {
        pokemonVariables.isFirstAttackerAsleep = true;
        openDialogueWhenPokemonIsAsleepStatut(firstAttacker);
        disabledProtectCapacity();
        asleepCount++;
      } else {
        pokemonVariables.isFirstAttackerAsleep = false;
        firstAttacker.primaryStatut = "normal";
        openDialogueWhenPokemonWakeUp(firstAttacker);
        asleepCount = 0;
      }

      if (asleepCount === 3) {
        pokemonVariables.isFirstAttackerAsleep = false;
        firstAttacker.primaryStatut = "normal";
        openDialogueWhenPokemonWakeUp(firstAttacker);
        asleepCount = 0;
      }
      break;

    case "normal":
      pokemonVariables.isFirstAttackerParalyzed = false;
      pokemonVariables.isFirstAttackerFrozen = false;
      pokemonVariables.isFirstAttackerAsleep = false;
      break;
  }
}
