import { openDialogueWhenPokemonCriticalHitBoostedByFocusEnergy } from "../../../../../../components/battle-dialogues/dialogues/pokemon-critical-hit-boosted-by-focus-energy.dialogue.js";
import { openDialogueWhenPokemonCriticalHitAlreadyBoostedByFocusEnergy } from "../../../../../../components/battle-dialogues/dialogues/pokemon-critical-hit-already-boosted-by-focus-energy.dialogue.js";

export let isCriticalHitBoostedByFocusEnergy = false;

export const criticalHitIncreaseByFocusEnergyForSecondAttack =
  function criticalHitIncreaseByFocusEnergyForSecondAttack(
    pokemon,
    isSecondAttackActive
  ) {
    if (
      pokemon.secondAttack.name === "Puissance" &&
      pokemon.name === "Scarabrute" &&
      isSecondAttackActive &&
      !isCriticalHitBoostedByFocusEnergy
    ) {
      openDialogueWhenPokemonCriticalHitBoostedByFocusEnergy(pokemon);
      isCriticalHitBoostedByFocusEnergy = true;
    } else if (
      pokemon.secondAttack.name === "Puissance" &&
      pokemon.name === "Scarabrute" &&
      isSecondAttackActive &&
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
