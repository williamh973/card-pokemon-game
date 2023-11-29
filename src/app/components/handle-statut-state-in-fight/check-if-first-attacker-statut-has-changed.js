import { 
  firstAttackerStatutAlteration 
} from "./first-attacker-statut-state-alteration.js";

import { 
  getFirstAttackerAlterationStatesDelays 
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



export const checkIfFirstAttackerStatusHasBurningOrPoisoned =
async function checkIfFirstAttackerStatusHasBurningOrPoisoned(
  firstAttacker, 
  secondAttacker,
  enemyPokemon, 
  playerSelectedPokemon,
  sleepStatutAlteredAnimation,
  ) {

    if (
      firstAttacker.primaryStatut === 'burning' ||
      firstAttacker.primaryStatut === 'poisoned'
      ) {
      
      appropriateDialogues(
        firstAttacker
      );

      const firstAttackerAlterationStateDelays = 
      getFirstAttackerAlterationStatesDelays(
        firstAttacker
      );

      firstAttackerStatutAlteration(firstAttacker); 

      await sleepStatutAlteredAnimation(firstAttackerAlterationStateDelays.firstAttackerStateDelay);
      
      decreaseHp();

    if (firstAttacker.stats.hp <= 0) {
      firstAttacker.stats.hp = 0;
  
      pokemonLose(
        firstAttacker, 
        secondAttacker, 
        enemyPokemon, 
        playerSelectedPokemon
        );
  
    };

    };
};



export const checkIfFirstAttackerStatusHasParalyzedOrFrozen =
async function checkIfFirstAttackerStatusHasParalyzedOrFrozen(
  firstAttacker, 
  sleepStatutAlteredAnimation
  ) {

    if (
      firstAttacker.primaryStatut === 'paralyzed' ||
      firstAttacker.primaryStatut === 'frozen' ||
      firstAttacker.primaryStatut === 'normal'
      ) {


      const firstAttackerAlterationStateDelays = 
      getFirstAttackerAlterationStatesDelays(
        firstAttacker
      );

      firstAttackerStatutAlteration(firstAttacker); 

      await sleepStatutAlteredAnimation(firstAttackerAlterationStateDelays.firstAttackerStateDelay);

    };

};


function appropriateDialogues(
  firstAttacker
) {
  if (firstAttacker.primaryStatut === 'burning') {
    openDialogueWhenPokemonHpDecreaseByBurningStatut(firstAttacker);

   } else if (firstAttacker.primaryStatut === 'poisoned') {
    openDialogueWhenPokemonHpDecreaseByPoisonedStatut(firstAttacker);

  };

};