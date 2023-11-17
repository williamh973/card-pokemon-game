import { 
  openDialogueWhenPokemonCriticalHitBoostedByFocusEnergy,
  openDialogueWhenPokemonCriticalHitAlreadyBoostedByFocusEnergy
 } from '../../../dialogue-fight.js';



export let isCriticalHitBoostedByFocusEnergy = false;


export const criticalHitIncreaseByFocusEnergyForFirstAttack =
function criticalHitIncreaseByFocusEnergyForFirstAttack(
  pokemon, 
  isFirstAttackActive
  ) {

    if (
        (
          (
            (pokemon.firstAttack.name === 'Puissance') && 
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
