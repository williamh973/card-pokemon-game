import { 
  openDialogueWhenPokemonBlockedByParalyzedStatut
} from '../dialogue-fight.js';


export let isSecondAttackerParalyzed = false;


 export const secondAttackerStatutAlteration = 
 function secondAttackerStatutAlteration(secondAttacker) {

   if (
     secondAttacker.primaryStatut === 'burning' ||
     secondAttacker.primaryStatut === 'poisoned'
     ) {
 
      let percentage = 12.5;
      let decreaseValue = (percentage / 100) * secondAttacker.stats.hpMax;
      const newDecreaseValue = Math.round(decreaseValue);
   
      secondAttacker.stats.hp -= newDecreaseValue;
      return secondAttacker.stats.hp;
 
   } else if (secondAttacker.primaryStatut === 'paralyzed') {
    
    let randomFactor = Math.random();
  
    if (randomFactor <= 0.25) {
      isSecondAttackerParalyzed = true;
      console.log(secondAttacker.name, "est paralysé pour ce tour");

      openDialogueWhenPokemonBlockedByParalyzedStatut(secondAttacker);
    } else {
      isSecondAttackerParalyzed = false;
      console.log(secondAttacker.name, "n'est pas paralysé pour ce tour");
    };

  } 

};