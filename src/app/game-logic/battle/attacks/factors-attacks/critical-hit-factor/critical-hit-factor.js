import { isCriticalHitBoostedByFocusEnergy } from "../../../attacks/factors-attacks/increase-factors-attacks/critical-hit-increase-factors-attacks/critical-hit-increase-focus-energy-attack.js";
import { openDialogueWhenPokemonMakesCriticalHit } from "../../../../../components/battle-dialogues/dialogues/pokemon-makes-critical-hit.dialogue.js";
import { attackStatesVariables } from "../../../../../shared/attacks/attack-variables.js";

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

export async function criticalHit(firstAttacker, firstAttackerAttack) {
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

  if (
    randomNumber < newSpeedValueForProbabilityIncreaseRate &&
    attackStatesVariables.currentStateAttack !== "ineffective" &&
    firstAttackerAttack.type !== "bonus" &&
    firstAttackerAttack.type !== "status"
  ) {
    let criticalHitDamageIncreaseRate =
      (2 * firstAttacker.level + 5) / (firstAttacker.level + 5);

    await openDialogueWhenPokemonMakesCriticalHit();
    return criticalHitDamageIncreaseRate;
  } else if (
    randomNumber < newSpeedValueForProbabilityIncreaseRate &&
    attackStatesVariables.currentStateAttack === "ineffective" &&
    firstAttackerAttack.type === "bonus" &&
    firstAttackerAttack.type === "status"
  ) {
    return 1;
  } else {
    return 1;
  }
}
