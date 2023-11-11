import { decreaseHp } from './decreasePokemonHp.js';

import { 
  firstAttacker, 
  secondAttacker, 
  determineFirstAttacker 
} from './determineFirstAttacker.js';

import { handleMenu } from './handle-menu-and-selections/handleMenu.js';
import { handlePokemonFirstSelection } from './handle-menu-and-selections/handlePokemonFirstSelection.js';
import { handlePokemonSecondSelection } from './handle-menu-and-selections/handlePokemonSecondSelection.js';
import { handleSelectionRandomPokemon } from './handle-menu-and-selections/handlePokemonRandomSelection.js';

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

import { weaknessFactorForFirstAttack } from './factors-attacks/weakness-factors-attacks/weakness-factor-first-attack.js';
import { weaknessFactorForSecondAttack } from './factors-attacks/weakness-factors-attacks/weakness-factor-second-attack.js';

import { resistanceFactorForFirstAttack } from './factors-attacks/resistance-factors-attacks/resistance-factor-first-attack.js';
import { resistanceFactorForSecondAttack } from './factors-attacks/resistance-factors-attacks/resistance-factor-second-attack.js';

import {
  ineffectiveFactorForFirstAttack,
  ineffectiveFactorForSecondAttack
} from './factors-attacks/ineffective-factor-attack.js';

import { updatePlayerScore } from './updatePlayerScore.js';


import { 
  speedIncrease5pFactorForFirstAttack, 
  speedIncrease5pFactorForSecondAttack 
} from './factors-attacks/increase-factors-attacks/speed-increase-factor-attacks/speed-increase-5P-factor-attacks.js';
import { 
  speedIncrease10pFactorForFirstAttack, 
  speedIncrease10pFactorForSecondAttack 
} from './factors-attacks/increase-factors-attacks/speed-increase-factor-attacks/speed-increase-10P-factor-attacks.js';

import { 
  defenseIncrease5pFactorForFirstAttack, 
  defenseIncrease5pFactorForSecondAttack 
} from './factors-attacks/increase-factors-attacks/defense-increase-factor-attacks/defense-increase-5P-factor-attacks.js';
import { 
  defenseIncrease10pFactorForFirstAttack, 
  defenseIncrease10pFactorForSecondAttack 
} from './factors-attacks/increase-factors-attacks/defense-increase-factor-attacks/defense-increase-10P-factor-attacks.js';
import { 
  hideLocationWhenFirstAttackerLose, 
  hideLocationWhenSecondAttackerLose 
} from "./hideLocationsWhenPokemonsLoses.js";


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

  
  let isFirstPokemonSelected = false;
  let isSecondPokemonSelected = false;
  let playerSelectedPokemon = "";
  let enemyPokemon = "";

  menu.addEventListener("change", () => {
    handleMenu(menu.value);
  });
  

  selectFirstPokemonButton.addEventListener("change", () => {

    handlePokemonFirstSelection(selectFirstPokemonButton.value);
    isFirstPokemonSelected = true;
    playerSelectedPokemon = selectFirstPokemonButton.value;
    
    fightButtonContainer.style.display = 'flex';
    activateFightButton();
  
    containerFullPopupDialogueFight.style.display = 'none';
    displayDialogue.style.display = 'none';

  });
    

  selectSecondPokemonButton.addEventListener("change", () => {

    handlePokemonSecondSelection(selectSecondPokemonButton.value);
    isSecondPokemonSelected = true;
    enemyPokemon = selectSecondPokemonButton.value;

    fightButtonContainer.style.display = 'flex';
    activateFightButton();
        
    containerFullPopupDialogueFight.style.display = 'none';
    displayDialogue.style.display = 'none';

  });

  
  pokemonRandomSelectionButton.addEventListener('click', () => {
   
    const possiblePokemons = [
      "Pikachu", 
      "Évoli", 
      "Roucool", 
      "Racaillou", 
      "Insecateur", 
      "Sabelette"
    ];
    const randomIndex = Math.floor(Math.random() * possiblePokemons.length);
    const pokemon = possiblePokemons[randomIndex];

    handleSelectionRandomPokemon(pokemon);
    isSecondPokemonSelected = true;
    enemyPokemon = pokemon;

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
              hideLocationWhenSecondAttackerLose(secondAttacker, enemyPokemon)
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
              hideLocationWhenFirstAttackerLose(firstAttacker, enemyPokemon);
              break;
            };

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

      speedIncrease5pFactorForFirstAttack(firstAttacker);
      speedIncrease10pFactorForFirstAttack(firstAttacker);

      defenseIncrease5pFactorForFirstAttack(firstAttacker);
      defenseIncrease10pFactorForFirstAttack(firstAttacker);

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

      speedIncrease5pFactorForSecondAttack(firstAttacker);
      speedIncrease10pFactorForSecondAttack(firstAttacker);

      defenseIncrease5pFactorForSecondAttack(firstAttacker);
      defenseIncrease10pFactorForSecondAttack(firstAttacker);

      return Math.round(degats);

    } else {
      openDialogueWhenPokemonMissAttack(firstAttacker);
      return 0;
    }
  };

  function activateFightButton() {
    if (isFirstPokemonSelected &&
        isSecondPokemonSelected ) {
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
  randomFightMod : false,
  enemyPokemon : ""
};

export default selectors;

