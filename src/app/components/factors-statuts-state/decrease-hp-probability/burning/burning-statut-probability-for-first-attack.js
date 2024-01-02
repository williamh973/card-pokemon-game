import { 
    isStatusValidForBurning 
} from "./status-valid-for-burning.js";

import { 
    burningStatut 
} from "./burning-statut.js";

 
export const burningStatut10PercentProbabililityForFirstAttack = 
function burningStatut10PercentProbabililityForFirstAttack(
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
            firstAttackType === 'fire' ||
            firstAttackType === 'normal' 
           ) &&
            secondAttackerType !== 'fire'
        ) && 
        (
            firstAttacker.firstAttack.name === 'Flammèche' ||
            firstAttacker.firstAttack.name === 'Triplattaque' ||
            firstAttacker.firstAttack.name === 'Boutefeu' ||
            firstAttacker.firstAttack.name === 'Canicule' ||
            firstAttacker.firstAttack.name === 'Crocs Feu' ||
            firstAttacker.firstAttack.name === 'Déflagration' ||
            firstAttacker.firstAttack.name === 'Lance-Flammes' ||
            firstAttacker.firstAttack.name === 'Pied Brûleur' ||
            firstAttacker.firstAttack.name === 'Poing de Feu' ||
            firstAttacker.firstAttack.name === 'Roue de Feu' 
        ) &&
        (
            isStatusValidForBurning(
                secondAttacker
            )
            )
        ) {
            const randomNumber = Math.floor(Math.random() * 100) + 1;

            if (randomNumber <= 10) {
                burningStatut(
                    secondAttacker
                    );
            };
                           
    };

};


export const burningStatut30PercentProbabililityForFirstAttack = 
function burningStatut30PercentProbabililityForFirstAttack(
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
                firstAttackType === 'fire' ||
                firstAttackType === 'water' ||
                firstAttackType === 'ice' ||
                firstAttackType === 'ground' ||
                firstAttackType === 'spectrum'
            ) && 
            secondAttackerType !== 'fire'
        ) && 
        (
            firstAttacker.firstAttack.name === 'Ébullilave' ||
            firstAttacker.firstAttack.name === 'Ébullition' ||
            firstAttacker.firstAttack.name === 'Feu Glacé' ||
            firstAttacker.firstAttack.name === 'Incendie' ||
            firstAttacker.firstAttack.name === 'Crocs Feu' ||
            firstAttacker.firstAttack.name === 'Sable Ardent' ||
            firstAttacker.firstAttack.name === 'Cortège Funèbre'
        ) &&
        (
            isStatusValidForBurning(
                secondAttacker
            )
            )
        ) {
            const randomNumber = Math.floor(Math.random() * 100) + 1;

             if (randomNumber <= 30) {
                burningStatut(
                    secondAttacker
                    );
            }
                           
    }

};

export const burningStatut50PercentProbabililityForFirstAttack = 
function burningStatut50PercentProbabililityForFirstAttack(
    firstAttacker,
    secondAttacker,
    isFirstAttackActive,
    firstAttackType,
    secondAttackerType
  ) {
    if (
        isFirstAttackActive && 
        (
            firstAttackType === 'fire' &&
            secondAttackerType !== 'fire'
        ) && 
        (
            firstAttacker.firstAttack.name === 'Feu Sacré' 
        ) &&
        (
            isStatusValidForBurning(
                secondAttacker
            ) 
            )
        ) {
            const randomNumber = Math.floor(Math.random() * 100) + 1;

             if (randomNumber <= 50) {
                burningStatut(
                    secondAttacker
                    );
            }
                           
    }

};


export const burningStatut100PercentProbabililityForFirstAttack = 
function burningStatut100PercentProbabililityForFirstAttack(
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
                firstAttackType === 'fire' ||
                firstAttackType === 'dark'
            ) &&
            secondAttackerType !== 'fire'
        ) && 
        (
            firstAttacker.firstAttack.name === 'Dégommage' ||
            firstAttacker.firstAttack.name === "Feu d'Enfer" ||
            firstAttacker.firstAttack.name === 'Feu Follet' 
        ) &&
        (
            isStatusValidForBurning(
                secondAttacker
            )
            )
        ) {
            const randomNumber = Math.floor(Math.random() * 100) + 1;

             if (randomNumber <= 100) {
                burningStatut(
                    secondAttacker
                    );
            }
                           
    }

};