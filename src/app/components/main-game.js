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

import { 
  calculateDamageFirstAttack 
} from "./calculate-damages-attacks/calculateDamageFirstAttack.js";

import { 
  calculateDamageSecondAttack 
} from "./calculate-damages-attacks/calculateDamageSecondAttack.js";

import { 
  domElementsFromSelectors 
} from "./dom-elements.js";

import { 
  displayStatsPokemonsContainer
} from './pokemon-stats-container.js' 

import { 
  isProtected
} from './factors-attacks/protect-factors-attacks/protect-factors-first-attack.js' 
        
      
  


document.addEventListener('DOMContentLoaded', () => {

  let isFirstPokemonSelected = false;
  let isSecondPokemonSelected = false;
  let playerSelectedPokemon = "";
  let enemyPokemon = "";
  let isFirstAttackActive = false;
  let isSecondAttackActive = false;
  

  domElementsFromSelectors.headContainer = 
  document.querySelector('.container-head');  

  domElementsFromSelectors.selectFirstPokemonButton = 
  document.getElementById('pokemonFirstSelection');
  
  domElementsFromSelectors.selectSecondPokemonButton = 
  document.getElementById('pokemonSecondSelection');

  domElementsFromSelectors.fightButtonContainer = 
  document.getElementById('container-btn-fight');

  domElementsFromSelectors.fightButton = 
  document.getElementById('fightButton');
    
  domElementsFromSelectors.fightInProgress = 
  document.getElementById('fight-in-progress');

  domElementsFromSelectors.pokemonRandomSelectionButton = 
  document.getElementById('pokemonRandomSelection');

  domElementsFromSelectors.displayDialogue =
  document.getElementById('dialogue');

  domElementsFromSelectors.containerFullPopupDialogueFight = 
  document.getElementById('container-display-dialogue');

    
  
  domElementsFromSelectors.headContainer.
  appendChild(domElementsFromSelectors.fightInProgress);




  menu.addEventListener("change", () => {
    handleMenu(menu.value);
  });
  

  domElementsFromSelectors.selectFirstPokemonButton.addEventListener("change", () => {

    handlePokemonFirstSelection(domElementsFromSelectors.selectFirstPokemonButton.value);
    isFirstPokemonSelected = true;
    playerSelectedPokemon = domElementsFromSelectors.selectFirstPokemonButton.value;
    
    domElementsFromSelectors.fightButtonContainer.style.display = 'flex';
    activateFightButton();
  
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display = 'none';
    domElementsFromSelectors.displayDialogue.style.display = 'none';

  });
    

  domElementsFromSelectors.selectSecondPokemonButton.addEventListener("change", () => {

    handlePokemonSecondSelection(domElementsFromSelectors.selectSecondPokemonButton.value);
    isSecondPokemonSelected = true;
    enemyPokemon = domElementsFromSelectors.selectSecondPokemonButton.value;

    domElementsFromSelectors.fightButtonContainer.style.display = 'flex';
    activateFightButton();
        
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display = 'none';
    domElementsFromSelectors.displayDialogue.style.display = 'none';

  });

  
  domElementsFromSelectors.pokemonRandomSelectionButton.addEventListener('click', () => {
   
    const possiblePokemons = [
      "Pikachu", 
      "Évoli", 
      "Roucool", 
      "Racaillou", 
      "Insécateur", 
      "Sabelette",
      "Mewtwo",
      "Scarabrute",
      "Krabboss",
      "Salamèche"
    ];

    const randomIndex = Math.floor(Math.random() * possiblePokemons.length);
    const pokemon = possiblePokemons[randomIndex];

    handleSelectionRandomPokemon(pokemon);
    isSecondPokemonSelected = true;
    enemyPokemon = pokemon;

    domElementsFromSelectors.fightButtonContainer.style.display = 'flex';
    activateFightButton();
   
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display = 'none';
    domElementsFromSelectors.displayDialogue.style.display = 'none';
    
  });
   
  domElementsFromSelectors.fightButton.disabled = true;
    
  
  domElementsFromSelectors.fightButton.addEventListener('click', () => {


    async function fight() {


      displayFightInProgress();
      determineFirstAttacker();

      datasForCalculateDamages(
        firstAttacker, 
        secondAttacker
        );
      
        
        
        while (firstAttacker.stats.hp > 0 && secondAttacker.stats.hp > 0) {
          
          displayStatsPokemonsContainer(firstAttacker, secondAttacker);
     
           isFirstAttackActive = false;
           isSecondAttackActive = false;
           
           isProtected;
           console.log(isProtected);


          let randomFactor = Math.random();
  
            if (randomFactor > 0.5) {

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
              await sleep(4000);
              decreaseHp();
              displayStatsPokemonsContainer(firstAttacker, secondAttacker);
            
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
                secondAttacker.type
              );

              secondAttacker.stats.hp -= Math.max(damageSecondAttack, 0);
              await sleep(4000);
              decreaseHp();
              displayStatsPokemonsContainer(firstAttacker, secondAttacker);

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
              displayStatsPokemonsContainer(firstAttacker, secondAttacker);
              break;
            };


            decreaseHp();
            displayStatsPokemonsContainer(firstAttacker, secondAttacker);
            
            isFirstAttackActive = false;
            isSecondAttackActive = false;

            isProtected;
            console.log(isProtected);
            
            
            randomFactor = Math.random();
            
            if (randomFactor > 0.5) {
              
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
                firstAttacker.type
              );
         
              firstAttacker.stats.hp -= Math.max(damageFirstAttack, 0);
              await sleep(4000);
              decreaseHp();
              displayStatsPokemonsContainer(firstAttacker, secondAttacker);
            
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
              await sleep(4000);
              decreaseHp();
              displayStatsPokemonsContainer(firstAttacker, secondAttacker);
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
              displayStatsPokemonsContainer(firstAttacker, secondAttacker);
              break;
            };


            displayStatsPokemonsContainer(firstAttacker, secondAttacker);


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
        firstAttackType,
        secondAttackerType
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
            domElementsFromSelectors.fightButton.disabled = false;
      }
    };


});


