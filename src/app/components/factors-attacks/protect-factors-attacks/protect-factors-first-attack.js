import { 
    isProtectOrDetectCapacityActivedByProtectOrDetect 
} from "./protect-detect-capacity-actived.js";

import { 
    pokemonDecreasePrecision 
} from "./precision-decrease-and-reset.js";



export const protectFactorForFirstAttack = 
function protectFactorForFirstAttack(
    firstAttacker,
    secondAttacker,
    isFirstAttackActive
    ) {
        
    if ( 
            (
                firstAttacker.firstAttack.name === "Abri" ||
                firstAttacker.firstAttack.name === 'Détection'
            ) && isFirstAttackActive
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

