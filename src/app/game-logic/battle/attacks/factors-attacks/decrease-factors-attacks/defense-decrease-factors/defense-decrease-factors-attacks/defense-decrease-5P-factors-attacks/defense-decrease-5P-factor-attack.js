import { openDialogueWhenPokemonMakesDefenseDecrease5pFactorAttack } from "../../../../../../../../components/battle-dialogues/dialogues/pokemon-makes-defense-decrease-5p-factor-attack.dialogue.js";

const possibleAttacksList = ["Mimi-Queue", "Hurlement"];

export async function defenseDecrease5pFactorAttack(
  secondAttacker,
  firstAttackerAttack
) {
  if (possibleAttacksList.includes(firstAttackerAttack.name)) {
    const decreasingValue = 5;
    const newDefenseValue = (secondAttacker.stats.defense -= decreasingValue);
    await openDialogueWhenPokemonMakesDefenseDecrease5pFactorAttack(
      secondAttacker
    );
    return newDefenseValue;
  }
}
