import { 
    openDialogueWhenPokemonReadyToProtectItself
} from '../../dialogue-fight.js';

export let isProtectOrDetectCapacityActived = false;
let protectCount = 0;


export const isProtectOrDetectCapacityActivedByProtectOrDetect =
 function isProtectOrDetectCapacityActivedByProtectOrDetect() {
    isProtectOrDetectCapacityActived = true;

    setTimeout(() => {
        isProtectOrDetectCapacityActived = false;
    }, 5000);

}

function pokemonProtected(
    firstAttacker
    ) {

        if (isProtectOrDetectCapacityActived) {
            openDialogueWhenPokemonReadyToProtectItself(firstAttacker);
        
            protectCount++;
            
            firstAttacker.firstAttack.precision -= 15; 

            resetPrecisionFirstAttack(
                firstAttacker
                )   
                
            };        
};


function resetPrecisionFirstAttack(
    firstAttacker
    ) {
  if (protectCount === 5) {
        protectCount = 0;

        if (
            firstAttacker.firstAttack.name === 'Abri' ||
            firstAttacker.firstAttack.name === 'Detection'
            ) {
            firstAttacker.firstAttack.precision = firstAttacker.firstAttack.precisionMax;
        } else if (
            firstAttacker.secondAttack.name === 'Abri' ||
            firstAttacker.secondAttack.name === 'Detection'
            ) {
            firstAttacker.secondAttack.precision = firstAttacker.secondAttack.precisionMax;
        }
    }
};












export const protectFactorForFirstAttack = 
function protectFactorForFirstAttack(
    firstAttacker,
    isFirstAttackActive
    ) {
        
    if ( 
            (
                firstAttacker.firstAttack.name === "Abri" ||
                firstAttacker.firstAttack.name === 'Détection'
            ) && isFirstAttackActive
            ) {
               isProtectOrDetectCapacityActivedByProtectOrDetect();

                pokemonProtected(
                    firstAttacker
                    );

    }
};





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
                isProtectOrDetectCapacityActivedByProtectOrDetect();

                pokemonProtected(
                    firstAttacker
                    );

    }
};
