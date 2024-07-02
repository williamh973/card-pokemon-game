import { openDialogueWhenPokemonMakesDefenseIncrease10pFactorAttack } from "../../../../dialogue-battle.js";

export const defenseIncrease10pFactorForFirstAttack =
  function defenseIncrease10pFactorForFirstAttack(
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
  };
