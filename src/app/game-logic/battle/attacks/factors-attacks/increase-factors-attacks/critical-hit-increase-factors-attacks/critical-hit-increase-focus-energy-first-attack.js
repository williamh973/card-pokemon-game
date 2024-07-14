import { openDialogueWhenPokemonCriticalHitBoostedByFocusEnergy } from "../../../../../../components/battle-dialogues/dialogues/pokemon-critical-hit-boosted-by-focus-energy.dialogue.js";
import { openDialogueWhenPokemonCriticalHitAlreadyBoostedByFocusEnergy } from "../../../../../../components/battle-dialogues/dialogues/pokemon-critical-hit-already-boosted-by-focus-energy.dialogue.js";
import { pokemonVariables } from "../../../../../../shared/pokemon/pokemon-variables.js";

export let isCriticalHitBoostedByFocusEnergy = false;

export function criticalHitIncreaseByFocusEnergyForFirstAttack(pokemon) {
  if (
    pokemon.firstAttack.name === "Puissance" &&
    pokemon.name === "Scarabrute" &&
    pokemonVariables.isFirstAttackActive &&
    !isCriticalHitBoostedByFocusEnergy
  ) {
    openDialogueWhenPokemonCriticalHitBoostedByFocusEnergy(pokemon);
    isCriticalHitBoostedByFocusEnergy = true;
  } else if (
    pokemon.firstAttack.name === "Puissance" &&
    pokemon.name === "Scarabrute" &&
    pokemonVariables.isFirstAttackActive &&
    isCriticalHitBoostedByFocusEnergy
  ) {
    pokemonAlreadyBoostedByFocusEnergy(pokemon);
  }
}

function pokemonAlreadyBoostedByFocusEnergy(pokemon) {
  if (isCriticalHitBoostedByFocusEnergy) {
    openDialogueWhenPokemonCriticalHitAlreadyBoostedByFocusEnergy(pokemon);
  }
}
