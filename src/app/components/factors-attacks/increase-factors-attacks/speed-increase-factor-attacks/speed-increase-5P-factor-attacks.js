import { openDialogueWhenPokemonMakesSpeedIncrease5pFactorAttack } from '../../../dialogue-fight.js';


export const speedIncrease5pFactorForFirstAttack = 
function speedIncrease5pFactorForFirstAttack(pokemon) {

    if ( 
         pokemon.firstAttack.name === 'Pouvoir Antique' ||
         pokemon.firstAttack.name === 'Vent Argenté' ||
         pokemon.firstAttack.name === 'Vent Mauvais' ||
         pokemon.firstAttack.name === 'Danse Draco' ||
         pokemon.firstAttack.name === 'Vent Arrière'
       ) {
         openDialogueWhenPokemonMakesSpeedIncrease5pFactorAttack(pokemon);
         const increasingValue = 5;
         const newSpeedValue = pokemon.stats.speed += increasingValue;
         return newSpeedValue;
       } else {
         return pokemon.stats.speed
    };
        
};


export const speedIncrease5pFactorForSecondAttack = 
function speedIncrease5pFactorForSecondAttack(pokemon) {

    if (
      pokemon.secondAttack.name === 'Pouvoir Antique' ||
      pokemon.secondAttack.name === 'Vent Argenté' ||
      pokemon.secondAttack.name === 'Vent Mauvais' ||
      pokemon.secondAttack.name === 'Danse Draco' ||
      pokemon.secondAttack.name === 'Vent Arrière'
       ) {
         openDialogueWhenPokemonMakesSpeedIncrease5pFactorAttack(pokemon);
         const increasingValue = 5;
         const newSpeedValue = pokemon.stats.speed += increasingValue;
         return newSpeedValue;
       } else {
         return pokemon.stats.speed     
    };
        
};
