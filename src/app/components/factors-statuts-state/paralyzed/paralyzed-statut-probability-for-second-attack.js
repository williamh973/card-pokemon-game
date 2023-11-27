import { 
    openDialogueWhenPokemonHasParalyzedStatut
} from '../../dialogue-fight.js';


export const paralyzedStatut10PercentProbabililityForSecondAttack = 
function paralyzedStatut10PercentProbabililityForSecondAttack(
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
                secondAttackType === 'electric' ||
                secondAttackType === 'normal'
                ) &&
            (
                secondAttackerType !== 'rock' &&
                secondAttackerType !== 'electric' 
            ) 
        ) && 
        (
            firstAttacker.secondAttack.name === 'Crocs Eclair' ||
            firstAttacker.secondAttack.name === 'Eclair' ||
            firstAttacker.secondAttack.name === 'Poing-Eclair' ||
            firstAttacker.secondAttack.name === 'Tonnerre' ||
            firstAttacker.secondAttack.name === 'Triplattaque' 
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
                secondAttacker.primaryStatut = 'paralyzed'
                openDialogueWhenPokemonHasParalyzedStatut(secondAttacker); 
            }
                           
    }

};


export const paralyzedStatut30PercentProbabililityForSecondAttack = 
function paralyzedStatut30PercentProbabililityForSecondAttack(
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
                secondAttackType === 'electric' ||
                secondAttackType === 'normal' ||
                secondAttackType === 'dragon' ||
                secondAttackType === 'fight' ||
                secondAttackType === 'flight'
                ) &&
            (
                secondAttackerType !== 'rock' &&
                secondAttackerType !== 'electric'
            ) 
        ) && 
        (
            firstAttacker.secondAttack.name === "Coup d'jus" ||
            firstAttacker.secondAttack.name === 'Dracosouffle' ||
            firstAttacker.secondAttack.name === 'Etincelle' ||
            firstAttacker.secondAttack.name === 'Fatal Foudre' ||
            firstAttacker.secondAttack.name === 'Force Cachée' ||
            firstAttacker.secondAttack.name === 'Forte-Paume' ||
            firstAttacker.secondAttack.name === 'Lechouille' ||
            firstAttacker.secondAttack.name === 'Plaquage' ||
            firstAttacker.secondAttack.name === 'Rebond'
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
                secondAttacker.primaryStatut = 'paralyzed'
                openDialogueWhenPokemonHasParalyzedStatut(secondAttacker); 
            }
                           
    }

};


export const paralyzedStatut100PercentProbabililityForSecondAttack = 
function paralyzedStatut100PercentProbabililityForSecondAttack(
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
                secondAttackType === 'electric' ||
                secondAttackType === 'dark' ||
                secondAttackType === 'plant' 
                )
                &&
            (
                secondAttackerType !== 'rock' &&
                secondAttackerType !== 'electric' 
            ) 
        ) && 
        (
            firstAttacker.secondAttack.name === 'Cage-Eclair' ||
            firstAttacker.secondAttack.name === 'Dégommage' ||
            firstAttacker.secondAttack.name === 'Elecanon' ||
            firstAttacker.secondAttack.name === 'Para-Spore'
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
                secondAttacker.primaryStatut = 'paralyzed'
                openDialogueWhenPokemonHasParalyzedStatut(secondAttacker); 
            }
                           
    }

};

