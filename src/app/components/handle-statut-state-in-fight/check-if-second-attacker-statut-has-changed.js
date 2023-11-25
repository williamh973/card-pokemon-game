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
  openDialogueWhenPokemonHpDecreaseByBurningStatut
} from '../dialogue-fight.js';

import { 
  pokemonLose 
} from "../pokemon-is-knock-out.js";



export const checkIfSecondAttackerStatusHasChanged =
async function checkIfSecondAttackerStatusHasChanged(
  secondAttacker, 
  firstAttacker,
  enemyPokemon, 
  playerSelectedPokemon,
  sleepStatutAlteredAnimation
  ) {

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

};
