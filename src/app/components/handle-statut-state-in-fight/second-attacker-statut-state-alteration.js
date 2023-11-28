import { 
  openDialogueWhenPokemonBlockedByParalyzedStatut,
  openDialogueWhenPokemonBlockedByFrozenStatut
} from '../dialogue-fight.js';


export let isSecondAttackerParalyzed = false;
export let isSecondAttackerFrozen = false;


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

  } else if (secondAttacker.primaryStatut === 'frozen') {
    let randomFactor = Math.random();
console.log(randomFactor);

    if (randomFactor <= 0.20) {
      isSecondAttackerFrozen = false;
      console.log(isSecondAttackerFrozen);

    } else {
      isSecondAttackerFrozen = true;
      console.log(isSecondAttackerFrozen);
      openDialogueWhenPokemonBlockedByFrozenStatut(secondAttacker);
    };
  } 

};