import { 
    openDialogueWhenPokemonHasPoisonedStatut
} from '../../../dialogue-fight.js';

import { 
    isStatusValidForPoisoned
} from "./status-valid-for-poisoned.js";


export const poisonedStatut10PercentProbabililityForFirstAttack = 
function poisonedStatut10PercentProbabililityForFirstAttack(
    firstAttacker,
    secondAttacker,
    isFirstAttackActive,
    firstAttackType,
    secondAttackerType
  ) {
    if (
        isFirstAttackActive && 
        (
            firstAttackType === 'poison' &&
            (
                secondAttackerType !== 'poison' ||
                secondAttackerType !== 'steel' 
            ) 
        ) && 
        (
            firstAttacker.firstAttack.name === 'Queue-Poison'
        ) &&
        (
            isStatusValidForPoisoned(
                secondAttacker
            )
            )
        ) {
            const randomNumber = Math.floor(Math.random() * 100) + 1;

             if (randomNumber < 10) {
                secondAttacker.primaryStatut = 'poisoned'
                openDialogueWhenPokemonHasPoisonedStatut(secondAttacker); 
            }
                           
    }

};


export const poisonedStatut20PercentProbabililityForFirstAttack = 
function poisonedStatut20PercentProbabililityForFirstAttack(
    firstAttacker,
    secondAttacker,
    isFirstAttackActive,
    firstAttackType,
    secondAttackerType
  ) {
    if (
        isFirstAttackActive && 
        (
            firstAttackType === 'poison' &&
            (
                secondAttackerType !== 'poison' ||
                secondAttackerType !== 'steel' 
            ) 
        ) && 
        (
            firstAttacker.firstAttack.name === 'Double-Dard'
        ) &&
        (
            isStatusValidForPoisoned(
                secondAttacker
            )
            )
        ) {
            const randomNumber = Math.floor(Math.random() * 100) + 1;

             if (randomNumber < 20) {
                secondAttacker.primaryStatut = 'poisoned'
                openDialogueWhenPokemonHasPoisonedStatut(secondAttacker); 
            }
                           
    }

};


export const poisonedStatut30PercentProbabililityForFirstAttack = 
function poisonedStatut30PercentProbabililityForFirstAttack(
    firstAttacker,
    secondAttacker,
    isFirstAttackActive,
    firstAttackType,
    secondAttackerType
  ) {
    if (
        isFirstAttackActive && 
        (
            firstAttackType === 'poison' &&
            (
                secondAttackerType !== 'poison' ||
                secondAttackerType !== 'steel' 
            ) 
        ) && 
        (
            firstAttacker.firstAttack.name === 'Bomb-Beurk' ||
            firstAttacker.firstAttack.name === 'Crochetvenin' ||
            firstAttacker.firstAttack.name === 'Dard-Venin' ||
            firstAttacker.firstAttack.name === 'Détricanon' ||
            firstAttacker.firstAttack.name === 'Détritus' ||
            firstAttacker.firstAttack.name === 'Direct Toxik'
        ) &&
        (
            isStatusValidForPoisoned(
                secondAttacker
            )
            )
        ) {
            const randomNumber = Math.floor(Math.random() * 100) + 1;

             if (randomNumber < 30) {
                secondAttacker.primaryStatut = 'poisoned'
                openDialogueWhenPokemonHasPoisonedStatut(secondAttacker); 
            }
                           
    }

};


export const poisonedStatut40PercentProbabililityForFirstAttack = 
function poisonedStatut40PercentProbabililityForFirstAttack(
    firstAttacker,
    secondAttacker,
    isFirstAttackActive,
    firstAttackType,
    secondAttackerType
  ) {
    if (
        isFirstAttackActive && 
        (
            firstAttackType === 'poison' &&
            (
                secondAttackerType !== 'poison' ||
                secondAttackerType !== 'steel' 
            ) 
        ) && 
        (
            firstAttacker.firstAttack.name === 'Puredpois'
        ) &&
        (
            isStatusValidForPoisoned(
                secondAttacker
            )
            )
        ) {
            const randomNumber = Math.floor(Math.random() * 100) + 1;

             if (randomNumber < 40) {
                secondAttacker.primaryStatut = 'poisoned'
                openDialogueWhenPokemonHasPoisonedStatut(secondAttacker); 
            }
                           
    }

};


export const poisonedStatut100PercentProbabililityForFirstAttack = 
function poisonedStatut100PercentProbabililityForFirstAttack(
    firstAttacker,
    secondAttacker,
    isFirstAttackActive,
    firstAttackType,
    secondAttackerType
  ) {
    if (
        isFirstAttackActive && 
        (
            firstAttackType === 'poison' &&
            (
                secondAttackerType !== 'poison' ||
                secondAttackerType !== 'steel' 
            ) 
        ) && 
        (
            firstAttacker.firstAttack.name === 'Gaz Toxik' ||
            firstAttacker.firstAttack.name === 'Toxik'
        ) &&
        (
            isStatusValidForPoisoned(
                secondAttacker
            )
            )
        ) {
            const randomNumber = Math.floor(Math.random() * 100) + 1;

             if (randomNumber < 100) {
                secondAttacker.primaryStatut = 'poisoned'
                openDialogueWhenPokemonHasPoisonedStatut(secondAttacker); 
            }
                           
    }

};