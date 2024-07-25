import { openDialogueWhenPokemonMakesDefenseIncrease10pFactorAttack } from "../../../../../../../components/battle-dialogues/dialogues/pokemon-makes-defense-increase-10p-factor-attack.dialogue.js";

const possibleAttacksList = [
  "Accupression",
  "Bouclier",
  "Mur de Fer",
  "Acidarmure",
];

export async function defenseIncrease10pFactorAttack(
  firstAttacker,
  firstAttackerAttack
) {
  if (possibleAttacksList.includes(firstAttackerAttack.name)) {
    const increasingValue = 10;
    const newDefenseValue = (firstAttacker.stats.defense += increasingValue);
    await openDialogueWhenPokemonMakesDefenseIncrease10pFactorAttack(
      firstAttacker
    );
    return newDefenseValue;
  }
}
