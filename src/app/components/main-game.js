import { 
  decreaseHp 
} from './decreasePokemonHp.js';

import { 
  firstAttacker, 
  secondAttacker, 
  determineFirstAttacker 
} from './determineFirstAttacker.js';

import { 
  handleMenu 
} from './handle-menu-and-selections/handleMenu.js';

import { handlePokemonFirstSelection } from './handle-menu-and-selections/handlePokemonFirstSelection.js';
import { handlePokemonSecondSelection } from './handle-menu-and-selections/handlePokemonSecondSelection.js';
import { handleSelectionRandomPokemon } from './handle-menu-and-selections/handlePokemonRandomSelection.js';

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
} from './factors-attacks/protect-factors-attacks/protect-factors-attack.js'; 

import { 
  possibleRandomPokemonsList    
} from './handle-menu-and-selections/possible-random-pokemons-list.js'; 

import { 
  getAttackDelays, 
  sleepAttacksAnimation 
} from './attacks-delay.js';

import { 
  firstAttackerTakesDamage,
  secondAttackerTakesDamage
} from "./pokemon-takes-damage.js";

import { 
  pokemonLose 
} from "./pokemon-is-knock-out.js";

import { 
  firstAttackerStatutAlteration
} from "./handle-statut-state-in-fight/first-attacker-statut-state-alteration.js";

import { 
  secondAttackerStatutAlteration 
} from "./handle-statut-state-in-fight/second-attacker-statut-state-alteration.js";

import { 
  getFirstAttackerAlterationStatesDelays, 
  getSecondAttackerAlterationStatesDelays,
  sleepStatutAlteredAnimation 
} from './alterations-delay.js';

import { 
  openDialogueWhenPokemonHpDecreaseByBurningStatut
} from './dialogue-fight.js';


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

      displayFightInProgress();
      determineFirstAttacker();


        loopRunning = true;

        
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


          let randomFactor = Math.random();
  
            if (randomFactor > 0.9) {

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
             
              if (isFirstAttackActive) {
                const attackDelays = getAttackDelays(
                  firstAttacker, 
                  secondAttacker
                  );

                await sleepAttacksAnimation(attackDelays.firstAttackerFirstAttackDelay);
                console.log("attackDelays", attackDelays.firstAttackerSecondAttackDelay);
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
                secondAttacker.type
              );

              if (isSecondAttackActive) {
                const attackDelays = getAttackDelays(
                  firstAttacker, 
                  secondAttacker
                  );

                await sleepAttacksAnimation(attackDelays.firstAttackerSecondAttackDelay);
                console.log("attackDelays", attackDelays.firstAttackerSecondAttackDelay);
                secondAttackerTakesDamage(
                  firstAttacker, 
                  secondAttacker, 
                  damageSecondAttack
                  );
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

            console.log(firstAttacker.name, "a terminé son tour");


            // if (firstAttacker.primaryStatut === 'burning') {

            //    openDialogueWhenPokemonHpDecreaseByBurningStatut(firstAttacker);
   
            //    firstAttackerStatutAlteration(firstAttacker);    
   
            //    const firstAttackerAlterationStateDelays = 
            //    getFirstAttackerAlterationStatesDelays(
            //      firstAttacker
            //      );
   
            //    await sleepStatutAlteredAnimation(firstAttackerAlterationStateDelays.firstAttackerStateDelay);
            //    console.log("firstAttackerAlterationStateDelays", firstAttackerAlterationStateDelays.firstAttackerStateDelay);
               
            //    decreaseHp();

            //   if (firstAttacker.stats.hp <= 0) {
            //     firstAttacker.stats.hp = 0;
  
            //     pokemonLose(
            //       firstAttacker, 
            //       secondAttacker, 
            //       enemyPokemon, 
            //       playerSelectedPokemon
            //       );
            //     break;
            //   };

            // };


            isFirstAttackActive = false;
            isSecondAttackActive = false;

            isProtectOrDetectCapacityActived;
            
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
         
            if (isFirstAttackActive) {
              const attackDelays = getAttackDelays(
                firstAttacker, 
                secondAttacker
                );

              await sleepAttacksAnimation(attackDelays.secondAttackerFirstAttackDelay);
              console.log("attackDelays", attackDelays.secondAttackerSecondAttackDelay);
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
                firstAttacker.type
              );
              
            if (isSecondAttackActive) {
              const attackDelays = getAttackDelays(
                firstAttacker, 
                secondAttacker
                );

              await sleepAttacksAnimation(attackDelays.secondAttackerSecondAttackDelay);
              console.log("attackDelays", attackDelays.secondAttackerSecondAttackDelay);
              decreaseHp();
              firstAttackerTakesDamage(
                firstAttacker, 
                secondAttacker, 
                damageSecondAttack
                );
            }

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
            
            
            if (secondAttacker.primaryStatut === 'burning') {
              console.log("début de condition car", secondAttacker.name, "est brûlé");
              
              openDialogueWhenPokemonHpDecreaseByBurningStatut(secondAttacker);
              console.log("dialogue passé");

              const secondAttackerAlterationStateDelays = 
              getSecondAttackerAlterationStatesDelays(
                secondAttacker
              );
              secondAttackerStatutAlteration(secondAttacker); 
              console.log("réduction des pv de", secondAttacker.name  );

              await sleepStatutAlteredAnimation(secondAttackerAlterationStateDelays.secondAttackerStateDelay);
              console.log("sleepStatutAlteredAnimation", secondAttackerAlterationStateDelays.secondAttackerStateDelay);
              
              decreaseHp();

            if (secondAttacker.stats.hp <= 0) {
              secondAttacker.stats.hp = 0;
          
              pokemonLose(
                firstAttacker, 
                secondAttacker, 
                enemyPokemon, 
                playerSelectedPokemon
                );
          
            };

            console.log("fin de condition");
            };

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


