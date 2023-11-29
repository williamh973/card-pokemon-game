import { 
    isStatusValidForBurning 
} from "./status-valid-for-burning.js";

import { 
    burningStatut 
} from "./burning-statut.js";


export const burningStatut10PercentProbabililityForSecondAttack = 
function burningStatut10PercentProbabililityForSecondAttack(
    firstAttacker,
    secondAttacker,
    isSecondAttackActive,
    secondAttackType,
    secondAttackerType
  ) {
    if (
        isSecondAttackActive && 
        (
            (
                secondAttackType === 'fire' ||
                secondAttackType === 'normal' 
               ) &&
            secondAttackerType !== 'fire'
        ) && 
        (
            firstAttacker.secondAttack.name === 'Flammèche' ||
            firstAttacker.secondAttack.name === 'Triplattaque' ||
            firstAttacker.secondAttack.name === 'Boutefeu' ||
            firstAttacker.secondAttack.name === 'Canicule' ||
            firstAttacker.secondAttack.name === 'Crocs Feu' ||
            firstAttacker.secondAttack.name === 'Déflagration' ||
            firstAttacker.secondAttack.name === 'Lance-Flammes' ||
            firstAttacker.secondAttack.name === 'Pied Brûleur' ||
            firstAttacker.secondAttack.name === 'Poing de Feu' ||
            firstAttacker.secondAttack.name === 'Roue de Feu'
        ) &&
        (
            isStatusValidForBurning(
                secondAttacker
            )
            )
        ) {
            const randomNumber = Math.floor(Math.random() * 100) + 1;

             if (randomNumber < 10) {
                burningStatut(
                    secondAttacker
                    );
             };
                           
    };

};


export const burningStatut30PercentProbabililityForSecondAttack = 
function burningStatut30PercentProbabililityForSecondAttack(
    firstAttacker,
    secondAttacker,
    isSecondAttackActive,
    secondAttackType,
    secondAttackerType
  ) {
    if (
        isSecondAttackActive && 
        (
            (
                secondAttackType === 'fire' ||
                secondAttackType === 'water' ||
                secondAttackType === 'ice' ||
                secondAttackType === 'ground' ||
                secondAttackType === 'spectrum'
            ) &&
            secondAttackerType !== 'fire'
        ) && 
        (
            firstAttacker.secondAttack.name === 'Ébullilave' ||
            firstAttacker.secondAttack.name === 'Ébullition' ||
            firstAttacker.secondAttack.name === 'Feu Glacé' ||
            firstAttacker.secondAttack.name === 'Incendie' ||
            firstAttacker.secondAttack.name === 'Crocs Feu' ||
            firstAttacker.secondAttack.name === 'Sable Ardent' ||
            firstAttacker.secondAttack.name === 'Cortège Funèbre'
        ) &&
                (
                    isStatusValidForBurning(
                        secondAttacker
                    )
            )
        ) {
            const randomNumber = Math.floor(Math.random() * 100) + 1;

             if (randomNumber < 30) {
                burningStatut(
                    secondAttacker
                    );
            };
                           
    };

};


export const burningStatut50PercentProbabililityForSecondAttack = 
function burningStatut50PercentProbabililityForSecondAttack(
    firstAttacker,
    secondAttacker,
    isSecondAttackActive,
    secondAttackType,
    secondAttackerType
  ) {
    if (
        isSecondAttackActive && 
        (
            secondAttackType === 'fire' &&
            secondAttackerType !== 'fire'
        ) && 
        (
            firstAttacker.secondAttack.name === 'Feu Sacré' 
        ) &&
                (
                    isStatusValidForBurning(
                        secondAttacker
                    ) 
            )
        ) {
            const randomNumber = Math.floor(Math.random() * 100) + 1;

             if (randomNumber < 50) {
                burningStatut(
                    secondAttacker
                    );
            };
                           
    };

};


export const burningStatut100PercentProbabililityForSecondAttack = 
function burningStatut100PercentProbabililityForSecondAttack(
    firstAttacker,
    secondAttacker,
    isSecondAttackActive,
    secondAttackType,
    secondAttackerType
  ) {
    if (
        isSecondAttackActive && 
        (
            (
                secondAttackType === 'fire' ||
                secondAttackType === 'dark'
            ) &&
            secondAttackerType !== 'fire'
        ) && 
        (
            firstAttacker.secondAttack.name === 'Dégommage' ||
            firstAttacker.secondAttack.name === "Feu d'Enfer" ||
            firstAttacker.secondAttack.name === 'Feu Follet' 
        ) &&
                (
                    isStatusValidForBurning(
                        secondAttacker
                    ) 
            )
        ) {
            const randomNumber = Math.floor(Math.random() * 100) + 1;

             if (randomNumber < 100) {
                burningStatut(
                    secondAttacker
                    );
            };
                           
    };

};

