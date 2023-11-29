import { 
  openDialogueWhenPokemonBlockedByParalyzedStatut,
  openDialogueWhenPokemonBlockedByFrozenStatut,
  openDialogueWhenPokemonHasThawedStatut,
  openDialogueWhenPokemonAttacksDespiteParalyzedStatut
} from '../dialogue-fight.js';

export let firstAttackerStatutStateVariableList = {
  isFirstAttackerFrozen : false,
  isFirstAttackerParalyzed : false
};


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
          console.log(firstAttacker.name, "est dégelé", "sont statut est maintenant", firstAttacker.primaryStatut, firstAttackerStatutStateVariableList.isFirstAttackerFrozen);
          openDialogueWhenPokemonHasThawedStatut(firstAttacker);
  
        } else {
          firstAttackerStatutStateVariableList.isFirstAttackerFrozen = true;
          console.log(firstAttacker.name, "est toujours", firstAttacker.primaryStatut, firstAttackerStatutStateVariableList.isFirstAttackerFrozen);
          openDialogueWhenPokemonBlockedByFrozenStatut(firstAttacker);
        };

    } else if (firstAttacker.primaryStatut === 'normal') {
      firstAttackerStatutStateVariableList.isFirstAttackerParalyzed = false;
      firstAttackerStatutStateVariableList.isFirstAttackerFrozen = false;
    };
    
};