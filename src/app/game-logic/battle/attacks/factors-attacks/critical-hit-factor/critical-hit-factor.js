import { isCriticalHitBoostedByFocusEnergy } from "../../../attacks/factors-attacks/increase-factors-attacks/critical-hit-increase-factors-attacks/critical-hit-increase-focus-energy-attack.js";
import { openDialogueWhenPokemonMakesCriticalHit } from "../../../../../components/battle-dialogues/dialogues/pokemon-makes-critical-hit.dialogue.js";

const possiblePokemonList = ["Scarabrute"];

function roundToNearestEven(number) {
  return Math.round(number / 2) * 2;
}

function increaseCriticalHitProbabilityWhenFocusEnergyUsed(
  firstAttacker,
  isCriticalHitBoostedByFocusEnergy,
  randomNumber
) {
  if (
    isCriticalHitBoostedByFocusEnergy &&
    possiblePokemonList.includes(firstAttacker.name)
  ) {
    randomNumber = Math.floor(Math.random() * 128) + 1;
  }
}

export function criticalHit(firstAttacker) {
  let speedValueRoundToNearestEven = roundToNearestEven(
    firstAttacker.stats.speed
  );
  let speedValueRoundToNearestEvenDividedByTwo =
    speedValueRoundToNearestEven / 2;

  let newSpeedValueForProbabilityIncreaseRate =
    speedValueRoundToNearestEvenDividedByTwo;

  let randomNumber = Math.floor(Math.random() * 256) + 1;

  increaseCriticalHitProbabilityWhenFocusEnergyUsed(
    firstAttacker,
    isCriticalHitBoostedByFocusEnergy,
    randomNumber
  );

  if (randomNumber < newSpeedValueForProbabilityIncreaseRate) {
    openDialogueWhenPokemonMakesCriticalHit();
    let criticalHitDamageIncreaseRate =
      (2 * firstAttacker.level + 5) / (firstAttacker.level + 5);
    return criticalHitDamageIncreaseRate;
  } else {
    return 1;
  }
}
