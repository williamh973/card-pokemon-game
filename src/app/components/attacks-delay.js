export const getAttackDelays = 
(firstAttacker, secondAttacker) => {

    const firstAttackerFirstAttackName = 
    firstAttacker.firstAttack.name;

    const firstAttackerSecondAttackName = 
    firstAttacker.secondAttack.name;
  
    const secondAttackerFirstAttackName = 
    secondAttacker.firstAttack.name;

    const secondAttackerSecondAttackName = 
    secondAttacker.secondAttack.name;

  
    const firstAttackerFirstAttackDelay = 
    getAttackDelay(firstAttackerFirstAttackName);

    const firstAttackerSecondAttackDelay = 
    getAttackDelay(firstAttackerSecondAttackName);
  
    const secondAttackerFirstAttackDelay = 
    getAttackDelay(secondAttackerFirstAttackName);

    const secondAttackerSecondAttackDelay = 
    getAttackDelay(secondAttackerSecondAttackName);
  
    return {
      firstAttackerFirstAttackName,
      firstAttackerSecondAttackName,
      secondAttackerFirstAttackName,
      secondAttackerSecondAttackName,

      firstAttackerFirstAttackDelay,
      firstAttackerSecondAttackDelay,
      secondAttackerFirstAttackDelay,
      secondAttackerSecondAttackDelay,
    };

  };
 
 
 
 const getAttackDelay = 
 (attackName) => {
    switch (attackName) {
      case 'Charge':
        return 3000;
      default:
        return 3000;
    }
  };
  
  export const sleep = 
  (attackName) => {
    return new Promise(resolve => setTimeout(resolve, attackName));
  };