import { openDialogueWhenPokemonMakesDefenseIncrease10pFactorAttack } from '../../../dialogue-fight.js';


export const defenseIncrease10pFactorForFirstAttack = function defenseIncrease10pFactorForFirstAttack(
    pokemon
  ) {

    if (
        pokemon.firstAttack.name === "Accupression" ||
        pokemon.firstAttack.name === 'Bouclier' ||
        pokemon.firstAttack.name === "Mur de Fer" ||
        pokemon.firstAttack.name === 'Acidarmure'
        ) {
       const increasingValue = 10;
       const newDefenseValue = pokemon.stats.defense += increasingValue;
       openDialogueWhenPokemonMakesDefenseIncrease10pFactorAttack(pokemon);
       return newDefenseValue;
    } else {
       return pokemon.stats.defense;
    };
        
};


export const defenseIncrease10pFactorForSecondAttack = function defenseIncrease10pFactorForSecondAttack(
  pokemon
  ) {

    if (
      pokemon.secondAttack.name === "Accupression" ||
      pokemon.secondAttack.name === 'Bouclier' ||
      pokemon.secondAttack.name === "Mur de Fer" ||
      pokemon.secondAttack.name === 'Acidarmure'
        ) {
       const increasingValue = 10;
       const newDefenseValue = pokemon.stats.defense += increasingValue;
       openDialogueWhenPokemonMakesDefenseIncrease10pFactorAttack(pokemon);
       return newDefenseValue;
    } else {
       return pokemon.stats.defense;
    };
        
};
