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

      secondAttackerStatutAlteration(secondAttacker); 

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



export const checkIfSecondAttackerStatusHasParalyzedOrFrozen =
async function checkIfSecondAttackerStatusHasParalyzedOrFrozen(
  secondAttacker, 
  sleepStatutAlteredAnimation
  ) {

    if (
      secondAttacker.primaryStatut === 'paralyzed' ||
      secondAttacker.primaryStatut === 'frozen'
      ) {
      
      const secondAttackerAlterationStateDelays = 
      getSecondAttackerAlterationStatesDelays(
        secondAttacker
      );

      secondAttackerStatutAlteration(secondAttacker); 

      await sleepStatutAlteredAnimation(secondAttackerAlterationStateDelays.secondAttackerStateDelay);

    };

};


function appropriateDialogues(
  secondAttacker
) {
  if (secondAttacker.primaryStatut === 'burning') {
    openDialogueWhenPokemonHpDecreaseByBurningStatut(secondAttacker);

  } else if (secondAttacker.primaryStatut === 'poisoned') {
    openDialogueWhenPokemonHpDecreaseByPoisonedStatut(secondAttacker);

  };

};