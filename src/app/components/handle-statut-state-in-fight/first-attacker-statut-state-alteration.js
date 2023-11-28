import { 
  openDialogueWhenPokemonBlockedByParalyzedStatut,
  openDialogueWhenPokemonBlockedByFrozenStatut
} from '../dialogue-fight.js';

export let isFirstAttackerParalyzed = false;
export let isFirstAttackerFrozen = false;


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
      console.log(randomFactor);

      if (randomFactor <= 0.25) {
        isFirstAttackerParalyzed = true;
        console.log(isSecondAttackerFrozen);

        openDialogueWhenPokemonBlockedByParalyzedStatut(firstAttacker);
      } else {
        isFirstAttackerParalyzed = false;
        console.log(isSecondAttackerFrozen);

      };

    } else if (firstAttacker.primaryStatut === 'frozen') {
      
      
      let randomFactor = Math.random();
      
      if (randomFactor <= 0.20) {
        isFirstAttackerFrozen = false;
      } else {
        isFirstAttackerFrozen = true;
        openDialogueWhenPokemonBlockedByFrozenStatut(firstAttacker);
      };
    } 

};