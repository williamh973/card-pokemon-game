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
  openDialogueWhenPokemonHpDecreaseByBurningStatut
} from '../dialogue-fight.js';

import { 
  pokemonLose 
} from "../pokemon-is-knock-out.js";



export const checkIfFirstAttackerStatusHasChanged =
async function checkIfFirstAttackerStatusHasChanged(
  firstAttacker, 
  secondAttacker,
  enemyPokemon, 
  playerSelectedPokemon,
  sleepStatutAlteredAnimation,
  ) {

    if (firstAttacker.primaryStatut === 'burning') {
      console.log("début de condition car", firstAttacker.name, "est brûlé");
      
      openDialogueWhenPokemonHpDecreaseByBurningStatut(firstAttacker);
      console.log("dialogue passé");

      const firstAttackerAlterationStateDelays = 
      getFirstAttackerAlterationStatesDelays(
        firstAttacker
      );
      firstAttackerStatutAlteration(firstAttacker); 
      console.log("réduction des pv de", firstAttacker.name  );

      await sleepStatutAlteredAnimation(firstAttackerAlterationStateDelays.firstAttackerStateDelay);
      console.log("sleepStatutAlteredAnimation", firstAttackerAlterationStateDelays.firstAttackerStateDelay);
      
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

    console.log("fin de condition");
    };

};
