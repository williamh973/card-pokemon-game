import { 
    cursedStatut
} from './cursed-statut.js';

import { 
    decreaseHp 
  } from '../../../decreasePokemonHp.js';


export const cursedStatut100PercentProbabililityForFirstAttack = 
function confusingStatut100PercentProbabililityForFirstAttack(
    firstAttacker,
    secondAttacker,
    isFirstAttackActive,
    firstAttackType
  ) {
    if (
        isFirstAttackActive && 
        (
            (
                firstAttackType === 'malus'
                ) 
    
        ) && 
        (
            firstAttacker.firstAttack.name === 'Malédiction' 
        ) &&
        (
            !secondAttacker.secondaryStatut.isCursed 
            )
        ) {
            let percentage = 50;
            let value = (percentage / 100) * firstAttacker.stats.hpMax;
            const hpValue = Math.round(value);
            const randomNumber = Math.floor(Math.random() * 100) + 1;

             if (
                randomNumber <= 100 && 
                firstAttacker.stats.hp > hpValue
                ) {
                    cursedStatut(
                        firstAttacker, 
                        secondAttacker
                        ); 
                    decreaseHp();
            }
                           
    }

};


