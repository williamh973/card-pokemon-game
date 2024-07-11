import { openDialogueWhenPokemonMakesDefenseIncrease10pFactorAttack } from "../../../../../../../components/battle-dialogues/dialogues/pokemon-makes-defense-increase-10p-factor-attack.dialogue.js";

export function defenseIncrease10pFactorForFirstAttack(
  pokemon,
  isFirstAttackActive
) {
  if (
    (pokemon.firstAttack.name === "Accupression" ||
      pokemon.firstAttack.name === "Bouclier" ||
      pokemon.firstAttack.name === "Mur de Fer" ||
      pokemon.firstAttack.name === "Acidarmure") &&
    isFirstAttackActive
  ) {
    const increasingValue = 10;
    const newDefenseValue = (pokemon.stats.defense += increasingValue);
    openDialogueWhenPokemonMakesDefenseIncrease10pFactorAttack(pokemon);
    return newDefenseValue;
  }
}
