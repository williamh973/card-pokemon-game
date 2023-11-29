import { 
    openDialogueWhenPokemonHasParalyzedStatut
} from '../../dialogue-fight.js';


export const paralyzedStatut = 
function paralyzedStatut(secondAttacker) {
  secondAttacker.primaryStatut = 'paralyzed';
  
  const decreaseValue = 4;
  secondAttacker.stats.speed = secondAttacker.stats.speed / decreaseValue;
  secondAttacker.stats.speed = Math.round(secondAttacker.stats.speed);
  openDialogueWhenPokemonHasParalyzedStatut(secondAttacker);

}; 