import { 
    protectionActived
  } from './protect-detect-capacity-actived.js'; 

import { 
    pokemonDecreasePrecision 
} from "./precision-decrease-and-reset.js";


export const protectFactorForSecondAttack = 
function protectFactorForSecondAttack(
    firstAttacker,
    isSecondAttackActive
    ) {
  
    if ( 
            (
                firstAttacker.secondAttack.name === "Abri" ||
                firstAttacker.secondAttack.name === 'Détection'
            ) && isSecondAttackActive
            ) {
                protectionActived();

                    pokemonDecreasePrecision(
                      firstAttacker
                      );

    }
};
