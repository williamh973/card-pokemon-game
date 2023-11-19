import { 
    openDialogueWhenPokemonReadyToProtectItself
} from '../../dialogue-fight.js';

export let isProtected = false;
let protectCount = 0;


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
               isProtectedByProtectOrDetect();

                pokemonProtected(
                    firstAttacker
                    );

    }
};

export const isProtectedByProtectOrDetect =
 function isProtectedByProtectOrDetect() {
    isProtected = true;

    setTimeout(() => {
        isProtected = false;
    }, 5000);

}

function pokemonProtected(
    firstAttacker
    ) {

        if (isProtected) {
            openDialogueWhenPokemonReadyToProtectItself(firstAttacker);
        
            protectCount++;
            
            firstAttacker.firstAttack.precision -= 15; 

            resetPrecisionFirstAttack(
                firstAttacker
                )   
                
            };        
};
                // secondAttacker.firstAttack.precision = 0;
                // secondAttacker.secondAttack.precision = 0;
                //   secondAttacker.firstAttack.precision = secondAttacker.firstAttack.precisionMax;
                //   secondAttacker.secondAttack.precision = secondAttacker.secondAttack.precisionMax;
     
 

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
                pokemonProtected(
                    firstAttacker, 
                    secondAttacker
                    );

    }
};
