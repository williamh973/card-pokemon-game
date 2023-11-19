import { domElementsFromSelectors } from './dom-elements.js';

export const displayDialogue = document.getElementById('dialogue');

export const openDialogueWhenPokemonMakesFirstAttack = 
function openDialogueWhenPokemonMakesFirstAttack(attacker) {

  domElementsFromSelectors.containerFullPopupDialogueFight.style.display = 'flex';
  
  domElementsFromSelectors.displayDialogue.style.display = 'flex';

  domElementsFromSelectors.displayDialogue.textContent = `${attacker.name} utilise ${attacker.firstAttack.name} !`;

    setTimeout(function() {
      domElementsFromSelectors.displayDialogue.style.display = 'none';
    }, 3000);

};

export const openDialogueWhenPokemonMakesSecondAttack = 
function openDialogueWhenPokemonMakesSecondAttack(attacker) {
  
  domElementsFromSelectors.containerFullPopupDialogueFight.style.display = 'flex';
  
  domElementsFromSelectors.displayDialogue.style.display = 'flex';

  domElementsFromSelectors.displayDialogue.textContent = `${attacker.name} utilise ${attacker.secondAttack.name} !`;

    setTimeout(function() {
      domElementsFromSelectors.displayDialogue.style.display = 'none';
    }, 3000);

};

export const openDialogueWhenPokemonMakesCriticalHit = 
function openDialogueWhenPokemonMakesCriticalHit() {

 setTimeout(function() {
   domElementsFromSelectors.containerFullPopupDialogueFight.style.display = 'flex';
   
   domElementsFromSelectors.displayDialogue.style.display = 'flex';
   
   domElementsFromSelectors.displayDialogue.textContent = `Coup critique !`;
   
   setTimeout(function() {
     domElementsFromSelectors.displayDialogue.style.display = 'none';
   }, 1400);
 }, 1500);

};


export const openDialogueWhenPokemonCriticalHitBoostedByFocusEnergy = 
function openDialogueWhenPokemonCriticalHitBoostedByFocusEnergy(attacker) {
  setTimeout(function() {
  domElementsFromSelectors.containerFullPopupDialogueFight.style.display = 'flex';
  
  domElementsFromSelectors.displayDialogue.style.display = 'flex';

   domElementsFromSelectors.displayDialogue.textContent = `${attacker.name} se gonfle !`;

    setTimeout(function() {
      domElementsFromSelectors.displayDialogue.style.display = 'none';
  }, 1400);
}, 1500);
};


export const openDialogueWhenPokemonCriticalHitAlreadyBoostedByFocusEnergy = 
function openDialogueWhenPokemonCriticalHitAlreadyBoostedByFocusEnergy(attacker) {
  setTimeout(function() {
  domElementsFromSelectors.containerFullPopupDialogueFight.style.display = 'flex';
  
  domElementsFromSelectors.displayDialogue.style.display = 'flex';

   domElementsFromSelectors.displayDialogue.textContent = `${attacker.name} est déjà boosté !`;

    setTimeout(function() {
      domElementsFromSelectors.displayDialogue.style.display = 'none';
  }, 1400);
}, 1500);
};


export const openDialogueWhenPokemonMissAttack = 
function openDialogueWhenPokemonMissAttack(attacker) {
  setTimeout(function() {
  domElementsFromSelectors.containerFullPopupDialogueFight.style.display = 'flex';
  
  domElementsFromSelectors.displayDialogue.style.display = 'flex';

   domElementsFromSelectors.displayDialogue.textContent = `${attacker.name} a raté son attaque !`;

    setTimeout(function() {
      domElementsFromSelectors.displayDialogue.style.display = 'none';
  }, 1400); // 1400
}, 1500); // 1500
};


export const openDialogueWhenPokemonMakesWeaknessAttack = 
function openDialogueWhenPokemonMakesWeaknessAttack() {
  
  setTimeout(function() {
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display = 'flex';
    
    domElementsFromSelectors.displayDialogue.style.display = 'flex';
    
    domElementsFromSelectors.displayDialogue.textContent = `C'est super efficace !`;
    
    setTimeout(function() {
      domElementsFromSelectors.displayDialogue.style.display = 'none';
    }, 1400);
  }, 1500);

};


export const openDialogueWhenPokemonMakesResistanceAttack = 
function openDialogueWhenPokemonMakesResistanceAttack() {
  
  setTimeout(function() {
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display = 'flex';
    
    domElementsFromSelectors.displayDialogue.style.display = 'flex';
    
    domElementsFromSelectors.displayDialogue.textContent = `Ce n'est pas très efficace !`;
    
    setTimeout(function() {
      domElementsFromSelectors.displayDialogue.style.display = 'none';
    }, 1400);
  }, 1500);

};

export const openDialogueWhenPokemonMakesIneffectiveAttack = 
function openDialogueWhenPokemonMakesIneffectiveAttack() {
  
  setTimeout(function() {
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display = 'flex';
    
    domElementsFromSelectors.displayDialogue.style.display = 'flex';
    
    domElementsFromSelectors.displayDialogue.textContent = `Sans effet !`;
    
    setTimeout(function() {
      domElementsFromSelectors.displayDialogue.style.display = 'none';
    }, 1400);
  }, 1500);

};

export const openDialogueWhenPokemonKo = function openDialogueWhenPokemonKo() {
       
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
    }, 1400);
  }, 1500);

 };

export const openDialogueWhenPokemonMakesSpeedIncrease10pFactorAttack = 
function openDialogueWhenPokemonMakesSpeedIncrease10pFactorAttack(pokemon) {

  setTimeout(function() {
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display = 'flex';
    
    domElementsFromSelectors.displayDialogue.style.display = 'flex';
    
    domElementsFromSelectors.displayDialogue.textContent = `Vitesse de ${ pokemon.name } augmente beaucoup !`;
    
    setTimeout(function() {
      domElementsFromSelectors.displayDialogue.style.display = 'none';
    }, 1400);
  }, 1500);

 };

 export const openDialogueWhenPokemonMakesDefenseIncrease5pFactorAttack = 
 function openDialogueWhenPokemonMakesDefenseIncrease5pFactorAttack(pokemon) {

  setTimeout(function() {
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display = 'flex';
    
    domElementsFromSelectors.displayDialogue.style.display = 'flex';
    
    domElementsFromSelectors.displayDialogue.textContent = `La Défense de ${ pokemon.name } augmente !`;
    
    setTimeout(function() {
      domElementsFromSelectors.displayDialogue.style.display = 'none';
    }, 1400);
  }, 1500);

 };

 export const openDialogueWhenPokemonMakesDefenseIncrease10pFactorAttack = 
 function openDialogueWhenPokemonMakesDefenseIncrease10pFactorAttack(pokemon) {

  setTimeout(function() {
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display = 'flex';
    
    domElementsFromSelectors.displayDialogue.style.display = 'flex';
    
    domElementsFromSelectors.displayDialogue.textContent = `La Défense de ${ pokemon.name } augmente beaucoup !`;
    
    setTimeout(function() {
      domElementsFromSelectors.displayDialogue.style.display = 'none';
    }, 1400);
  }, 1500);

 };

 export const openDialogueWhenPokemonMakesHpIncrease5pFactorAttack = 
 function openDialogueWhenPokemonMakesHpIncrease5pFactorAttack(pokemon, hpGained) {

  setTimeout(function() {
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display = 'flex';
    
    domElementsFromSelectors.displayDialogue.style.display = 'flex';
    
    domElementsFromSelectors.displayDialogue.textContent = `${ pokemon.name } regagne ${hpGained} pv !`;
    
    setTimeout(function() {
      domElementsFromSelectors.displayDialogue.style.display = 'none';
    }, 1400);
  }, 1500);

 };

 export const openDialogueWhenPokemonMissHpIncrease5pFactorAttack = 
 function openDialogueWhenPokemonMissHpIncrease5pFactorAttack() {

  setTimeout(function() {
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display = 'flex';
    
    domElementsFromSelectors.displayDialogue.style.display = 'flex';
    
    domElementsFromSelectors.displayDialogue.textContent = `Cela n'a aucun effet !`;
    
    setTimeout(function() {
      domElementsFromSelectors.displayDialogue.style.display = 'none';
    }, 1400);
  }, 1500);

 };


 export const  openDialogueWhenPokemonMakesAttackDecrease2pFactorAttack = 
 function  openDialogueWhenPokemonMakesAttackDecrease2pFactorAttack(secondAttacker) {

  setTimeout(function() {
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display = 'flex';
    
    domElementsFromSelectors.displayDialogue.style.display = 'flex';
    
    domElementsFromSelectors.displayDialogue.textContent = `L'Attaque de ${ secondAttacker.name } baisse !`;
    
    setTimeout(function() {
      domElementsFromSelectors.displayDialogue.style.display = 'none';
    }, 1400);
  }, 1500);

 };


 export const openDialogueWhenPokemonHasBeenKoByOneHitKnockout = 
 function openDialogueWhenPokemonHasBeenKoByOneHitKnockout(pokemon) {

  setTimeout(function() {
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display = 'flex';
    
    domElementsFromSelectors.displayDialogue.style.display = 'flex';
    
    domElementsFromSelectors.displayDialogue.textContent = `${ pokemon.name } est KO en un coup !`;
    
    setTimeout(function() {
      domElementsFromSelectors.displayDialogue.style.display = 'none';
    }, 1400);
  }, 1500);

 };

 export const openDialogueWhenPokemonReadyToProtectItself = 
 function openDialogueWhenPokemonReadyToProtectItself(firstAttacker) {

  setTimeout(function() {
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display = 'flex';
    
    domElementsFromSelectors.displayDialogue.style.display = 'flex';
    
    domElementsFromSelectors.displayDialogue.textContent = `${ firstAttacker.name } se tient près !`;
    
    setTimeout(function() {
      domElementsFromSelectors.displayDialogue.style.display = 'none';
    }, 1400);
  }, 1500);

 }


 export const openDialogueWhenPokemonProtectingHimself =
 function openDialogueWhenPokemonProtectingHimself(secondAttacker) {

  setTimeout(function() {
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display = 'flex';
    
    domElementsFromSelectors.displayDialogue.style.display = 'flex';
    
    domElementsFromSelectors.displayDialogue.textContent = `${ secondAttacker.name } se protège !`;
    
    setTimeout(function() {
      domElementsFromSelectors.displayDialogue.style.display = 'none';
    }, 1400);
  }, 1500);
 }


 export const openDialogueWhenPokemonMissAttackAfterProtectApply = 
function openDialogueWhenPokemonMissAttackAfterProtectApply(attacker) {
  setTimeout(function() {
  domElementsFromSelectors.containerFullPopupDialogueFight.style.display = 'flex';
  
  domElementsFromSelectors.displayDialogue.style.display = 'flex';

   domElementsFromSelectors.displayDialogue.textContent = `${attacker.name} a raté son attaque !`;

    setTimeout(function() {
      domElementsFromSelectors.displayDialogue.style.display = 'none';
  }, 1500);
}, 3000); 
};