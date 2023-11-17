import { openDialogueWhenPokemonMakesDefenseIncrease5pFactorAttack } from '../../../../dialogue-fight.js';



export const defenseIncrease5pFactorForSecondAttack = 
function defenseIncrease5pFactorForSecondAttack(
  pokemon, isSecondAttackActive
  ) {

    if (
      (
      pokemon.secondAttack.name === "Pouvoir Antique" ||
      pokemon.secondAttack.name === 'Gonflette' ||
      pokemon.secondAttack.name === "Force Cosmik" ||
      pokemon.secondAttack.name === 'Malediction' ||
      pokemon.secondAttack.name === 'Appel Defense' ||
      pokemon.secondAttack.name === "Boul'Armure" ||
      pokemon.secondAttack.name === 'Armure' ||
      pokemon.secondAttack.name === "Aile d'Acier" ||
      pokemon.secondAttack.name === 'Stockage' ||
      pokemon.secondAttack.name === "Vent Argenté" ||
      pokemon.secondAttack.name === 'Vent Mauvais' ||
      pokemon.secondAttack.name === "Repli" ||
      pokemon.secondAttack.name === "Coud'Krane"
        ) && isSecondAttackActive
        ) {
       const increasingValue = 5;
       const newDefenseValue = pokemon.stats.defense += increasingValue;
       openDialogueWhenPokemonMakesDefenseIncrease5pFactorAttack(pokemon);
       return newDefenseValue;
    } else {
       return pokemon.stats.defense;
    };
        
};
