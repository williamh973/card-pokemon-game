import selectors from './main-game.js';

export const displayDialogue = document.getElementById('dialogue');

export const openDialogueWhenPokemonMakesFirstAttack = function openDialogueWhenPokemonMakesFirstAttack(attacker) {

  selectors.containerFullPopupDialogueFight.style.display = 'flex';
  
  displayDialogue.style.display = 'flex';

  displayDialogue.textContent = `  ${attacker.name} utilise ${attacker.firstAttack.name} !`;

    setTimeout(function() {
      displayDialogue.style.display = 'none';
    }, 3000);

};

export const openDialogueWhenPokemonMakesSecondAttack = function openDialogueWhenPokemonMakesSecondAttack(attacker) {
  
  selectors.containerFullPopupDialogueFight.style.display = 'flex';
  
  displayDialogue.style.display = 'flex';

  displayDialogue.textContent = `${attacker.name} utilise ${attacker.secondAttack.name} !`;

    setTimeout(function() {
      displayDialogue.style.display = 'none';
    }, 3000);

};


export const openDialogueWhenPokemonMissAttack = function openDialogueWhenPokemonMissAttack(attacker) {
  
  selectors.containerFullPopupDialogueFight.style.display = 'flex';
  
  displayDialogue.style.display = 'flex';

   displayDialogue.textContent = `  ${attacker.name} a raté son attaque !`;

    setTimeout(function() {
      displayDialogue.style.display = 'none';
    }, 3000);

};


export const openDialogueWhenPokemonMakesWeaknessAttack = function openDialogueWhenPokemonMakesWeaknessAttack() {
  
  setTimeout(function() {
    selectors.containerFullPopupDialogueFight.style.display = 'flex';
    
    displayDialogue.style.display = 'flex';
    
    displayDialogue.textContent = `C'est super efficace !`;
    
    setTimeout(function() {
      displayDialogue.style.display = 'none';
    }, 1400);
  }, 1500);

};


export const openDialogueWhenPokemonMakesResistanceAttack = function openDialogueWhenPokemonMakesResistanceAttack() {
  
  setTimeout(function() {
    selectors.containerFullPopupDialogueFight.style.display = 'flex';
    
    displayDialogue.style.display = 'flex';
    
    displayDialogue.textContent = `Ce n'est pas très efficace !`;
    
    setTimeout(function() {
      displayDialogue.style.display = 'none';
    }, 1400);
  }, 1500);

};

export const openDialogueWhenPokemonMakesIneffectiveAttack = function openDialogueWhenPokemonMakesIneffectiveAttack() {
  
  setTimeout(function() {
    selectors.containerFullPopupDialogueFight.style.display = 'flex';
    
    displayDialogue.style.display = 'flex';
    
    displayDialogue.textContent = `Sans effet !`;
    
    setTimeout(function() {
      displayDialogue.style.display = 'none';
    }, 1400);
  }, 1500);

};

export const openDialogueWhenPokemonKo = function openDialogueWhenPokemonKo() {
       
    setTimeout(function() {
      displayDialogue.style.display = 'flex';
      displayDialogue.textContent = "Choisir un autre pokemon.";
    }, 3000);
      
};

export const openDialogueWhenPokemonMakesSpeedIncrease5pFactorAttack = function openDialogueWhenPokemonMakesSpeedIncrease5pFactorAttack(pokemon) {

  setTimeout(function() {
    selectors.containerFullPopupDialogueFight.style.display = 'flex';
    
    displayDialogue.style.display = 'flex';
    
    displayDialogue.textContent = `La vitesse de ${ pokemon.name } augmente !`;
    
    setTimeout(function() {
      displayDialogue.style.display = 'none';
    }, 1400);
  }, 1500);

 };

export const openDialogueWhenPokemonMakesSpeedIncrease10pFactorAttack = function openDialogueWhenPokemonMakesSpeedIncrease10pFactorAttack(pokemon) {

  setTimeout(function() {
    selectors.containerFullPopupDialogueFight.style.display = 'flex';
    
    displayDialogue.style.display = 'flex';
    
    displayDialogue.textContent = `La vitesse de ${ pokemon.name } augmente beaucoup !`;
    
    setTimeout(function() {
      displayDialogue.style.display = 'none';
    }, 1400);
  }, 1500);

 };

 export const openDialogueWhenPokemonMakesDefenseIncrease5pFactorAttack = function openDialogueWhenPokemonMakesDefenseIncrease5pFactorAttack(pokemon) {

  setTimeout(function() {
    selectors.containerFullPopupDialogueFight.style.display = 'flex';
    
    displayDialogue.style.display = 'flex';
    
    displayDialogue.textContent = `La défense de ${ pokemon.name } augmente !`;
    
    setTimeout(function() {
      displayDialogue.style.display = 'none';
    }, 1400);
  }, 1500);

 };

 export const openDialogueWhenPokemonMakesDefenseIncrease10pFactorAttack = function openDialogueWhenPokemonMakesDefenseIncrease10pFactorAttack(pokemon) {

  setTimeout(function() {
    selectors.containerFullPopupDialogueFight.style.display = 'flex';
    
    displayDialogue.style.display = 'flex';
    
    displayDialogue.textContent = `La défense de ${ pokemon.name } augmente beaucoup !`;
    
    setTimeout(function() {
      displayDialogue.style.display = 'none';
    }, 1400);
  }, 1500);

 };



