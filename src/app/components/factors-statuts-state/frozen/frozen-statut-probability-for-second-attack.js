import { 
    openDialogueWhenPokemonHasFrozenStatut
} from '../../dialogue-fight.js';


export const frozenStatut10PercentProbabililityForSecondAttack = 
function frozenStatut10PercentProbabililityForSecondAttack(
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
                secondAttackType === 'ice' ||
                secondAttackType === 'normal'
                ) 
        ) && 
        (
            firstAttacker.secondAttack.name === 'Blizzard' ||
            firstAttacker.secondAttack.name === 'Crocs Givre' ||
            firstAttacker.secondAttack.name === 'Laser Glace' ||
            firstAttacker.secondAttack.name === 'Poinglace' ||
            firstAttacker.secondAttack.name === 'Poudreuse'  ||
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
                secondAttacker.primaryStatut = 'frozen'
                openDialogueWhenPokemonHasFrozenStatut(secondAttacker); 
            };
                           
    };

};

