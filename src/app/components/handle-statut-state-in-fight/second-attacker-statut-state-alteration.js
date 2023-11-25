 export let isBurningStatut = false;


 export const secondAttackerStatutAlteration = 
 function secondAttackerStatutAlteration(secondAttacker) {

   isBurningStatut = true;

   let percentage = 12.5;
   let decreaseValue = (percentage / 100) * secondAttacker.stats.hpMax;
   const newDecreaseValue = Math.round(decreaseValue);

   secondAttacker.stats.hp -= newDecreaseValue;
   return secondAttacker.stats.hp;
    
 };