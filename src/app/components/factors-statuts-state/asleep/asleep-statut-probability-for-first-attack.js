import { 
    isStatusValidForAsleep
} from "./status-valid-for-asleep.js";

import { 
    asleepStatut
} from './asleep-statut.js';


export const asleepStatut30PercentProbabililityForFirstAttack = 
function asleepStatut30PercentProbabililityForFirstAttack(
    firstAttacker,
    secondAttacker,
    isFirstAttackActive,
    firstAttackType
  ) {
    if (
        isFirstAttackActive && 
        (
            (
                firstAttackType === 'normal'
                ) 
    
        ) && 
        (
            firstAttacker.firstAttack.name === 'Force Cachée'
        ) &&
        (
            isStatusValidForAsleep(
                secondAttacker
            )
            )
        ) {
            const randomNumber = Math.floor(Math.random() * 100) + 1;

             if (randomNumber < 30) {
                asleepStatut(
                    secondAttacker
                    ); 
            }
                           
    }

};


export const asleepStatut100PercentProbabililityForFirstAttack = 
function asleepStatut100PercentProbabililityForFirstAttack(
    firstAttacker,
    secondAttacker,
    isFirstAttackActive,
    firstAttackType
  ) {
    if (
        isFirstAttackActive && 
        (
            (
                firstAttackType === 'normal' ||
                firstAttackType === 'psy' ||
                firstAttackType === 'plant' ||
                firstAttackType === 'dark'
                )
        ) && 
        (
            firstAttacker.firstAttack.name === "Berceuse" ||
            firstAttacker.firstAttack.name === 'Grobisou' ||
            firstAttacker.firstAttack.name === 'Hypnose' ||
            firstAttacker.firstAttack.name === 'Poudre Dodo' ||
            firstAttacker.firstAttack.name === "Siffl'herbe" ||
            firstAttacker.firstAttack.name === 'Spore' ||
            firstAttacker.firstAttack.name === 'Trou Noir'
        ) &&
        (
            isStatusValidForAsleep(
                secondAttacker
            )
            )
        ) {
            const randomNumber = Math.floor(Math.random() * 100) + 1;

             if (randomNumber < 100) {
                asleepStatut(
                    secondAttacker
                    ); 
            }
                           
    }

};
