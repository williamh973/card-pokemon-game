import { 
  openDialogueWhenPokemonBlockedByParalyzedStatut,
  openDialogueWhenPokemonBlockedByFrozenStatut,
  openDialogueWhenPokemonHasThawedStatut,
  openDialogueWhenPokemonAttacksDespiteParalyzedStatut
} from '../dialogue-fight.js';


export let secondAttackerStatutStateVariableList = {
  isSecondAttackerFrozen : false,
  isSecondAttackerParalyzed : false
};


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
            console.log(secondAttacker.name, "est", secondAttacker.primaryStatut, "pour ce tour");
      
            openDialogueWhenPokemonBlockedByParalyzedStatut(secondAttacker);
    
          } else {
            secondAttackerStatutStateVariableList.isSecondAttackerParalyzed = false;
            console.log(secondAttacker.name, "n'est pas paralysé pour ce tour");

            openDialogueWhenPokemonAttacksDespiteParalyzedStatut(secondAttacker);
        };

  } else if (secondAttacker.primaryStatut === 'frozen') {

    let randomNumber = Math.random();

      if (randomNumber <= 0.20) {
  
          secondAttackerStatutStateVariableList.isSecondAttackerFrozen = false;
          secondAttacker.primaryStatut = 'normal';
          console.log(secondAttacker.name, "est dégelé", "sont statut est maintenant", secondAttacker.primaryStatut, secondAttackerStatutStateVariableList.isSecondAttackerFrozen);
          openDialogueWhenPokemonHasThawedStatut(secondAttacker);
  
        } else {
          openDialogueWhenPokemonBlockedByFrozenStatut(secondAttacker);
          secondAttackerStatutStateVariableList.isSecondAttackerFrozen = true;
      };

  } else if (secondAttacker.primaryStatut === 'normal') {
    secondAttackerStatutStateVariableList.isSecondAttackerParalyzed = false;
    secondAttackerStatutStateVariableList.isSecondAttackerFrozen = false;
  };

};
