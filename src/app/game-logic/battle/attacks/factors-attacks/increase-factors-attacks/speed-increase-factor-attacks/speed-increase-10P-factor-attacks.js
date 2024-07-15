import { openDialogueWhenPokemonMakesSpeedIncrease10pFactorAttack } from "../../../../../../components/battle-dialogues/dialogues/pokemon-makes-speed-increase-10p-factor-attack.dialogue.js";

const possibleAttacksList = ["Accupression", "Hâte", "Accupression"];

export function speedIncrease10pFactorAttack(
  firstAttacker,
  firstAttackerAttack
) {
  if (possibleAttacksList.includes(firstAttackerAttack.name)) {
    openDialogueWhenPokemonMakesSpeedIncrease10pFactorAttack(firstAttacker);
    const increasingValue = 10;
    const newSpeedValue = (firstAttacker.stats.speed += increasingValue);
    return newSpeedValue;
  }
}
