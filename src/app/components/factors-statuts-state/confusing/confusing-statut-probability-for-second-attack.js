import { 
    confusingStatut
} from './confusing-statut.js';


export const confusingStatut10PercentProbabililityForSecondAttack = 
function confusingStatut10PercentProbabililityForSecondAttack(
    firstAttacker,
    secondAttacker,
    isSecondAttackActive,
    secondAttackType
  ) {
    if (
        isSecondAttackActive && 
        (
            (
                secondAttackType === 'psy'
                ) 
    
        ) && 
        (
            firstAttacker.secondAttack.name === 'Choc Mental' ||
            firstAttacker.secondAttack.name === 'Rafale Psy'
        ) &&
        (
              secondAttacker.secondaryStatut !== 'confusing' 
            )
        ) {
            const randomNumber = Math.floor(Math.random() * 100) + 1;

             if (randomNumber < 10) {
                confusingStatut(
                    secondAttacker
                    ); 
            }
                           
    }

};


export const confusingStatut20PercentProbabililityForSecondAttack = 
function confusingStatut20PercentProbabililityForSecondAttack(
    firstAttacker,
    secondAttacker,
    isSecondAttackActive,
    secondAttackType
  ) {
    if (
        isSecondAttackActive && 
        (
            (
                secondAttackType === 'normal' ||
                secondAttackType === 'water'
                ) 
    
        ) && 
        (
            firstAttacker.secondAttack.name === 'Escalade' ||
            firstAttacker.secondAttack.name === 'Vibraqua' ||
            firstAttacker.secondAttack.name === 'Uppercut' 
        ) &&
        (
              secondAttacker.secondaryStatut !== 'confusing' 
            )
        ) {
            const randomNumber = Math.floor(Math.random() * 100) + 1;

             if (randomNumber < 20) {
                confusingStatut(
                    secondAttacker
                    ); 
            }
                           
    }

};


export const confusingStatut100PercentProbabililityForSecondAttack = 
function confusingStatut100PercentProbabililityForSecondAttack(
    firstAttacker,
    secondAttacker,
    isSecondAttackActive,
    secondAttackType
  ) {
    if (
        isSecondAttackActive && 
        (
            (
                secondAttackType === 'normal' ||
                secondAttackType === 'fairy' ||
                secondAttackType === 'dark' ||
                secondAttackType === 'spectrum'
                )
        ) && 
        (
            firstAttacker.secondAttack.name === "Danse-Folle" ||
            firstAttacker.secondAttack.name === 'Doux Baiser' ||
            firstAttacker.secondAttack.name === 'Dynamopoing' ||
            firstAttacker.secondAttack.name === 'Flatterie' ||
            firstAttacker.secondAttack.name === "Onde Folie" ||
            firstAttacker.secondAttack.name === 'Vantardise' ||
            firstAttacker.secondAttack.name === 'Ultrason'
        ) &&
        (
              secondAttacker.secondaryStatut !== 'confusing' 
            )
        ) {
            const randomNumber = Math.floor(Math.random() * 100) + 1;

             if (randomNumber < 100) {
                confusingStatut(
                    secondAttacker
                    ); 
            }
                           
    }

};
