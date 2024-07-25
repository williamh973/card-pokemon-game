import { openDialogueWhenPokemonMakesSpeedIncrease5pFactorAttack } from "../../../../../../components/battle-dialogues/dialogues/pokemon-makes-speed-increase-5p-factor-attack.dialogue.js";

const possibleAttacksList = [
  "Pouvoir Antique",
  "Vent Argenté",
  "Vent Mauvais",
  "Danse Draco",
  "Vent Arrière",
];

export async function speedIncrease5pFactorAttack(
  firstAttacker,
  firstAttackerAttack
) {
  if (possibleAttacksList.includes(firstAttackerAttack.name)) {
    await openDialogueWhenPokemonMakesSpeedIncrease5pFactorAttack(
      firstAttacker
    );
    const increasingValue = 5;
    const newSpeedValue = (firstAttacker.stats.speed += increasingValue);
    return newSpeedValue;
  }
}
