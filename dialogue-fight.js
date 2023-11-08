import pikachuStats from './stats/pikachuStats.js';
import evoliStats from './stats/evoliStats.js';
import roucoolStats from './stats/roucoolStats.js';
import racaillouStats from './stats/racaillouStats.js';

import selectors from './main-game.js'

import { firstAttacker, secondAttacker, determineFirstAttacker } from './determineFirstAttacker.js';


export const openDialogueWhenPokemonMakesAttack = function openDialogueWhenPokemonMakesAttack(attacker) {
  
  selectors.containerFullPopupDialogueFight.style.display = 'flex';

  const displayDialogue = document.getElementById('dialogue');
  
  displayDialogue.style.display = 'flex';

  displayDialogue.textContent = `  ${attacker.name} utilise ${attacker.firstAttack.name} !`;

    setTimeout(function() {
        displayDialogue.style.display = 'none';
        }, 3000);
};

export const openDialogueWhenPokemonMakesSecondAttack = function openDialogueWhenPokemonMakesSecondAttack(attacker) {
  
  selectors.containerFullPopupDialogueFight.style.display = 'flex';

  const displayDialogue = document.getElementById('dialogue');
  
  displayDialogue.style.display = 'flex';

  displayDialogue.textContent = `  ${attacker.name} utilise ${attacker.secondAttack.name} !`;

    setTimeout(function() {
        displayDialogue.style.display = 'none';
        }, 3000);
};


export const openDialogueWhenPokemonMissAttack = function openDialogueWhenPokemonMissAttack(attacker) {
  
  selectors.containerFullPopupDialogueFight.style.display = 'flex';

  const displayDialogue = document.getElementById('dialogue');
  
  displayDialogue.style.display = 'flex';

   displayDialogue.textContent = `  ${attacker.name} a raté son attaque !`;

    setTimeout(function() {
        displayDialogue.style.display = 'none';
        }, 3000);
};


export const openDialogueWhenPokemonKo = function openDialogueWhenPokemonKo() {
       
    setTimeout(function() {
      const displayDialogue = document.getElementById('dialogue');
      
      displayDialogue.style.display = 'flex';
      displayDialogue.textContent = "Choisir un autre pokemon.";
    }, 3000);
      
};

