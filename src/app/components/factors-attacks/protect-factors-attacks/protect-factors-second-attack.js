import { 
    isProtectOrDetectCapacityActivedByProtectOrDetect 
} from "./protect-detect-capacity-actived.js";

import { 
    pokemonDecreasePrecision 
} from "./precision-decrease-and-reset.js";



export const protectFactorForSecondAttack = 
function protectFactorForSecondAttack(
    firstAttacker,
    secondAttacker,
    isSecondAttackActive
    ) {
  
    if ( 
            (
                firstAttacker.secondAttack.name === "Abri" ||
                firstAttacker.secondAttack.name === 'Détection'
            ) && isSecondAttackActive
            ) {
                isProtectOrDetectCapacityActivedByProtectOrDetect(
                    firstAttacker,
                    secondAttacker
                    );

                    pokemonDecreasePrecision(
                      firstAttacker
                      );

    }
};
