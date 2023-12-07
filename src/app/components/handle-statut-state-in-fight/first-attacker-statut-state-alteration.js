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

export let firstAttackerStatutStateVariableList = {
  isFirstAttackerFrozen : false,
  isFirstAttackerParalyzed : false,
  isFirstAttackerAsleep : false,
  isFirstAttackerConfusing : false
};

let asleepCount = 0;
let confusingCount = 0;


export const firstAttackerStatutAlteration = 
function firstAttackerStatutAlteration(
  firstAttacker
  ) {

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

        let randomNumber = Math.random();
        console.log(randomNumber);
  
        if (randomNumber <= 0.25) {
  
          firstAttackerStatutStateVariableList.isFirstAttackerParalyzed = true;
          console.log(firstAttackerStatutStateVariableList.isFirstAttackerParalyzed);
          openDialogueWhenPokemonBlockedByParalyzedStatut(firstAttacker);

          deseableProtectCapacity();
  
        } else {
          firstAttackerStatutStateVariableList.isFirstAttackerParalyzed = false;
          console.log(firstAttackerStatutStateVariableList.isFirstAttackerParalyzed);
          openDialogueWhenPokemonAttacksDespiteParalyzedStatut(firstAttacker);
        };

    } else if (firstAttacker.primaryStatut === 'frozen') {
      
        let randomNumber = Math.random();
  
        if (randomNumber <= 0.20) {
  
          firstAttackerStatutStateVariableList.isFirstAttackerFrozen = false;
          firstAttacker.primaryStatut = 'normal';
          openDialogueWhenPokemonHasThawedStatut(firstAttacker);
  
        } else {
          firstAttackerStatutStateVariableList.isFirstAttackerFrozen = true;
          openDialogueWhenPokemonBlockedByFrozenStatut(firstAttacker);

          deseableProtectCapacity();
        };

    } else if (firstAttacker.primaryStatut === 'asleep') {

      let randomNumber = Math.random();
  
        if (randomNumber <= 0.50) {
            firstAttackerStatutStateVariableList.isFirstAttackerAsleep = true;
            openDialogueWhenPokemonIsAsleepStatut(firstAttacker);
            asleepCount++;
            
          } else {
            firstAttackerStatutStateVariableList.isFirstAttackerAsleep = false;
            firstAttacker.primaryStatut = 'normal';
            openDialogueWhenPokemonWakeUp(firstAttacker);
            asleepCount = 0;
          };
          
            if (asleepCount === 3) {
              firstAttackerStatutStateVariableList.isFirstAttackerAsleep = false;
              firstAttacker.primaryStatut = 'normal';
              openDialogueWhenPokemonWakeUp(firstAttacker);
              asleepCount = 0;
            };

    } else if (firstAttacker.secondaryStatut === 'confusing') { 

     let randomNumber = Math.random();
     
     confusingCount++;
  
        if (randomNumber <= 0.50) {
          openDialogueWhenPokemonConfused(firstAttacker);
          openDialogueWhenPokemonHurtByConfusing(firstAttacker);
          firstAttackerStatutStateVariableList.isFirstAttackerConfusing = true;
    
          let percentage = 10;
          let decreaseValue = (percentage / 100) * firstAttacker.stats.hpMax;
          const newDecreaseValue = Math.round(decreaseValue);
    
          firstAttacker.stats.hp -= newDecreaseValue;
          return firstAttacker.stats.hp;

        } else {
          openDialogueWhenPokemonConfused(firstAttacker);
          firstAttackerStatutStateVariableList.isFirstAttackerConfusing = false;
        };

          if (confusingCount === 4) {
            openDialogueWhenPokemonNoLongerConfused(firstAttacker);
            firstAttackerStatutStateVariableList.isFirstAttackerConfusing = false;
            firstAttacker.secondaryStatut = 'normal';
            confusingCount = 0;
          };

    } else if (firstAttacker.primaryStatut === 'normal') {
      firstAttackerStatutStateVariableList.isFirstAttackerParalyzed = false;
      firstAttackerStatutStateVariableList.isFirstAttackerFrozen = false;
      firstAttackerStatutStateVariableList.isFirstAttackerAsleep = false;

    } else if (firstAttacker.secondaryStatut === 'normal') {
      firstAttackerStatutStateVariableList.isFirstAttackerConfusing = false;
    };
    
};