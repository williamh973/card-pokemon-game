
import { openDialogueWhenPokemonMakesDefenseIncrease5pFactorAttack } from '../../../../dialogue-fight.js';

export const defenseIncrease5pFactorForFirstAttack = 
function defenseIncrease5pFactorForFirstAttack(
    pokemon, isFirstAttackActive
  ) {

    if (
      (
        pokemon.firstAttack.name === "Pouvoir Antique" ||
        pokemon.firstAttack.name === 'Gonflette' ||
        pokemon.firstAttack.name === "Force Cosmik" ||
        pokemon.firstAttack.name === 'Malediction' ||
        pokemon.firstAttack.name === 'Appel Defense' ||
        pokemon.firstAttack.name === "Boul'Armure" ||
        pokemon.firstAttack.name === 'Armure' ||
        pokemon.firstAttack.name === "Aile d'Acier" ||
        pokemon.firstAttack.name === 'Stockage' ||
        pokemon.firstAttack.name === "Vent Argenté" ||
        pokemon.firstAttack.name === 'Vent Mauvais' ||
        pokemon.firstAttack.name === "Repli" ||
        pokemon.firstAttack.name === "Coud'Krane"
        ) && isFirstAttackActive
        ) {
       const increasingValue = 5;
       const newDefenseValue = pokemon.stats.defense += increasingValue;
       openDialogueWhenPokemonMakesDefenseIncrease5pFactorAttack(pokemon);
       return newDefenseValue;
    }
        
};


