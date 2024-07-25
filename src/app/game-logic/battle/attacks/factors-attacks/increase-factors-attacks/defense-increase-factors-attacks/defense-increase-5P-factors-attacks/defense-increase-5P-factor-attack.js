import { openDialogueWhenPokemonMakesDefenseIncrease5pFactorAttack } from "../../../../../../../components/battle-dialogues/dialogues/pokemon-makes-defense-increase-5p-factor-attack.dialogue.js";

const possibleAttacksList = [
  "Pouvoir Antique",
  "Gonflette",
  "Force Cosmik",
  "Malediction",
  "Appel Defense",
  "Boul'Armure",
  "Armure",
  "Aile d'Acier",
  "Stockage",
  "Vent Argenté",
  "Vent Mauvais",
  "Repli",
  "Coud'Krane",
];

export async function defenseIncrease5pFactorAttack(
  firstAttacker,
  firstAttackerAttack
) {
  if (possibleAttacksList.includes(firstAttackerAttack.name)) {
    const increasingValue = 5;
    const newDefenseValue = (firstAttacker.stats.defense += increasingValue);
    await openDialogueWhenPokemonMakesDefenseIncrease5pFactorAttack(
      firstAttacker
    );
    return newDefenseValue;
  }
}
