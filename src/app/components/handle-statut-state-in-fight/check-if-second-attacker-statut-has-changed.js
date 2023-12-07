import { 
  secondAttackerStatutAlteration 
} from "./second-attacker-statut-state-alteration.js";

import { 
  getSecondAttackerAlterationStatesDelays 
} from '../alterations-delay.js';

import { 
  decreaseHp 
} from '../decreasePokemonHp.js';

import { 
  openDialogueWhenPokemonHpDecreaseByBurningStatut,
  openDialogueWhenPokemonHpDecreaseByPoisonedStatut
} from '../dialogue-fight.js';

import { 
  pokemonLose 
} from "../pokemon-is-knock-out.js";

import { 
  secondAttackerStatutStateVariableList 
} from "./second-attacker-statut-state-alteration.js";



export const checkIfSecondAttackerStatusHasBurningOrPoisoned =
async function checkIfSecondAttackerStatusHBurningOrPoisoned(
  secondAttacker, 
  firstAttacker,
  enemyPokemon, 
  playerSelectedPokemon,
  sleepStatutAlteredAnimation
  ) {

    if (
      secondAttacker.primaryStatut === 'burning' ||
      secondAttacker.primaryStatut === 'poisoned' 
      ) {

      appropriateDialogues(
        secondAttacker
      )


      const secondAttackerAlterationStateDelays = 
      getSecondAttackerAlterationStatesDelays(
        secondAttacker
      );

      secondAttackerStatutAlteration(
        secondAttacker
        ); 

      await sleepStatutAlteredAnimation(secondAttackerAlterationStateDelays.secondAttackerStateDelay);

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

    };

};



export const checkIfSecondAttackerStatusHasParalyzedFrozenNormalOrAsleep =
async function checkIfSecondAttackerStatusHasParalyzedFrozenNormalOrAsleep(
  secondAttacker, 
  sleepStatutAlteredAnimation
  ) {
   
    if (
      secondAttacker.primaryStatut === 'paralyzed' ||
      secondAttacker.primaryStatut === 'frozen' ||
      secondAttacker.primaryStatut === 'normal' ||
      secondAttacker.primaryStatut === 'asleep'
      ) {
      
      const secondAttackerAlterationStateDelays = 
      getSecondAttackerAlterationStatesDelays(
        secondAttacker
      );

      secondAttackerStatutAlteration(
        secondAttacker
        ); 

      await sleepStatutAlteredAnimation(secondAttackerAlterationStateDelays.secondAttackerStateDelay);

    };

};


export const checkIfSecondAttackerStatusHasConfusing =
async function checkIfSecondAttackerStatusHasConfusing(
  secondAttacker,
  firstAttacker, 
  enemyPokemon, 
  playerSelectedPokemon,
  sleepStatutAlteredAnimation,
  ) {
   
    if (secondAttacker.secondaryStatut === 'confusing') {

        const secondAttackerAlterationStateDelays = 
        getSecondAttackerAlterationStatesDelays(
          secondAttacker
        );

        secondAttackerStatutAlteration(
          secondAttacker
          ); 
  
          await sleepStatutAlteredAnimation(secondAttackerAlterationStateDelays.secondAttackerSecondStateDelay);
      
        if (secondAttackerStatutStateVariableList.isSecondAttackerConfusing) {
          decreaseHp();
        }

    if (secondAttacker.stats.hp <= 0) {
      secondAttacker.stats.hp = 0;
  
      pokemonLose(
        firstAttacker, 
        secondAttacker, 
        enemyPokemon, 
        playerSelectedPokemon
        );
  
    };

    };
};



function appropriateDialogues(
  secondAttacker
) {
  if (secondAttacker.primaryStatut === 'burning') {
   return openDialogueWhenPokemonHpDecreaseByBurningStatut(secondAttacker);

  } else if (secondAttacker.primaryStatut === 'poisoned') {
   return openDialogueWhenPokemonHpDecreaseByPoisonedStatut(secondAttacker);

  };

};