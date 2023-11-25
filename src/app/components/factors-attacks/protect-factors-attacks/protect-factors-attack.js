import { 
    openDialogueWhenPokemonReadyToProtectItself
} from '../../dialogue-fight.js';

export let isProtectOrDetectCapacityActived = false;
let protectCount = 0;


export const isProtectOrDetectCapacityActivedByProtectOrDetect =
 function isProtectOrDetectCapacityActivedByProtectOrDetect(
    firstAttacker, 
    secondAttacker
    ) {
    isProtectOrDetectCapacityActived = true;

    if (
        (
            firstAttacker.primaryStatut !== 'normal' ||
            firstAttacker.secondaryStatut !== 'normal'
            ) 
            ||
                (
                    secondAttacker.primaryStatut !== 'normal' || 
                    secondAttacker.secondaryStatut !== 'normal'
                    )

    ) {
        setTimeout(() => {
            isProtectOrDetectCapacityActived = false;
        }, 9000);
        console.log(9000);
    } else {
        setTimeout(() => {
            isProtectOrDetectCapacityActived = false;
        }, 5000);
        console.log(5000);
    };

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
