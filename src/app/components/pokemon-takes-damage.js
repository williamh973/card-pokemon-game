import { 
    decreaseHp 
  } from './decreasePokemonHp.js';

  import { 
    displayStatsPokemonsContainer
  } from './pokemon-stats-container.js';



  
export function firstAttackerTakesDamage(
    firstAttacker, 
    secondAttacker, 
    damage
    ) {
      firstAttacker.stats.hp -= Math.max(damage, 0);
      decreaseHp();
      displayStatsPokemonsContainer(
        firstAttacker, 
        secondAttacker
        );
  };


 export function secondAttackerTakesDamage(
    firstAttacker, 
    secondAttacker, 
    damage
    ) {
      secondAttacker.stats.hp -= Math.max(damage, 0);
      decreaseHp();
      displayStatsPokemonsContainer(
        firstAttacker, 
        secondAttacker
        );
  };
  