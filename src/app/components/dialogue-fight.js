import { domElementsFromSelectors } from './dom-elements.js';


const END_ATTACKS_DISPLAY_DURATION = 4000;

const START_NEXT_DISPLAY_DURATION = 2000;
const END_NEXT_DISPLAY_DURATION = 1900;

const START_ALTERATION_STATUT_DISPLAY_DURATION = 0;
const END_ALTERATION_STATUT_DISPLAY_DURATION = 2900;


export const displayDialogue = document.getElementById('dialogue');


export const openDialogueWhenPokemonMakesFirstAttack = 
function openDialogueWhenPokemonMakesFirstAttack(attacker) {

  domElementsFromSelectors.containerFullPopupDialogueFight.style.display = 'flex';
  domElementsFromSelectors.displayDialogue.style.display = 'flex';

  domElementsFromSelectors.displayDialogue.textContent = 
  `${attacker.name} utilise ${attacker.firstAttack.name} !`;

    setTimeout(function() {
      domElementsFromSelectors.displayDialogue.style.display = 'none';
    }, END_ATTACKS_DISPLAY_DURATION);

};


export const openDialogueWhenPokemonMakesSecondAttack = 
function openDialogueWhenPokemonMakesSecondAttack(attacker) {
  
  domElementsFromSelectors.containerFullPopupDialogueFight.style.display = 'flex';
  domElementsFromSelectors.displayDialogue.style.display = 'flex';

  domElementsFromSelectors.displayDialogue.textContent = 
  `${attacker.name} utilise ${attacker.secondAttack.name} !`;

    setTimeout(function() {
      domElementsFromSelectors.displayDialogue.style.display = 'none';
    }, END_ATTACKS_DISPLAY_DURATION);

};


export const openDialogueWhenPokemonMakesCriticalHit = 
function openDialogueWhenPokemonMakesCriticalHit() {

  setTimeout(function() {

    domElementsFromSelectors.containerFullPopupDialogueFight.style.display = 'flex';
    domElementsFromSelectors.displayDialogue.style.display = 'flex';
    
    domElementsFromSelectors.displayDialogue.textContent = `Coup critique !`;
   
      setTimeout(function() {
        domElementsFromSelectors.displayDialogue.style.display = 'none';
      }, END_NEXT_DISPLAY_DURATION);

  }, START_NEXT_DISPLAY_DURATION);

};


export const openDialogueWhenPokemonCriticalHitBoostedByFocusEnergy = 
function openDialogueWhenPokemonCriticalHitBoostedByFocusEnergy(attacker) {
  
  setTimeout(function() {

    domElementsFromSelectors.containerFullPopupDialogueFight.style.display = 'flex';
    domElementsFromSelectors.displayDialogue.style.display = 'flex';
  
    domElementsFromSelectors.displayDialogue.textContent = `${attacker.name} se gonfle !`;

      setTimeout(function() {
        domElementsFromSelectors.displayDialogue.style.display = 'none';
      }, END_NEXT_DISPLAY_DURATION);

  }, START_NEXT_DISPLAY_DURATION);

};


export const openDialogueWhenPokemonCriticalHitAlreadyBoostedByFocusEnergy = 
function openDialogueWhenPokemonCriticalHitAlreadyBoostedByFocusEnergy(attacker) {
  
  setTimeout(function() {

    domElementsFromSelectors.containerFullPopupDialogueFight.style.display = 'flex';
    domElementsFromSelectors.displayDialogue.style.display = 'flex';
 
    domElementsFromSelectors.displayDialogue.textContent = `${attacker.name} est déjà boosté !`;

      setTimeout(function() {
        domElementsFromSelectors.displayDialogue.style.display = 'none';
      }, END_NEXT_DISPLAY_DURATION);

  }, START_NEXT_DISPLAY_DURATION);

};


export const openDialogueWhenPokemonMissAttack = 
function openDialogueWhenPokemonMissAttack(attacker) {
  
  setTimeout(function() {
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display = 'flex';
    domElementsFromSelectors.displayDialogue.style.display = 'flex';
 
    domElementsFromSelectors.displayDialogue.textContent = `${attacker.name} a raté son attaque !`;

      setTimeout(function() {
        domElementsFromSelectors.displayDialogue.style.display = 'none';
      }, END_NEXT_DISPLAY_DURATION); 

  }, START_NEXT_DISPLAY_DURATION); 

};


export const openDialogueWhenPokemonMakesWeaknessAttack = 
function openDialogueWhenPokemonMakesWeaknessAttack() {
  
  setTimeout(function() {
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display = 'flex';
    domElementsFromSelectors.displayDialogue.style.display = 'flex';
    
    domElementsFromSelectors.displayDialogue.textContent = `C'est super efficace !`;
    
      setTimeout(function() {
        domElementsFromSelectors.displayDialogue.style.display = 'none';
      }, END_NEXT_DISPLAY_DURATION);

  }, START_NEXT_DISPLAY_DURATION);

};


export const openDialogueWhenPokemonMakesResistanceAttack = 
function openDialogueWhenPokemonMakesResistanceAttack() {
  
  setTimeout(function() {
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display = 'flex';
    domElementsFromSelectors.displayDialogue.style.display = 'flex';
    
    domElementsFromSelectors.displayDialogue.textContent = `Ce n'est pas très efficace !`;
    
      setTimeout(function() {
        domElementsFromSelectors.displayDialogue.style.display = 'none';
      }, END_NEXT_DISPLAY_DURATION);

  }, START_NEXT_DISPLAY_DURATION);

};


export const openDialogueWhenPokemonMakesIneffectiveAttack = 
function openDialogueWhenPokemonMakesIneffectiveAttack() {
   
  setTimeout(function() {
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display = 'flex';
    domElementsFromSelectors.displayDialogue.style.display = 'flex';
    
    domElementsFromSelectors.displayDialogue.textContent = `Sans effet !`;
    
      setTimeout(function() {
        domElementsFromSelectors.displayDialogue.style.display = 'none';
      }, END_NEXT_DISPLAY_DURATION);

  }, START_NEXT_DISPLAY_DURATION);

}; 


export const openDialogueWhenPokemonKo = 
function openDialogueWhenPokemonKo() {
       
    setTimeout(function() {
      domElementsFromSelectors.displayDialogue.style.display = 'flex';
      domElementsFromSelectors.displayDialogue.textContent = "Choisir un autre pokemon.";
    }, 3000);
      
};


export const openDialogueWhenPokemonMakesSpeedIncrease5pFactorAttack = 
function openDialogueWhenPokemonMakesSpeedIncrease5pFactorAttack(pokemon) {

  setTimeout(function() {
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display = 'flex';
    domElementsFromSelectors.displayDialogue.style.display = 'flex';
    
    domElementsFromSelectors.displayDialogue.textContent = `Vitesse de ${ pokemon.name } augmente !`;
    
      setTimeout(function() {
        domElementsFromSelectors.displayDialogue.style.display = 'none';
      }, END_NEXT_DISPLAY_DURATION);

  }, START_NEXT_DISPLAY_DURATION);

};


export const openDialogueWhenPokemonMakesSpeedIncrease10pFactorAttack = 
function openDialogueWhenPokemonMakesSpeedIncrease10pFactorAttack(pokemon) {

  setTimeout(function() {
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display = 'flex';
    domElementsFromSelectors.displayDialogue.style.display = 'flex';
    
    domElementsFromSelectors.displayDialogue.textContent = `Vitesse de ${ pokemon.name } augmente beaucoup !`;
    
      setTimeout(function() {
        domElementsFromSelectors.displayDialogue.style.display = 'none';
      }, END_NEXT_DISPLAY_DURATION);

  }, START_NEXT_DISPLAY_DURATION);

};

export const openDialogueWhenPokemonMakesDefenseIncrease5pFactorAttack = 
function openDialogueWhenPokemonMakesDefenseIncrease5pFactorAttack(pokemon) {

  setTimeout(function() {
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display = 'flex';
    domElementsFromSelectors.displayDialogue.style.display = 'flex';
    
    domElementsFromSelectors.displayDialogue.textContent = `La Défense de ${ pokemon.name } augmente !`;
    
      setTimeout(function() {
        domElementsFromSelectors.displayDialogue.style.display = 'none';
      }, END_NEXT_DISPLAY_DURATION);

  }, START_NEXT_DISPLAY_DURATION);

};

export const openDialogueWhenPokemonMakesDefenseIncrease10pFactorAttack = 
function openDialogueWhenPokemonMakesDefenseIncrease10pFactorAttack(pokemon) {

  setTimeout(function() {
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display = 'flex';
    domElementsFromSelectors.displayDialogue.style.display = 'flex';
    
    domElementsFromSelectors.displayDialogue.textContent = `La Défense de ${ pokemon.name } augmente beaucoup !`;
    
      setTimeout(function() {
        domElementsFromSelectors.displayDialogue.style.display = 'none';
      }, END_NEXT_DISPLAY_DURATION);

  }, START_NEXT_DISPLAY_DURATION);

};

export const openDialogueWhenPokemonMakesHpIncrease5pFactorAttack = 
function openDialogueWhenPokemonMakesHpIncrease5pFactorAttack(pokemon, hpGained) {

  setTimeout(function() {
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display = 'flex';
    domElementsFromSelectors.displayDialogue.style.display = 'flex';
    
    domElementsFromSelectors.displayDialogue.textContent = `${ pokemon.name } regagne ${hpGained} pv !`;
    
      setTimeout(function() {
        domElementsFromSelectors.displayDialogue.style.display = 'none';
      }, END_NEXT_DISPLAY_DURATION);

  }, START_NEXT_DISPLAY_DURATION);

};

export const openDialogueWhenPokemonMissHpIncrease5pFactorAttack = 
function openDialogueWhenPokemonMissHpIncrease5pFactorAttack() {

  setTimeout(function() {
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display = 'flex';
    domElementsFromSelectors.displayDialogue.style.display = 'flex';
    
    domElementsFromSelectors.displayDialogue.textContent = `Cela n'a aucun effet !`;
    
      setTimeout(function() {
        domElementsFromSelectors.displayDialogue.style.display = 'none';
      }, END_NEXT_DISPLAY_DURATION);

  }, START_NEXT_DISPLAY_DURATION);

};


export const  openDialogueWhenPokemonMakesAttackDecrease2pFactorAttack = 
function  openDialogueWhenPokemonMakesAttackDecrease2pFactorAttack(secondAttacker) {

  setTimeout(function() {
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display = 'flex';
    domElementsFromSelectors.displayDialogue.style.display = 'flex';
    
    domElementsFromSelectors.displayDialogue.textContent = `L'Attaque de ${ secondAttacker.name } baisse !`;
    
      setTimeout(function() {
        domElementsFromSelectors.displayDialogue.style.display = 'none';
      }, END_NEXT_DISPLAY_DURATION);

  }, START_NEXT_DISPLAY_DURATION);

};


export const openDialogueWhenPokemonHasBeenKoByOneHitKnockout = 
function openDialogueWhenPokemonHasBeenKoByOneHitKnockout(pokemon) {

  setTimeout(function() {
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display = 'flex';
    domElementsFromSelectors.displayDialogue.style.display = 'flex';
    
    domElementsFromSelectors.displayDialogue.textContent = `${ pokemon.name } est KO en un coup !`;
    
      setTimeout(function() {
        domElementsFromSelectors.displayDialogue.style.display = 'none';
      }, END_NEXT_DISPLAY_DURATION);

  }, START_NEXT_DISPLAY_DURATION);

};


export const openDialogueWhenPokemonReadyToProtectItself = 
function openDialogueWhenPokemonReadyToProtectItself(firstAttacker) {

  setTimeout(function() {
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display = 'flex';
    domElementsFromSelectors.displayDialogue.style.display = 'flex';
    
    domElementsFromSelectors.displayDialogue.textContent = `${ firstAttacker.name } se tient près !`;
    
    setTimeout(function() {
      domElementsFromSelectors.displayDialogue.style.display = 'none';
    }, END_NEXT_DISPLAY_DURATION);

  }, START_NEXT_DISPLAY_DURATION);

};


export const openDialogueWhenPokemonProtectingHimself =
function openDialogueWhenPokemonProtectingHimself(secondAttacker) {

  setTimeout(function() {
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display = 'flex';
    domElementsFromSelectors.displayDialogue.style.display = 'flex';
    
    domElementsFromSelectors.displayDialogue.textContent = `${ secondAttacker.name } se protège !`;
    
      setTimeout(function() {
        domElementsFromSelectors.displayDialogue.style.display = 'none';
      }, END_NEXT_DISPLAY_DURATION);

  }, START_NEXT_DISPLAY_DURATION);

};


export const openDialogueWhenPokemonHasBurningStatut =
function openDialogueWhenPokemonHasBurningStatut(pokemon) {
  setTimeout(function() {
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display = 'flex';
    domElementsFromSelectors.displayDialogue.style.display = 'flex';
    
    domElementsFromSelectors.displayDialogue.textContent = 
    `${ pokemon.name } est brûlé !`;
    
      setTimeout(function() {
        domElementsFromSelectors.displayDialogue.style.display = 'none';
      }, END_NEXT_DISPLAY_DURATION);
      
    }, START_NEXT_DISPLAY_DURATION);
};


export const openDialogueWhenPokemonHpDecreaseByBurningStatut =
function openDialogueWhenPokemonHpDecreaseByBurningStatut(pokemon) {
  setTimeout(function() {
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display = 'flex';
    domElementsFromSelectors.displayDialogue.style.display = 'flex';
    
    domElementsFromSelectors.displayDialogue.textContent = 
    `${ pokemon.name } souffre de sa brûlure !`;
    
      setTimeout(function() {
        domElementsFromSelectors.displayDialogue.style.display = 'none';
      }, END_ALTERATION_STATUT_DISPLAY_DURATION);

    }, START_ALTERATION_STATUT_DISPLAY_DURATION);
};


export const openDialogueWhenPokemonHasPoisonedStatut =
function openDialogueWhenPokemonHasPoisonedStatut(pokemon) {
  setTimeout(function() {
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display = 'flex';
    domElementsFromSelectors.displayDialogue.style.display = 'flex';
    
    domElementsFromSelectors.displayDialogue.textContent = 
    `${ pokemon.name } est empoisoné !`;
    
      setTimeout(function() {
        domElementsFromSelectors.displayDialogue.style.display = 'none';
      }, END_NEXT_DISPLAY_DURATION);
      
    }, START_NEXT_DISPLAY_DURATION);
};


export const openDialogueWhenPokemonHpDecreaseByPoisonedStatut =
function openDialogueWhenPokemonHpDecreaseByPoisonedStatut(pokemon) {
  setTimeout(function() {
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display = 'flex';
    domElementsFromSelectors.displayDialogue.style.display = 'flex';
    
    domElementsFromSelectors.displayDialogue.textContent = 
    `${ pokemon.name } souffre du poison !`;
    
      setTimeout(function() {
        domElementsFromSelectors.displayDialogue.style.display = 'none';
      }, END_ALTERATION_STATUT_DISPLAY_DURATION);

    }, START_ALTERATION_STATUT_DISPLAY_DURATION);
};


export const openDialogueWhenPokemonHasParalyzedStatut =
function openDialogueWhenPokemonHasParalyzedStatut(pokemon) {
  setTimeout(function() {
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display = 'flex';
    domElementsFromSelectors.displayDialogue.style.display = 'flex';
    
    domElementsFromSelectors.displayDialogue.textContent = 
    `${ pokemon.name } est paralysé !`;
    
      setTimeout(function() {
        domElementsFromSelectors.displayDialogue.style.display = 'none';
      }, END_NEXT_DISPLAY_DURATION);
      
    }, START_NEXT_DISPLAY_DURATION);
};


export const openDialogueWhenPokemonBlockedByParalyzedStatut =
function openDialogueWhenPokemonBlockedByParalyzedStatut(pokemon) {
  setTimeout(function() {
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display = 'flex';
    domElementsFromSelectors.displayDialogue.style.display = 'flex';
    
    domElementsFromSelectors.displayDialogue.textContent = 
    `La paralysie empêche ${ pokemon.name } d'attaquer !`;
    
      setTimeout(function() {
        domElementsFromSelectors.displayDialogue.style.display = 'none';
      }, END_ALTERATION_STATUT_DISPLAY_DURATION);

    }, START_ALTERATION_STATUT_DISPLAY_DURATION);
};