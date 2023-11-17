
import { openDialogueWhenPokemonMakesAttackDecrease2pFactorAttack } from '../../../../dialogue-fight.js';

export const attackDecrease2pFactorForFirstAttack = 
function attackDecrease2pFactorForFirstAttack(
    firstAttacker, secondAttacker, isFirstAttackActive
  ) {
    if (
      (
        firstAttacker.firstAttack.name === "Rugissement" ||
        firstAttacker.firstAttack.name === 'Surpuissance'
        ) && isFirstAttackActive
        ) {
          console.log("ca passe");
          console.log(secondAttacker.name, secondAttacker.stats.attack, "avant");
       const decreasingValue = 2;
       const newdecreasingValue = secondAttacker.stats.attack -= decreasingValue;
       openDialogueWhenPokemonMakesAttackDecrease2pFactorAttack(secondAttacker);
       console.log(secondAttacker.name, secondAttacker.stats.attack, "après");
       return newdecreasingValue;
    }
        
};
