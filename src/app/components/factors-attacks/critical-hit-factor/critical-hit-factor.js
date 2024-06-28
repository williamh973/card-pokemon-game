import { isCriticalHitBoostedByFocusEnergy } from "../increase-factors-attacks/critical-hit-increase-factors-attacks/critical-hit-increase-focus-energy-second-attack.js";
import { openDialogueWhenPokemonMakesCriticalHit } from "../../dialogue-fight.js";

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
    firstAttacker.name === "Scarabrute"
  ) {
    randomNumber = Math.floor(Math.random() * 128) + 1;
  }
}

export let criticalHitDamageIncreaseRate;

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

    criticalHitDamageIncreaseRate =
      (2 * firstAttacker.level + 5) / (firstAttacker.level + 5);
    return criticalHitDamageIncreaseRate;
  } else {
    return 1;
  }
}
