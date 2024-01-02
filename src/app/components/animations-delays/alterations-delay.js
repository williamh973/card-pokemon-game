export const getFirstAttackerPrimaryStatutAlterationDelays = (firstAttacker) => {
  const firstAttackerState = firstAttacker.primaryStatut;
  const firstAttackerStateDelay = alterationStatesDelay(firstAttackerState); 

  return {
    firstAttackerState,
    firstAttackerStateDelay
  };
};

export const getFirstAttackerConfusingStatutAlterationDelays = (firstAttacker) => {
  const firstAttackerSecondStateConfused = firstAttacker.secondaryStatut.isConfused;
  const firstAttackerSecondStateConfusedDelay = alterationSecondaryStatutDelay(firstAttackerSecondStateConfused); 
    
    return {
      firstAttackerSecondStateConfused,
      firstAttackerSecondStateConfusedDelay
    };
    
};

 
export const getFirstAttackerCursedStatutAlterationDelays = (firstAttacker) => {
  const firstAttackerSecondStateCursed = firstAttacker.secondaryStatut.isCursed;
  const firstAttackerSecondStateCursedDelay = alterationSecondaryStatutDelay(firstAttackerSecondStateCursed); 

    return {
      firstAttackerSecondStateCursed,
      firstAttackerSecondStateCursedDelay
    };
    
}

export const getFirstAttackerScaredStatutAlterationDelays = (firstAttacker) => {
  const firstAttackerSecondStateScared = firstAttacker.secondaryStatut.isScared;
  const firstAttackerSecondStateScaredDelay = alterationSecondaryStatutDelay(firstAttackerSecondStateScared); 
    
    return {
      firstAttackerSecondStateScared,
      firstAttackerSecondStateScaredDelay
    };
  
};







export const getSecondAttackerPrimaryStatutAlterationDelays = (secondAttacker) => {
  const secondAttackerState = secondAttacker.primaryStatut;
  const secondAttackerStateDelay = alterationStatesDelay(secondAttackerState); 

  return {
    secondAttackerState,
    secondAttackerStateDelay
  };
};


export const getSecondAttackerConfusingStatutAlterationDelays = (secondAttacker) => {
  const secondAttackerSecondStateConfused = secondAttacker.secondaryStatut.isConfused;
  const secondAttackerSecondStateConfusedDelay = alterationSecondaryStatutDelay(secondAttackerSecondStateConfused); 
    
    return {
      secondAttackerSecondStateConfused,
      secondAttackerSecondStateConfusedDelay
    };
    
};

 
export const getSecondAttackerCursedStatutAlterationDelays = (secondAttacker) => {
  const secondAttackerSecondStateCursed = secondAttacker.secondaryStatut.isCursed;
  const secondAttackerSecondStateCursedDelay = alterationSecondaryStatutDelay(secondAttackerSecondStateCursed); 

    return {
      secondAttackerSecondStateCursed,
      secondAttackerSecondStateCursedDelay
    };
    
}

export const getSecondAttackerScaredStatutAlterationDelays = (secondAttacker) => {
  const secondAttackerSecondStateScared = secondAttacker.secondaryStatut.isScared;
  const secondAttackerSecondStateScaredDelay = alterationSecondaryStatutDelay(secondAttackerSecondStateScared); 
    
    return {
      secondAttackerSecondStateScared,
      secondAttackerSecondStateScaredDelay
    };
  
};



 
 const alterationStatesDelay = 
 (state) => {
    switch (state) {
      case 'burning':
        console.log("statut principal", state);  
          return 4000; 
          case 'poisoned':
            console.log("statut principal", state);  
            return 4000;
            case 'asleep':
              console.log("statut principal", state);  
              return 4000;
              case 'frozen':
                console.log("statut principal", state);  
                return 4000;
                case 'paralyzed':
                  console.log("statut principal", state);  
                return 4000;
                    case 'normal':
                      console.log("statut principal", state);
                      return 0; 
    }
  };

  const alterationSecondaryStatutDelay = 
  (state) => {
    switch (state) {
      case true:
        return 4000;
        case false:
          return 0; 
    }
  };

  

export const sleepStatutAlteredAnimation =
async function sleepStatutAlteredAnimation(state)  {
  console.log("temps d'animation", state);
    return new Promise(resolve => setTimeout(resolve, state));
  };

