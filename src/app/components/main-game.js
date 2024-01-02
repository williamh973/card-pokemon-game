import { 
  firstAttacker, 
  secondAttacker, 
  determineFirstAttacker 
} from './determineFirstAttacker.js';

import { 
  handleMenu 
} from './handle-menu-and-selections/handleMenu.js';

import { 
  handlePokemonFirstSelection 
} from './handle-menu-and-selections/handlePokemonFirstSelection.js';
import { 
  handlePokemonSecondSelection
 } from './handle-menu-and-selections/handlePokemonSecondSelection.js';
import { 
  handleSelectionRandomPokemon
 } from './handle-menu-and-selections/handlePokemonRandomSelection.js';

import { 
  displayFightInProgress
} from './display-fight-in-progress.js';

import { 
  calculateDamageFirstAttack 
} from "./damages-attacks/calculate-damages-attacks/calculateDamageFirstAttack.js";

import { 
  calculateDamageSecondAttack 
} from "./damages-attacks/calculate-damages-attacks/calculateDamageSecondAttack.js";

import { 
  domElementsFromSelectors 
} from "./dom-elements.js";

import { 
  displayStatsPokemonsContainer
} from './pokemon-stats-container.js';

import { 
  isProtectOrDetectCapacityActived
} from './factors-attacks/protect-factors-attacks/protect-detect-capacity-actived.js'; 

import { 
  possibleRandomPokemonsList    
} from './handle-menu-and-selections/possible-random-pokemons-list.js'; 

import { 
  getAttackDelays, 
  sleepAttacksAnimation 
} from './animations-delays/attacks-delay.js';

import { 
  firstAttackerTakesDamage,
  secondAttackerTakesDamage
} from "./pokemon-takes-damage.js";

import { 
  pokemonLose 
} from "./pokemon-is-knock-out.js";

import { 
  sleepStatutAlteredAnimation 
} from './animations-delays/alterations-delay.js';

import { 
  checkIfFirstAttackerStatusHasBurningOrPoisoned,
  checkIfFirstAttackerStatusHasParalyzedFrozenNormalOrAsleep,
  checkIfFirstAttackerStatusConfusing,
  checkIfFirstAttackerStatusScared,
  checkIfFirstAttackerStatusCursed
} from "./handle-statut-state-in-fight/first-attacker/check-if-first-attacker-statut-has-changed.js";

import { 
  checkIfSecondAttackerStatusHasBurningOrPoisoned,
  checkIfSecondAttackerStatusHasParalyzedFrozenNormalOrAsleep,
  checkIfSecondAttackerStatusConfusing,
  checkIfSecondAttackerStatusScared,
  checkIfSecondAttackerStatusCursed
} from "./handle-statut-state-in-fight/second-attacker/check-if-second-attacker-statut-has-changed.js";

import { 
  firstAttackerStatutStateVariableList
} from "./handle-statut-state-in-fight/first-attacker/first-attacker-statut-state-alteration/first-attacker-primary-statut-alteration.js";

import { 
  firstAttackerSecondaryStatutStateVariableList
} from "./handle-statut-state-in-fight/first-attacker/first-attacker-statut-state-alteration/first-attacker-secondary-statut-alteration.js";

import { 
  secondAttackerStatutStateVariableList
} from "./handle-statut-state-in-fight/second-attacker/second-attacker-statut-state-alteration/second-attacker-primary-statut-alteration.js";

import { 
  secondAttackerSecondaryStatutStateVariableList
} from "./handle-statut-state-in-fight/second-attacker/second-attacker-statut-state-alteration/second-attacker-secondary-statut-alteration.js";




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
  

  domElementsFromSelectors.selectFirstPokemonButton
  .addEventListener("change", () => {

    handlePokemonFirstSelection(
      domElementsFromSelectors.selectFirstPokemonButton.value
      );
    isFirstPokemonSelected = true;

    playerSelectedPokemon = 
    domElementsFromSelectors.selectFirstPokemonButton.value;
    
    domElementsFromSelectors.fightButtonContainer.style.display = 'flex';

    activateFightButton();
  
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display = 'none';
    domElementsFromSelectors.displayDialogue.style.display = 'none';

  });
    

  domElementsFromSelectors.selectSecondPokemonButton
  .addEventListener("change", () => {

    handlePokemonSecondSelection(
      domElementsFromSelectors.selectSecondPokemonButton.value
      );
    isSecondPokemonSelected = true;

    enemyPokemon = domElementsFromSelectors.selectSecondPokemonButton.value;

    domElementsFromSelectors.fightButtonContainer.style.display = 'flex';

    activateFightButton();
        
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display = 'none';
    domElementsFromSelectors.displayDialogue.style.display = 'none';

  });

  
  domElementsFromSelectors.pokemonRandomSelectionButton
  .addEventListener('click', () => {

    const randomIndex = Math.floor(Math.random() * possibleRandomPokemonsList.length);
    const pokemon = possibleRandomPokemonsList[randomIndex];

    handleSelectionRandomPokemon(pokemon);

    isSecondPokemonSelected = true;
    enemyPokemon = pokemon;

    domElementsFromSelectors.fightButtonContainer.style.display = 'flex';

    activateFightButton();
   
    domElementsFromSelectors.containerFullPopupDialogueFight.style.display = 'none';
    domElementsFromSelectors.displayDialogue.style.display = 'none';
    
  });
   
  domElementsFromSelectors.fightButton.disabled = true;
    
   let loopRunning = false;
   let numberOfTurns = 0;
  
  domElementsFromSelectors.fightButton
  .addEventListener('click', () => {

    async function fight() {

      loopRunning = true;

      displayFightInProgress();
      determineFirstAttacker();

        
        while (
          (
            firstAttacker.stats.hp > 0 && 
            secondAttacker.stats.hp > 0
            ) && 
            loopRunning
            ) {

          console.log("Début de boucle");

          displayStatsPokemonsContainer(
            firstAttacker, 
            secondAttacker
            );
     
           isFirstAttackActive = false;
           isSecondAttackActive = false;
           numberOfTurns ++;
           

           isProtectOrDetectCapacityActived;

           console.log("Controle si", firstAttacker.name, "est para, gelé, normal ou endormi");

           await checkIfFirstAttackerStatusHasParalyzedFrozenNormalOrAsleep(
            firstAttacker, 
            sleepStatutAlteredAnimation
            );

            console.log("Controle si", firstAttacker.name, "est confus");
            await checkIfFirstAttackerStatusConfusing(
              firstAttacker, 
              secondAttacker,
              enemyPokemon, 
              playerSelectedPokemon,
              sleepStatutAlteredAnimation
              );

              if (firstAttacker.stats.hp <= 0) {
                firstAttacker.stats.hp = 0;
                break;
              }
  
              console.log("Controle si", firstAttacker.name, "est effrayé");
              await checkIfFirstAttackerStatusScared(
                firstAttacker, 
                sleepStatutAlteredAnimation
                );
     
            if (
              !firstAttackerStatutStateVariableList.isFirstAttackerParalyzed &&
              !firstAttackerStatutStateVariableList.isFirstAttackerFrozen &&
              !firstAttackerStatutStateVariableList.isFirstAttackerAsleep &&
              !firstAttackerSecondaryStatutStateVariableList.isFirstAttackerConfusing &&
              !firstAttackerSecondaryStatutStateVariableList.isFirstAttackerScared
              ) {
            
                const randomNumber = Math.floor(Math.random() * 100) + 1;
      
                if (randomNumber <= 50) {
    
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
                    secondAttacker.type,
                    secondAttacker.secondaryType
                  );
                 
                  if (isFirstAttackActive) {
                    const attackDelays = getAttackDelays(
                      firstAttacker, 
                      secondAttacker
                      );
    
                    await sleepAttacksAnimation(attackDelays.firstAttackerFirstAttackDelay);
                    
                    secondAttackerTakesDamage(
                      firstAttacker, 
                      secondAttacker, 
                      damageFirstAttack
                      );     
                  };
      
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
                    secondAttacker.secondaryType
                  );
    
                  if (isSecondAttackActive) {
                    const attackDelays = getAttackDelays(
                      firstAttacker, 
                      secondAttacker
                      );
    
                    await sleepAttacksAnimation(attackDelays.firstAttackerSecondAttackDelay);
    
                    secondAttackerTakesDamage(
                      firstAttacker, 
                      secondAttacker, 
                      damageSecondAttack
                      );
                  };
                };
            };
          

            

            if (secondAttacker.stats.hp <= 0) {
              secondAttacker.stats.hp = 0;

              pokemonLose(
                firstAttacker, 
                secondAttacker, 
                enemyPokemon, 
                playerSelectedPokemon
                );

              break;

            };

            console.log("Controle si", firstAttacker.name, "est brulé ou empoisonné");
            await checkIfFirstAttackerStatusHasBurningOrPoisoned(
              firstAttacker, 
              secondAttacker,
              enemyPokemon, 
              playerSelectedPokemon,
              sleepStatutAlteredAnimation
              );
              
              if (firstAttacker.stats.hp <= 0) {
                firstAttacker.stats.hp = 0;
                break;
              }

              console.log("Controle si", firstAttacker.name, "est maudit");
              await checkIfFirstAttackerStatusCursed(
                firstAttacker, 
                secondAttacker,
                enemyPokemon, 
                playerSelectedPokemon,
                sleepStatutAlteredAnimation
                );
                
                if (firstAttacker.stats.hp <= 0) {
                  firstAttacker.stats.hp = 0;
                  break;
                }
              
              console.log(firstAttacker.name, "a terminé son tour");









            isFirstAttackActive = false;
            isSecondAttackActive = false;

            isProtectOrDetectCapacityActived;

            console.log("Controle si", secondAttacker.name, "est para, gelé, normal ou endormi");
            await checkIfSecondAttackerStatusHasParalyzedFrozenNormalOrAsleep(
              secondAttacker, 
              sleepStatutAlteredAnimation
              );

              console.log("Controle si", secondAttacker.name, "est confus");
              await checkIfSecondAttackerStatusConfusing(
                secondAttacker, 
                firstAttacker,
                enemyPokemon, 
                playerSelectedPokemon,
                sleepStatutAlteredAnimation
                );
                

                if (secondAttacker.stats.hp <= 0) {
                  secondAttacker.stats.hp = 0;
                  break;
                }

                console.log("Controle si", secondAttacker.name, "est effrayé");
                await checkIfSecondAttackerStatusScared(
                  secondAttacker, 
                  sleepStatutAlteredAnimation
                  );

              if (
                !secondAttackerStatutStateVariableList.isSecondAttackerParalyzed && 
                !secondAttackerStatutStateVariableList.isSecondAttackerFrozen &&
                !secondAttackerStatutStateVariableList.isSecondAttackerAsleep &&
                !secondAttackerSecondaryStatutStateVariableList.isSecondAttackerConfusing &&
                !secondAttackerSecondaryStatutStateVariableList.isSecondAttackerScared
                ) {
                  
            const randomNumber = Math.floor(Math.random() * 100) + 1;
            
            if (randomNumber <= 50) {
              
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
                firstAttacker.secondaryType
              );
         
            if (isFirstAttackActive) {
              const attackDelays = getAttackDelays(
                firstAttacker, 
                secondAttacker
                );

              await sleepAttacksAnimation(attackDelays.secondAttackerFirstAttackDelay);

              firstAttackerTakesDamage(
                firstAttacker, 
                secondAttacker, 
                damageFirstAttack
                );
              }

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
                firstAttacker.type,
                firstAttacker.secondaryType
              );
              
              if (isSecondAttackActive) {
                const attackDelays = getAttackDelays(
                  firstAttacker, 
                  secondAttacker
                  );
  
                await sleepAttacksAnimation(attackDelays.secondAttackerSecondAttackDelay);
               
                firstAttackerTakesDamage(
                  firstAttacker, 
                  secondAttacker, 
                  damageSecondAttack
                  );
              };
            };
          };
            

            if (firstAttacker.stats.hp <= 0) {
              firstAttacker.stats.hp = 0;

              pokemonLose(
                firstAttacker, 
                secondAttacker, 
                enemyPokemon, 
                playerSelectedPokemon
                );

              break;
            };

            console.log(secondAttacker.name, "a terminé son tour");
            
            console.log("Controle si", secondAttacker.name, "est brulé ou empoisonné");
              await checkIfSecondAttackerStatusHasBurningOrPoisoned(
              secondAttacker, 
              firstAttacker,
              enemyPokemon, 
              playerSelectedPokemon,
              sleepStatutAlteredAnimation
              );

              if (secondAttacker.stats.hp <= 0) {
                secondAttacker.stats.hp = 0;
                break;
              }


              console.log("Controle si", secondAttacker.name, "est maudit");
              await checkIfSecondAttackerStatusCursed(
              secondAttacker, 
              firstAttacker,
              enemyPokemon, 
              playerSelectedPokemon,
              sleepStatutAlteredAnimation
              );

              if (secondAttacker.stats.hp <= 0) {
                secondAttacker.stats.hp = 0;
                break;
              }

            console.log("fin de boucle");

        };
    };

  fight();
  
});

    
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


      document.addEventListener('keydown', function(event) {
        if (event.key === 'a' || event.keyCode === 65) {
          loopRunning = false;
        }
      });
});


