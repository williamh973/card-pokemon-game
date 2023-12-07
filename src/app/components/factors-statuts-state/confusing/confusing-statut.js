import { 
  openDialogueWhenAttackConfusesPokemon
} from '../../dialogue-fight.js';


export const confusingStatut = 
function confusingStatut(secondAttacker) {

  secondAttacker.secondaryStatut = 'confusing';
  openDialogueWhenAttackConfusesPokemon(secondAttacker);

}; 