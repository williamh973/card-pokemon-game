export let isBurningStatut = false;

export const firstAttackerStatutAlteration = 
function firstAttackerStatutAlteration(firstAttacker) {

      isBurningStatut = true;

      let percentage = 12.5;
      let decreaseValue = (percentage / 100) * firstAttacker.stats.hpMax;
      const newDecreaseValue = Math.round(decreaseValue);

      firstAttacker.stats.hp -= newDecreaseValue;
      return firstAttacker.stats.hp;

};