import { 
    openDialogueWhenPokemonHasPoisonedStatut
} from '../../../dialogue-fight.js';


export const poisonedStatut10PercentProbabililityForSecondAttack = 
function poisonedStatut10PercentProbabililityForSecondAttack(
    firstAttacker,
    secondAttacker,
    isSecondAttackActive,
    secondAttackType,
    secondAttackerType
  ) {
    if (
        isSecondAttackActive && 
        (
            secondAttackType === 'poison' &&
            (
                secondAttackerType !== 'poison' ||
                secondAttackerType !== 'steel' 
            ) 
        ) && 
        (
            firstAttacker.secondAttack.name === 'Queue-Poison'
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

             if (randomNumber < 10) {
                secondAttacker.primaryStatut = 'poisoned'
                openDialogueWhenPokemonHasPoisonedStatut(secondAttacker); 
            }
                           
    }

};


export const poisonedStatut20PercentProbabililityForSecondAttack = 
function poisonedStatut20PercentProbabililityForSecondAttack(
    firstAttacker,
    secondAttacker,
    isSecondAttackActive,
    secondAttackType,
    secondAttackerType
  ) {
    if (
        isSecondAttackActive && 
        (
            secondAttackType === 'poison' &&
            (
                secondAttackerType !== 'poison' ||
                secondAttackerType !== 'steel' 
            ) 
        ) && 
        (
            firstAttacker.secondAttack.name === 'Double-Dard'
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

             if (randomNumber < 20) {
                secondAttacker.primaryStatut = 'poisoned'
                openDialogueWhenPokemonHasPoisonedStatut(secondAttacker); 
            }
                           
    }

};


export const poisonedStatut30PercentProbabililityForSecondAttack = 
function poisonedStatut30PercentProbabililityForSecondAttack(
    firstAttacker,
    secondAttacker,
    isSecondAttackActive,
    secondAttackType,
    secondAttackerType
  ) {
    if (
        isSecondAttackActive && 
        (
            secondAttackType === 'poison' &&
            (
                secondAttackerType !== 'poison' ||
                secondAttackerType !== 'steel' 
            ) 
        ) && 
        (
            firstAttacker.secondAttack.name === 'Bomb-Beurk' ||
            firstAttacker.secondAttack.name === 'Crochetvenin' ||
            firstAttacker.secondAttack.name === 'Dard-Venin' ||
            firstAttacker.secondAttack.name === 'Détricanon' ||
            firstAttacker.secondAttack.name === 'Detritus' ||
            firstAttacker.secondAttack.name === 'Direct Toxik'
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
                secondAttacker.primaryStatut = 'poisoned'
                openDialogueWhenPokemonHasPoisonedStatut(secondAttacker); 
            }
                           
    }

};


export const poisonedStatut40PercentProbabililityForSecondAttack = 
function poisonedStatut40PercentProbabililityForSecondAttack(
    firstAttacker,
    secondAttacker,
    isSecondAttackActive,
    secondAttackType,
    secondAttackerType
  ) {
    if (
        isSecondAttackActive && 
        (
            secondAttackType === 'poison' &&
            (
                secondAttackerType !== 'poison' ||
                secondAttackerType !== 'steel' 
            ) 
        ) && 
        (
            firstAttacker.secondAttack.name === 'Puredpois'
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

             if (randomNumber < 40) {
                secondAttacker.primaryStatut = 'poisoned'
                openDialogueWhenPokemonHasPoisonedStatut(secondAttacker); 
            }
                           
    }

};


export const poisonedStatut100PercentProbabililityForSecondAttack = 
function poisonedStatut100PercentProbabililityForSecondAttack(
    firstAttacker,
    secondAttacker,
    isSecondAttackActive,
    secondAttackType,
    secondAttackerType
  ) {
    if (
        isSecondAttackActive && 
        (
            secondAttackType === 'poison' &&
            (
                secondAttackerType !== 'poison' ||
                secondAttackerType !== 'steel' 
            ) 
        ) && 
        (
            firstAttacker.secondAttack.name === 'Gaz Toxik' ||
            firstAttacker.secondAttack.name === 'Toxik'
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
                secondAttacker.primaryStatut = 'poisoned'
                openDialogueWhenPokemonHasPoisonedStatut(secondAttacker); 
            }
                           
    }

};