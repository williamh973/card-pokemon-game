import { openDialogueWhenPokemonCriticalHitBoostedByFocusEnergy } from "../../../../../../components/battle-dialogues/dialogues/pokemon-critical-hit-boosted-by-focus-energy.dialogue.js";
import { openDialogueWhenPokemonCriticalHitAlreadyBoostedByFocusEnergy } from "../../../../../../components/battle-dialogues/dialogues/pokemon-critical-hit-already-boosted-by-focus-energy.dialogue.js";
import { handleDelayAnimationAttack } from "../../../../animations/animations-attacks/handle-animation-for-dream-eater-attack.js";

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
    await openDialogueWhenPokemonCriticalHitBoostedByFocusEnergy(firstAttacker);
    await handleDelayAnimationAttack(firstAttacker, secondAttacker);
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
