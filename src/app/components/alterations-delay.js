export const getFirstAttackerAlterationStatesDelays = (firstAttacker) => {

  const firstAttackerState = firstAttacker.primaryStatut;
  const firstAttackerSecondState = firstAttacker.secondaryStatut;

  const firstAttackerStateDelay = alterationStatesDelay(firstAttackerState); 
  const firstAttackerSecondStateDelay = alterationStatesDelay(firstAttackerSecondState);

  return {
    firstAttackerState,
    firstAttackerSecondState,
    firstAttackerStateDelay,
    firstAttackerSecondStateDelay
  };
};

 
export const getSecondAttackerAlterationStatesDelays = (secondAttacker) => {
  const secondAttackerState = secondAttacker.primaryStatut;
  const secondAttackerSecondState = secondAttacker.secondaryStatut;

  const secondAttackerStateDelay = alterationStatesDelay(secondAttackerState); 
  const secondAttackerSecondStateDelay = alterationStatesDelay(secondAttackerSecondState); 

  return {
    secondAttackerState,
    secondAttackerSecondState,
    secondAttackerStateDelay,
    secondAttackerSecondStateDelay
  };
};
 
 
 
 const alterationStatesDelay = 
 (state) => {
    switch (state) {
      case 'burning':
          return 4000; 
          case 'poisoned':
            return 4000;
            case 'asleep':
              return 4000;
              case 'frozen':
                return 4000;
                case 'paralyzed':
                  return 4000;
                  case 'confusing':
                    return 4000;
                default:
                  return 0; 
    }
  };


  
  export const sleepStatutAlteredAnimation =
async function sleepStatutAlteredAnimation(state)  {
    return new Promise(resolve => setTimeout(resolve, state));
  };

