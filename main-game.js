import { decreaseHp } from './decreasePokemonHp.js';

import { 
  firstAttacker, 
  secondAttacker, 
  determineFirstAttacker 
} from './determineFirstAttacker.js';

import { handleMenu } from './handleMenu.js';

import { handlePokemonFirstSection } from './handlePokemonFirstSection.js';

import { handlePokemonSecondSection } from './handlePokemonSecondSection.js';

import { openDisplayResult } from './result-fight.js';

import { 
  openDialogueWhenPokemonMakesFirstAttack, 
  openDialogueWhenPokemonMakesSecondAttack,
  openDialogueWhenPokemonMissAttack,
  openDialogueWhenPokemonKo
} from './dialogue-fight.js';

import { 
  displayFightInProgress, 
  hideFightInProgress
} from './display-fight-in-progress.js';

import { weaknessFactorForFirstAttack } from './weakness-factor-first-attack.js';
import { weaknessFactorForSecondAttack } from './weakness-factor-second-attack.js';

import { resistanceFactorForFirstAttack } from './resistance-factor-first-attack.js';
import { resistanceFactorForSecondAttack } from './resistance-factor-second-attack.js';

import {
  ineffectiveFactorForFirstAttack,
  ineffectiveFactorForSecondAttack
} from './ineffective-factor-attack.js';

import { updatePlayerScore } from './updatePlayerScore.js';

import { handleSelectionRandomPokemon } from './handleSelectionRandomPokemon.js';



document.addEventListener('DOMContentLoaded', () => {
  
  const headContainer = 
  document.querySelector('.container-head');
    
  const selectFirstPokemonButton = 
  document.getElementById('pokemonFirstSelection');
  
  const selectSecondPokemonButton = 
  document.getElementById('pokemonSecondSelection');

  const fightButtonContainer = 
  document.getElementById('container-btn-fight');

  const fightButton = 
  document.getElementById('fightButton');
    
  const fightInProgress = 
  document.getElementById('fight-in-progress');

  const pokemonRandomSelectionButton = 
  document.getElementById('pokemonRandomSelection');

  const displayDialogue =
  document.getElementById('dialogue');

  const containerFullPopupDialogueFight = 
  document.getElementById('container-display-dialogue');
    
    
  headContainer.appendChild(fightInProgress);

  
  let firstPokemonSelected = false;
  let secondPokemonSelected = false;


  menu.addEventListener("change", () => {
    handleMenu(menu.value);
  });
  

  selectFirstPokemonButton.addEventListener("change", () => {
    
    handlePokemonFirstSection(selectFirstPokemonButton.value);
    firstPokemonSelected = true;
    fightButtonContainer.style.display = 'flex';
    activateFightButton();
  
    containerFullPopupDialogueFight.style.display = 'none';
    displayDialogue.style.display = 'none';

  });
    

  selectSecondPokemonButton.addEventListener("change", () => {

    handlePokemonSecondSection(selectSecondPokemonButton.value);
    secondPokemonSelected = true;
    fightButtonContainer.style.display = 'flex';
    activateFightButton();
        
    containerFullPopupDialogueFight.style.display = 'none';
    displayDialogue.style.display = 'none';

  });

  
  pokemonRandomSelectionButton.addEventListener('click', () => {
   
    handleSelectionRandomPokemon();
    secondPokemonSelected = true;
    activateFightButton();
   
    containerFullPopupDialogueFight.style.display = 'none';
    displayDialogue.style.display = 'none';

  });
   
  fightButton.disabled = true;
    
  
  fightButton.addEventListener('click', () => {

    async function fight() {

      displayFightInProgress();
      determineFirstAttacker();

        while (firstAttacker.stats.hp > 0 && secondAttacker.stats.hp > 0) {

          let randomFactor = Math.random();
  
            if (randomFactor >= 0.5) {

              let damageFirstAttack = calculateDamageFirstAttack(
                firstAttacker, 
                secondAttacker, 
                firstAttacker.firstAttack.strength,
                firstAttacker.stats.specialAtt,
                secondAttacker.stats.specialDef,
                firstAttacker.firstAttack.precision, 
                firstAttacker.firstAttack.type,
                secondAttacker.type
              );

              secondAttacker.stats.hp -= Math.max(damageFirstAttack, 0);
              await sleep(3000);
              decreaseHp();

            } else {

              let damageSecondAttack = calculateDamageSecondAttack(
                firstAttacker, 
                secondAttacker, 
                firstAttacker.secondAttack.strength, 
                firstAttacker.stats.specialAtt, 
                secondAttacker.stats.specialDef, 
                firstAttacker.secondAttack.precision,
                firstAttacker.secondAttack.type,
                secondAttacker.type
              );

              secondAttacker.stats.hp -= Math.max(damageSecondAttack, 0);
              await sleep(3000);
              decreaseHp();

            };

            if (secondAttacker.stats.hp <= 0) {
              
              secondAttacker.stats.hp = 0;
              decreaseHp();
              openDisplayResult();
              openDialogueWhenPokemonKo();
              hideFightInProgress();
              updatePlayerScore();
              break;
            };


            decreaseHp();
 
      
            randomFactor = Math.random();
  
            if (randomFactor >= 0.5) {
              
              let damageFirstAttack = calculateDamageFirstAttack(
                secondAttacker, 
                firstAttacker, 
                secondAttacker.firstAttack.strength,
                secondAttacker.stats.specialAtt, 
                firstAttacker.stats.specialDef,
                secondAttacker.firstAttack.precision,
                secondAttacker.firstAttack.type,
                firstAttacker.type
              );
            
              firstAttacker.stats.hp -= Math.max(damageFirstAttack, 0);
              await sleep(3000);
              decreaseHp();

            } else {

              let damageSecondAttack = calculateDamageSecondAttack(
                secondAttacker, 
                firstAttacker, 
                secondAttacker.secondAttack.strength,
                secondAttacker.stats.specialAtt, 
                firstAttacker.stats.specialDef, 
                secondAttacker.secondAttack.precision, 
                secondAttacker.secondAttack.type,
                firstAttacker.type
              );
              
              firstAttacker.stats.hp -= Math.max(damageSecondAttack, 0);
              await sleep(3000);
              decreaseHp();

            };
      
            if (firstAttacker.stats.hp <= 0) {
              firstAttacker.stats.hp = 0;
              decreaseHp();
              openDisplayResult();
              openDialogueWhenPokemonKo();
              hideFightInProgress();
              updatePlayerScore();
              break;
            }

        };
    };

  fight();
  
});
    
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  };
    
  function calculateDamageFirstAttack(
    firstAttacker, 
    secondAttacker, 
    firstAttackStrength, 
    firstAttackerSpecialAtt, 
    secondAttackerSpecialDef, 
    precision, 
    firstAttackType, 
    secondAttackerType
  ) {
    openDialogueWhenPokemonMakesFirstAttack(firstAttacker);
    
  const randomPrecision = Math.floor(Math.random() * 100) + 1;
  
    if (randomPrecision <= precision) {

      let degats = (
        (2 * firstAttacker.stats.attack / secondAttacker.stats.defense) * 
        firstAttackStrength * 
        (firstAttackerSpecialAtt / secondAttackerSpecialDef)
      ) / 50 + 2;

      
      let randomFactor = Math.random() * (1.00 - 0.85) + 0.85;
        degats *= randomFactor;

      
      let getWeaknessFactorList = weaknessFactorForFirstAttack(
        firstAttackType, 
        secondAttackerType
      );
      degats *= getWeaknessFactorList;
        
      let getResistanceFactorList = resistanceFactorForFirstAttack(
        firstAttackType, 
        secondAttackerType
      );
      degats /= getResistanceFactorList;
          
      let getIneffectiveFactorList = ineffectiveFactorForFirstAttack(
        firstAttackType, 
        secondAttackerType
      );
      degats *= getIneffectiveFactorList;
            
      return Math.round(degats);

    } else {
      openDialogueWhenPokemonMissAttack(firstAttacker);
      return 0;
    }

  };


  function calculateDamageSecondAttack(
    firstAttacker, 
    secondAttacker, 
    secondAttackStrength, 
    firstAttackerSpecialAtt, 
    secondAttackerSpecialDef, 
    precision, 
    secondAttackType, 
    secondAttackerType
  ) {
    openDialogueWhenPokemonMakesSecondAttack(firstAttacker);
    
  const randomPrecision = Math.floor(Math.random() * 100) + 1;
  
    if (randomPrecision <= precision) {

      let degats = (
        (2 * firstAttacker.stats.attack / secondAttacker.stats.defense) * 
        secondAttackStrength * 
        (firstAttackerSpecialAtt / secondAttackerSpecialDef)
      ) / 50 + 2;

      let randomFactor = Math.random() * (1.00 - 0.85) + 0.85;
      degats *= randomFactor;

    
      let getWeaknessFactorList = weaknessFactorForSecondAttack(
        secondAttackType, 
        secondAttackerType
      );
      degats *= getWeaknessFactorList;

      let getResistanceFactorList = resistanceFactorForSecondAttack(
        secondAttackType, 
        secondAttackerType
      );
      degats /= getResistanceFactorList;

      let getIneffectiveFactorList = ineffectiveFactorForSecondAttack(
        secondAttackType, 
        secondAttackerType
      );
      degats *= getIneffectiveFactorList;

      
      return Math.round(degats);

    } else {
      openDialogueWhenPokemonMissAttack(firstAttacker);
      return 0;
    }
  };

  function activateFightButton() {
    if (firstPokemonSelected &&
        secondPokemonSelected ) {
         fightButton.disabled = false;
    }
  };

});

const selectors = {
  headContainer : document.querySelector('.container-head'),
  titleContainer : document.getElementById('container-title'),
  title : document.getElementById('title'),
  versusContainer : document.getElementById('container-vs'),
  versus : document.getElementById('vs'),
  menuButton : document.getElementById('menu'),
  definiteFighTitle : document.getElementById('definite-fight-title'),
  randomFighTitle : document.getElementById('random-fight-title'),
  selectFirstPokemonButton : document.getElementById('pokemonFirstSelection'),
  selectSecondPokemonButton : document.getElementById('pokemonSecondSelection'),
  pokemonFirstLocation : document.getElementById('pokemon-first-location'),
  pokemonSecondLocation : document.getElementById('pokemon-second-location'),
  containerFullPopupDialogueFight : document.getElementById('container-display-dialogue'),
  fightInProgress : document.getElementById('fight-in-progress'),
  pokemonRandomSelectionButton : document.getElementById('pokemonRandomSelection'),
  fightButtonContainer : document.getElementById('container-btn-fight'),
  definiteFightMod : false,
  randomFightMod : false
};

export default selectors;

