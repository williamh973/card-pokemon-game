import { 
    confusingStatut
} from './confusing-statut.js';

import { 
    openDialogueWhenPokemonAlreadyConfused
  } from '../../dialogue-fight.js';
  


export const confusingStatut10PercentProbabililityForFirstAttack = 
function confusingStatut10PercentProbabililityForFirstAttack(
    firstAttacker,
    secondAttacker,
    isFirstAttackActive,
    firstAttackType
  ) {
    if (
        isFirstAttackActive && 
        (
            (
                firstAttackType === 'psy'
                ) 
    
        ) && 
        (
            firstAttacker.firstAttack.name === 'Choc Mental' ||
            firstAttacker.firstAttack.name === 'Rafale Psy'
            
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



export const confusingStatut20PercentProbabililityForFirstAttack = 
function confusingStatut20PercentProbabililityForFirstAttack(
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
                firstAttackType === 'water'
                ) 
    
        ) && 
        (
            firstAttacker.firstAttack.name === 'Escalade' ||
            firstAttacker.firstAttack.name === 'Vibraqua' ||
            firstAttacker.firstAttack.name === 'Uppercut' 
            
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


export const confusingStatut100PercentProbabililityForFirstAttack = 
function confusingStatut100PercentProbabililityForFirstAttack(
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
                firstAttackType === 'fairy' ||
                firstAttackType === 'dark' ||
                firstAttackType === 'spectrum'
                )
        ) && 
        (
            firstAttacker.firstAttack.name === "Danse-Folle" ||
            firstAttacker.firstAttack.name === 'Doux Baiser' ||
            firstAttacker.firstAttack.name === 'Dynamopoing' ||
            firstAttacker.firstAttack.name === 'Flatterie' ||
            firstAttacker.firstAttack.name === "Onde Folie" ||
            firstAttacker.firstAttack.name === 'Vantardise' ||
            firstAttacker.firstAttack.name === 'Ultrason'
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
