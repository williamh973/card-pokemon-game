import { 
    openDialogueWhenPokemonHasBurningStatut
} from '../../../dialogue-fight.js';



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
            secondAttacker.primaryStatut !== 'burning' &&
            secondAttacker.primaryStatut !== 'paralyzed' &&
            secondAttacker.primaryStatut !== 'sleeping' &&
            secondAttacker.primaryStatut !== 'poisoned'
            )
        ) {
            const randomNumber = Math.floor(Math.random() * 100) + 1;

             if (randomNumber < 10) {
                secondAttacker.primaryStatut = 'burning'
                openDialogueWhenPokemonHasBurningStatut(secondAttacker); 
             }
                           
    }

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
                    secondAttacker.primaryStatut !== 'burning' &&
                    secondAttacker.primaryStatut !== 'paralyzed' &&
                    secondAttacker.primaryStatut !== 'asleep' &&
                    secondAttacker.primaryStatut !== 'poisoned' &&
                    secondAttacker.primaryStatut !== 'frozen' 
            )
        ) {
            const randomNumber = Math.floor(Math.random() * 100) + 1;

             if (randomNumber < 30) {
                secondAttacker.primaryStatut = 'burning'
                openDialogueWhenPokemonHasBurningStatut(secondAttacker); 
            }
                           
    }

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
                    secondAttacker.primaryStatut !== 'burning' &&
                    secondAttacker.primaryStatut !== 'paralyzed' &&
                    secondAttacker.primaryStatut !== 'asleep' &&
                    secondAttacker.primaryStatut !== 'poisoned' &&
                    secondAttacker.primaryStatut !== 'frozen' 
            )
        ) {
            const randomNumber = Math.floor(Math.random() * 100) + 1;

             if (randomNumber < 50) {
                secondAttacker.primaryStatut = 'burning'
                openDialogueWhenPokemonHasBurningStatut(secondAttacker); 
            }
                           
    }

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
                    secondAttacker.primaryStatut !== 'burning' &&
                    secondAttacker.primaryStatut !== 'paralyzed' &&
                    secondAttacker.primaryStatut !== 'asleep' &&
                    secondAttacker.primaryStatut !== 'poisoned' &&
                    secondAttacker.primaryStatut !== 'frozen' 
            )
        ) {
            const randomNumber = Math.floor(Math.random() * 100) + 1;

             if (randomNumber < 100) {
                secondAttacker.primaryStatut = 'burning'
                openDialogueWhenPokemonHasBurningStatut(secondAttacker); 
            }
                           
    }

};

