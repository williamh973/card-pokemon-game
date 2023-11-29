import { 
    isStatusValidForParalyzed
} from "./status-valid-for-paralyzed.js";

import { 
    paralyzedStatut
} from './paralyzed-statut.js';


export const paralyzedStatut10PercentProbabililityForFirstAttack = 
function paralyzedStatut10PercentProbabililityForFirstAttack(
    firstAttacker,
    secondAttacker,
    isFirstAttackActive,
    firstAttackType,
    secondAttackerType
  ) {
    if (
        isFirstAttackActive && 
        (
            (
                firstAttackType === 'electric' ||
                firstAttackType === 'normal'
                ) 
                &&
            (
                secondAttackerType !== 'rock' &&
                secondAttackerType !== 'electric' 
            ) 
        ) && 
        (
            firstAttacker.firstAttack.name === 'Crocs Eclair' ||
            firstAttacker.firstAttack.name === 'Eclair' ||
            firstAttacker.firstAttack.name === 'Poing-Eclair' ||
            firstAttacker.firstAttack.name === 'Tonnerre' ||
            firstAttacker.firstAttack.name === 'Triplattaque' 
        ) &&
        (
            isStatusValidForParalyzed(
                secondAttacker
            )
            )
        ) {
            const randomNumber = Math.floor(Math.random() * 100) + 1;

             if (randomNumber < 10) {
                paralyzedStatut(
                    secondAttacker
                    ); 
            }
                           
    }

};


export const paralyzedStatut30PercentProbabililityForFirstAttack = 
function paralyzedStatut30PercentProbabililityForFirstAttack(
    firstAttacker,
    secondAttacker,
    isFirstAttackActive,
    firstAttackType,
    secondAttackerType
  ) {
    if (
        isFirstAttackActive && 
        (
            (
                firstAttackType === 'electric' ||
                firstAttackType === 'normal' ||
                firstAttackType === 'dragon' ||
                firstAttackType === 'fight' ||
                firstAttackType === 'flight'
                ) &&
            (
                secondAttackerType !== 'rock' &&
                secondAttackerType !== 'electric' 
            ) 
        ) && 
        (
            firstAttacker.firstAttack.name === "Coup d'jus" ||
            firstAttacker.firstAttack.name === 'Dracosouffle' ||
            firstAttacker.firstAttack.name === 'Etincelle' ||
            firstAttacker.firstAttack.name === 'Fatal Foudre' ||
            firstAttacker.firstAttack.name === 'Force Cachée' ||
            firstAttacker.firstAttack.name === 'Forte-Paume' ||
            firstAttacker.firstAttack.name === 'Lechouille' ||
            firstAttacker.firstAttack.name === 'Plaquage' ||
            firstAttacker.firstAttack.name === 'Rebond'
        ) &&
        (
            isStatusValidForParalyzed(
                secondAttacker
            ) 
            )
        ) {
            const randomNumber = Math.floor(Math.random() * 100) + 1;

             if (randomNumber < 30) {
                paralyzedStatut(
                    secondAttacker
                    );
            }
                           
    }

};


export const paralyzedStatut100PercentProbabililityForFirstAttack = 
function paralyzedStatut100PercentProbabililityForFirstAttack(
    firstAttacker,
    secondAttacker,
    isFirstAttackActive,
    firstAttackType,
    secondAttackerType
  ) {
    if (
        isFirstAttackActive && 
        (
            (
                firstAttackType === 'electric' ||
                firstAttackType === 'dark' ||
                firstAttackType === 'plant' 
                ) &&
            (
                secondAttackerType !== 'rock' &&
                secondAttackerType !== 'electric' 
            ) 
        ) && 
        (
            firstAttacker.firstAttack.name === 'Cage-Eclair' ||
            firstAttacker.firstAttack.name === 'Dégommage' ||
            firstAttacker.firstAttack.name === 'Elecanon' ||
            firstAttacker.firstAttack.name === 'Para-Spore'
        ) &&
        (
            isStatusValidForParalyzed(
                secondAttacker
            )
            )
        ) {
            const randomNumber = Math.floor(Math.random() * 100) + 1;

             if (randomNumber < 100) {
                paralyzedStatut(
                    secondAttacker
                    );
            }
                           
    }

};
