import { openDialogueWhenPokemonCriticalHitBoostedByFocusEnergy } from "../../../../../../components/battle-dialogues/dialogues/pokemon-critical-hit-boosted-by-focus-energy.dialogue.js";
import { openDialogueWhenPokemonCriticalHitAlreadyBoostedByFocusEnergy } from "../../../../../../components/battle-dialogues/dialogues/pokemon-critical-hit-already-boosted-by-focus-energy.dialogue.js";
import { handleDelayAnimationAttack } from "../../../damages-attacks/pokemon-makes-attack/calculate-damages-attacks/check-animation-possible/handle-delay-attack.js";

export let isCriticalHitBoostedByFocusEnergy = false;
const possibleAttacksList = ["Puissance"];
const possiblePokemonsList = ["Scarabrute"];

export async function criticalHitIncreaseByFocusEnergyAttack(
  firstAttacker,
  secondAttacker,
  firstAttackerAttack
) {
  if (
    possibleAttacksList.includes(firstAttackerAttack.name) &&
    possiblePokemonsList.includes(firstAttacker.name) &&
    !isCriticalHitBoostedByFocusEnergy
  ) {
    await handleDelayAnimationAttack(firstAttacker, secondAttacker);
    await openDialogueWhenPokemonCriticalHitBoostedByFocusEnergy(firstAttacker);
    isCriticalHitBoostedByFocusEnergy = true;
  } else if (
    possibleAttacksList.includes(firstAttackerAttack.name) &&
    possiblePokemonsList.includes(firstAttacker.name) &&
    isCriticalHitBoostedByFocusEnergy
  ) {
    await openDialogueWhenPokemonCriticalHitAlreadyBoostedByFocusEnergy(
      firstAttacker
    );
  }
}
