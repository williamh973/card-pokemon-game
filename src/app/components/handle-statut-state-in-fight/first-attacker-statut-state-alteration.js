import { 
  openDialogueWhenPokemonBlockedByParalyzedStatut
} from '../dialogue-fight.js';

export let isFirstAttackerParalyzed = false;


export const firstAttackerStatutAlteration = 
function firstAttackerStatutAlteration(firstAttacker) {

   if (
      firstAttacker.primaryStatut === 'burning' ||
      firstAttacker.primaryStatut === 'poisoned'
      ) {

      let percentage = 12.5;
      let decreaseValue = (percentage / 100) * firstAttacker.stats.hpMax;
      const newDecreaseValue = Math.round(decreaseValue);

      firstAttacker.stats.hp -= newDecreaseValue;
      return firstAttacker.stats.hp;

    } else if (firstAttacker.primaryStatut === 'paralyzed') {
      let randomFactor = Math.random();
  
      if (randomFactor <= 0.25) {
        isFirstAttackerParalyzed = true;
       
        openDialogueWhenPokemonBlockedByParalyzedStatut(firstAttacker);
      } else {
        isFirstAttackerParalyzed = false;
      };
    } 

};