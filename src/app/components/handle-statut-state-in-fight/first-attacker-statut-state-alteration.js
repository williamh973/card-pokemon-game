
export const firstAttackerStatutAlteration = 
function firstAttackerStatutAlteration(firstAttacker) {
   if (
      firstAttacker.primaryStatut === 'burning' ||
      firstAttacker.primaryStatut === 'poisoned'
      ) {

      let percentage = 12.5;
      let decreaseValue = (percentage / 100) * firstAttacker.stats.hpMax;
      const newDecreaseValue = Math.round(decreaseValue);

      firstAttacker.stats.hp -= newDecreaseValue;
      return firstAttacker.stats.hp;

    };

};