import { openDialogueWhenPokemonCriticalHitBoostedByFocusEnergy } from "../../../../../../components/battle-dialogues/dialogues/pokemon-critical-hit-boosted-by-focus-energy.dialogue.js";
import { openDialogueWhenPokemonCriticalHitAlreadyBoostedByFocusEnergy } from "../../../../../../components/battle-dialogues/dialogues/pokemon-critical-hit-already-boosted-by-focus-energy.dialogue.js";
import { pokemonVariables } from "../../../../../../shared/pokemon/pokemon-variables.js";

export let isCriticalHitBoostedByFocusEnergy = false;
const possibleAttacksList = ["Puissance"];
const possiblePokemonsList = ["Scarabrute"];

export function criticalHitIncreaseByFocusEnergyAttack(
  firstAttacker,
  firstAttackerAttack
) {
  if (
    possibleAttacksList.includes(firstAttackerAttack.name) &&
    possiblePokemonsList.includes(firstAttacker.name) &&
    pokemonVariables.isFirstAttackActive &&
    !isCriticalHitBoostedByFocusEnergy
  ) {
    openDialogueWhenPokemonCriticalHitBoostedByFocusEnergy(firstAttacker);
    isCriticalHitBoostedByFocusEnergy = true;
  } else if (
    possibleAttacksList.includes(firstAttackerAttack.name) &&
    possiblePokemonsList.includes(firstAttacker.name) &&
    pokemonVariables.isFirstAttackActive &&
    isCriticalHitBoostedByFocusEnergy
  ) {
    pokemonAlreadyBoostedByFocusEnergy(firstAttacker);
  }
}

function pokemonAlreadyBoostedByFocusEnergy(firstAttacker) {
  if (isCriticalHitBoostedByFocusEnergy) {
    openDialogueWhenPokemonCriticalHitAlreadyBoostedByFocusEnergy(
      firstAttacker
    );
  }
}
