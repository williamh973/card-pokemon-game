import { 
  deseableProtectCapacity
} from "../factors-attacks/protect-factors-attacks/protect-detect-capacity-actived.js";

import { 
  openDialogueWhenPokemonBlockedByParalyzedStatut,
  openDialogueWhenPokemonBlockedByFrozenStatut,
  openDialogueWhenPokemonHasThawedStatut,
  openDialogueWhenPokemonAttacksDespiteParalyzedStatut,
  openDialogueWhenPokemonIsAsleepStatut,
  openDialogueWhenPokemonWakeUp,
  openDialogueWhenPokemonConfused,
  openDialogueWhenPokemonHurtByConfusing,
  openDialogueWhenPokemonNoLongerConfused
} from '../dialogue-fight.js';


export let secondAttackerStatutStateVariableList = {
  isSecondAttackerFrozen : false,
  isSecondAttackerParalyzed : false,
  isSecondAttackerAsleep : false,
  isSecondAttackerConfusing : false
};

let asleepCount = 0
let confusingCount = 0;


 export const secondAttackerStatutAlteration = 
 function secondAttackerStatutAlteration(
  secondAttacker
  ) {

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
    
      let randomNumber = Math.random();
    
        if (randomNumber <= 0.25) {
    
            secondAttackerStatutStateVariableList.isSecondAttackerParalyzed = true;
      
            deseableProtectCapacity();

            openDialogueWhenPokemonBlockedByParalyzedStatut(secondAttacker);
    
          } else {
            secondAttackerStatutStateVariableList.isSecondAttackerParalyzed = false;

            openDialogueWhenPokemonAttacksDespiteParalyzedStatut(secondAttacker);
        };

  } else if (secondAttacker.primaryStatut === 'frozen') {

    let randomNumber = Math.random();

      if (randomNumber <= 0.20) {
  
          secondAttackerStatutStateVariableList.isSecondAttackerFrozen = false;
          secondAttacker.primaryStatut = 'normal';
         
          openDialogueWhenPokemonHasThawedStatut(secondAttacker);
  
        } else {
          secondAttackerStatutStateVariableList.isSecondAttackerFrozen = true;
          openDialogueWhenPokemonBlockedByFrozenStatut(secondAttacker);

          deseableProtectCapacity();
      };

  } else if (secondAttacker.primaryStatut === 'asleep') {

    let randomNumber = Math.random();

      if (randomNumber <= 0.50) {
        secondAttackerStatutStateVariableList.isSecondAttackerAsleep = true;
          openDialogueWhenPokemonIsAsleepStatut(secondAttacker);
          asleepCount++;
          
        } else {
          secondAttackerStatutStateVariableList.isSecondAttackerAsleep = false;
          secondAttacker.primaryStatut = 'normal'
          openDialogueWhenPokemonWakeUp(secondAttacker);
          asleepCount = 0;
        };
        
          if (asleepCount === 3) {
            secondAttackerStatutStateVariableList.isSecondAttackerAsleep = false;
            secondAttacker.primaryStatut = 'normal'
            openDialogueWhenPokemonWakeUp(secondAttacker);
            asleepCount = 0;
          };

  } else if (secondAttacker.secondaryStatut === 'confusing') { 

    let randomNumber = Math.random();

    confusingCount++;
    
    if (randomNumber <= 0.50) {
        openDialogueWhenPokemonConfused(secondAttacker);
        openDialogueWhenPokemonHurtByConfusing(secondAttacker);
        secondAttackerStatutStateVariableList.isSecondAttackerConfusing = true;

         let percentage = 10;
         let decreaseValue = (percentage / 100) * secondAttacker.stats.hpMax;
         const newDecreaseValue = Math.round(decreaseValue);
   
         secondAttacker.stats.hp -= newDecreaseValue;
         return secondAttacker.stats.hp;

        } else {
          openDialogueWhenPokemonConfused(secondAttacker);
          secondAttackerStatutStateVariableList.isSecondAttackerConfusing = false;
       };

         if (confusingCount === 4) {
           openDialogueWhenPokemonNoLongerConfused(secondAttacker);
           secondAttackerStatutStateVariableList.isSecondAttackerConfusing = false;
           secondAttacker.secondaryStatut = 'normal';
           confusingCount = 0;
         };

   } else if (secondAttacker.primaryStatut === 'normal') {
      secondAttackerStatutStateVariableList.isSecondAttackerParalyzed = false;
      secondAttackerStatutStateVariableList.isSecondAttackerFrozen = false;
      secondAttackerStatutStateVariableList.isSecondAttackerAsleep = false;
    
  } else if (secondAttacker.secondaryStatut === 'normal') {
      secondAttackerStatutStateVariableList.isSecondAttackerConfusing = false;
    };

};
