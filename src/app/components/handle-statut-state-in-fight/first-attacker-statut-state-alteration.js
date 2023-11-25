import { 
   openDialogueWhenPokemonHpDecreaseByBurningStatut
 } from '../dialogue-fight.js';


export let isBurningStatut = false;

export const firstAttackerStatutAlteration = 
function firstAttackerStatutAlteration(firstAttacker) {

   if (firstAttacker.primaryStatut === 'burning') {
      isBurningStatut = true;

      openDialogueWhenPokemonHpDecreaseByBurningStatut(firstAttacker);
      
      let percentage = 12.5;
      let decreaseValue = (percentage / 100) * firstAttacker.stats.hpMax;
      const newDecreaseValue = Math.round(decreaseValue);

      firstAttacker.stats.hp -= newDecreaseValue;
      return firstAttacker.stats.hp;
   };
}