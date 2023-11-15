import { 
  openDialogueWhenPokemonCriticalHitBoostedByFocusEnergy,
  openDialogueWhenPokemonCriticalHitAlreadyBoostedByFocusEnergy
 } from '../../../dialogue-fight.js';



export let isCriticalHitBoostedByFocusEnergy = false;

export const criticalHitIncreaseByFocusEnergyForFirstAttack =
function criticalHitIncreaseByFocusEnergyForFirstAttack(pokemon, isFirstAttackActive) {

    if (
        (
          (
            pokemon.firstAttack.name === 'Puissance' && 
            pokemon.name === 'Scarabrute') && 
            isFirstAttackActive
         ) &&
         (!isCriticalHitBoostedByFocusEnergy)
         ) {
           openDialogueWhenPokemonCriticalHitBoostedByFocusEnergy(pokemon);
           isCriticalHitBoostedByFocusEnergy = true;
    }
     else if (
      (
      (
        pokemon.firstAttack.name === 'Puissance' && 
        pokemon.name === 'Scarabrute') && 
        isFirstAttackActive
     ) &&
     (isCriticalHitBoostedByFocusEnergy)
     ) {
      pokemonAlreadyBoostedByFocusEnergy(pokemon);
     };

};

function pokemonAlreadyBoostedByFocusEnergy(pokemon) {
  if (isCriticalHitBoostedByFocusEnergy) {
    openDialogueWhenPokemonCriticalHitAlreadyBoostedByFocusEnergy(pokemon);
  }
}


export const criticalHitIncreaseByFocusEnergyForSecondAttack =
function criticalHitIncreaseByFocusEnergyForSecondAttack(pokemon, isSecondAttackActive) {

  if (
    (
      (
        pokemon.secondAttack.name === 'Puissance' && 
        pokemon.name === 'Scarabrute') && 
        isSecondAttackActive
     ) &&
     (!isCriticalHitBoostedByFocusEnergy)
     ) {
       openDialogueWhenPokemonCriticalHitBoostedByFocusEnergy(pokemon);
       isCriticalHitBoostedByFocusEnergy = true;
}
 else if (
  (
  (
    pokemon.secondAttack.name === 'Puissance' && 
    pokemon.name === 'Scarabrute') && 
    isSecondAttackActive
 ) &&
 (isCriticalHitBoostedByFocusEnergy)
 ) {
  pokemonAlreadyBoostedByFocusEnergy(pokemon);
 };

};