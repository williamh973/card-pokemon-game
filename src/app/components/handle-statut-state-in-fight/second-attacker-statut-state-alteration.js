 export const secondAttackerStatutAlteration = 
 function secondAttackerStatutAlteration(secondAttacker) {

  if (
    secondAttacker.primaryStatut === 'burning' ||
    secondAttacker.primaryStatut === 'poisoned'
    ) {

    let percentage = 12.5;
    let decreaseValue = (percentage / 100) * secondAttacker.stats.hpMax;
    const newDecreaseValue = Math.round(decreaseValue);
 
    secondAttacker.stats.hp -= newDecreaseValue;
    return secondAttacker.stats.hp;
  };

};