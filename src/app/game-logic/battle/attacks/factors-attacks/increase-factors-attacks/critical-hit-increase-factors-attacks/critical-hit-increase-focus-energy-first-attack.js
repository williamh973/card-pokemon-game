import { openDialogueWhenPokemonCriticalHitBoostedByFocusEnergy } from "../../../battle-dialogues/dialogues/pokemon-critical-hit-boosted-by-focus-energy.dialogue.js";
import { openDialogueWhenPokemonCriticalHitAlreadyBoostedByFocusEnergy } from "../../../battle-dialogues/dialogues/pokemon-critical-hit-already-boosted-by-focus-energy.dialogue.js";

export let isCriticalHitBoostedByFocusEnergy = false;

export const criticalHitIncreaseByFocusEnergyForFirstAttack =
  function criticalHitIncreaseByFocusEnergyForFirstAttack(
    pokemon,
    isFirstAttackActive
  ) {
    if (
      pokemon.firstAttack.name === "Puissance" &&
      pokemon.name === "Scarabrute" &&
      isFirstAttackActive &&
      !isCriticalHitBoostedByFocusEnergy
    ) {
      openDialogueWhenPokemonCriticalHitBoostedByFocusEnergy(pokemon);
      isCriticalHitBoostedByFocusEnergy = true;
    } else if (
      pokemon.firstAttack.name === "Puissance" &&
      pokemon.name === "Scarabrute" &&
      isFirstAttackActive &&
      isCriticalHitBoostedByFocusEnergy
    ) {
      pokemonAlreadyBoostedByFocusEnergy(pokemon);
    }
  };

function pokemonAlreadyBoostedByFocusEnergy(pokemon) {
  if (isCriticalHitBoostedByFocusEnergy) {
    openDialogueWhenPokemonCriticalHitAlreadyBoostedByFocusEnergy(pokemon);
  }
}
