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

import { openDialogueWhenPokemonKo } from './dialogue-fight.js';

import { 
  displayFightInProgress, 
  hideFightInProgress
} from './display-fight-in-progress.js';

import { 
  hideFirstAttackerWhenLose,
  hideSecondAttackerWhenLose,

  hidePlayerSecondAttackerWhenLose,
  hidePlayerFirstAttackerWhenLose
} from "./hideLocationsWhenPokemonsLoses.js";

import { calculateDamageFirstAttack } from "./calculate-damages-attacks/calculateDamageFirstAttack.js";

import { calculateDamageSecondAttack } from "./calculate-damages-attacks/calculateDamageSecondAttack.js";



document.addEventListener('DOMContentLoaded', () => {

  let isFirstPokemonSelected = false;
  let isSecondPokemonSelected = false;
  let playerSelectedPokemon = "";
  let enemyPokemon = "";
  let isFirstAttackActive = false;
  let isSecondAttackActive = false;
  
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
      "Insécateur", 
      "Sabelette",
      "Mewtwo",
      "Scarabrute"
    ];

    const randomIndex = Math.floor(Math.random() * possiblePokemons.length);
    const pokemon = possiblePokemons[randomIndex];

    handleSelectionRandomPokemon(pokemon);
    isSecondPokemonSelected = true;
    enemyPokemon = pokemon;

    fightButtonContainer.style.display = 'flex';
    activateFightButton();
   
    containerFullPopupDialogueFight.style.display = 'none';
    displayDialogue.style.display = 'none';
    
  });
   
  fightButton.disabled = true;
    
  
  fightButton.addEventListener('click', () => {


    async function fight() {

      displayFightInProgress();
      determineFirstAttacker();

      datasForCalculateDamages(
        firstAttacker, 
        secondAttacker
        );

      
        while (firstAttacker.stats.hp > 0 && secondAttacker.stats.hp > 0) {

          
           isFirstAttackActive = false;
           isSecondAttackActive = false;

          let randomFactor = Math.random();
  
            if (randomFactor >= 0.5) {

              isFirstAttackActive = true;
              isSecondAttackActive = false;

              let damageFirstAttack = calculateDamageFirstAttack(
                firstAttacker, 
                secondAttacker, 
                isFirstAttackActive,
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

              isFirstAttackActive = false;
              isSecondAttackActive = true;

              let damageSecondAttack = calculateDamageSecondAttack(
                firstAttacker, 
                secondAttacker, 
                isSecondAttackActive,
                firstAttacker.secondAttack.strength, 
                firstAttacker.stats.specialAtt, 
                secondAttacker.stats.specialDef, 
                firstAttacker.secondAttack.precision,
                firstAttacker.secondAttack.type,
                secondAttacker.type,
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
              hideSecondAttackerWhenLose(
                secondAttacker, 
                enemyPokemon
                );
              hidePlayerSecondAttackerWhenLose(
                secondAttacker, 
                playerSelectedPokemon
              );
              break;
            };

            decreaseHp();
 
            // console.log(firstAttacker.name, " Vitesse : ", firstAttacker.stats.speed);


            isFirstAttackActive = false;
            isSecondAttackActive = false;

            randomFactor = Math.random();
  
            if (randomFactor >= 0.5) {
              
              isFirstAttackActive = true;
              isSecondAttackActive = false;

              let damageFirstAttack = calculateDamageFirstAttack(
                secondAttacker, 
                firstAttacker, 
                isFirstAttackActive,
                secondAttacker.firstAttack.strength,
                secondAttacker.stats.specialAtt, 
                firstAttacker.stats.specialDef,
                secondAttacker.firstAttack.precision,
                secondAttacker.firstAttack.type,
                firstAttacker.type,
              );
            
              firstAttacker.stats.hp -= Math.max(damageFirstAttack, 0);
              await sleep(3000);
              decreaseHp();

            } else {

              isFirstAttackActive = false;
              isSecondAttackActive = true;

              let damageSecondAttack = calculateDamageSecondAttack(
                secondAttacker, 
                firstAttacker, 
                isSecondAttackActive,
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
              hideFirstAttackerWhenLose(
                firstAttacker, 
                enemyPokemon
                );
              hidePlayerFirstAttackerWhenLose(
                firstAttacker,
                playerSelectedPokemon
              );
              break;
            };

        };
    };

  fight();
  
});
    

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  };


  function datasForCalculateDamages(
    firstAttacker, 
    secondAttacker
    ) {

    const firstAttackStrength = firstAttacker.firstAttack.strength;
    const firstAttackerSpecialAtt = firstAttacker.stats.specialAtt;
    const secondAttackStrength = firstAttacker.secondAttack.strength;
    const secondAttackerSpecialDef = secondAttacker.stats.specialDef;
    const firstAttackPrecision = firstAttacker.firstAttack.precision;
    const secondAttackPrecision = firstAttacker.secondAttack.precision;
    const firstAttackType = firstAttacker.firstAttack.type;
    const secondAttackerType = secondAttacker.type;
    const secondAttackType = firstAttacker.secondAttack.type;
    let isFirstAttackActive = false;
    let isSecondAttackActive = false;


      calculateDamageFirstAttack(
        firstAttacker, 
        secondAttacker, 
        isFirstAttackActive,
        firstAttackStrength, 
        firstAttackerSpecialAtt, 
        secondAttackerSpecialDef, 
        firstAttackPrecision, 
        firstAttackType
      );
  
      calculateDamageSecondAttack(
        firstAttacker, 
        secondAttacker, 
        isSecondAttackActive,
        secondAttackStrength, 
        firstAttackerSpecialAtt, 
        secondAttackerSpecialDef, 
        secondAttackPrecision, 
        secondAttackType, 
        secondAttackerType
      );

  }; 


  function activateFightButton() {
      if (
        (
          isFirstPokemonSelected && 
          isSecondPokemonSelected
          )
          ) {
           fightButton.disabled = false;
      }
    };


});

export const selectors = {
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
};


