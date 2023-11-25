export const getFirstAttackerAlterationStatesDelays = (firstAttacker) => {

  const firstAttackerState = firstAttacker.primaryStatut;
  const firstAttackerStateDelay = alterationStatesDelay(firstAttackerState); 

  return {
    firstAttackerState,
    firstAttackerStateDelay
  };
};

 
export const getSecondAttackerAlterationStatesDelays = (secondAttacker) => {
  const secondAttackerState = secondAttacker.primaryStatut;
  const secondAttackerStateDelay = alterationStatesDelay(secondAttackerState); 

  return {
    secondAttackerState,
    secondAttackerStateDelay
  };
};
 
 
 
 const alterationStatesDelay = 
 (state) => {
    switch (state) {
      case 'burning':
          return 3000; 
          case 'otherState':
            return 0;
          default:
            return 0; 
    }
  };
  
  export const sleepStatutAlteredAnimation =
async function sleepStatutAlteredAnimation(state)  {
    return new Promise(resolve => setTimeout(resolve, state));
  };

