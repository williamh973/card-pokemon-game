export const isStatusValidForAsleep = 
function isStatusValidForAsleep(secondAttacker) {
    return (
        secondAttacker.primaryStatut !== 'burning' &&
        secondAttacker.primaryStatut !== 'paralyzed' &&
        secondAttacker.primaryStatut !== 'asleep' &&
        secondAttacker.primaryStatut !== 'poisoned' &&
        secondAttacker.primaryStatut !== 'frozen' 
    );
  }