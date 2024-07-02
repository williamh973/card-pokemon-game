import { openDialogueWhenPokemonMakesDefenseIncrease10pFactorAttack } from "../../../../battle-dialogues/dialogues/dialogue-battle.js";

export const defenseIncrease10pFactorForSecondAttack =
  function defenseIncrease10pFactorForSecondAttack(
    pokemon,
    isSecondAttackActive
  ) {
    if (
      (pokemon.secondAttack.name === "Accupression" ||
        pokemon.secondAttack.name === "Bouclier" ||
        pokemon.secondAttack.name === "Mur de Fer" ||
        pokemon.secondAttack.name === "Acidarmure") &&
      isSecondAttackActive
    ) {
      const increasingValue = 10;
      const newDefenseValue = (pokemon.stats.defense += increasingValue);
      openDialogueWhenPokemonMakesDefenseIncrease10pFactorAttack(pokemon);
      return newDefenseValue;
    }
  };
