export const levelFactorForFirstAttack = 
function levelFactorForFirstAttack(
    firstAttacker,
    isFirstAttackActive,
    degats
  ) {
    if (
        isFirstAttackActive && 
        (
            firstAttacker.firstAttack.name === 'Frappe Atlas' ||
            firstAttacker.firstAttack.name === 'Ombre Nocturne' 
        )
        ) {
           const levelOfFirstAttacker = firstAttacker.level;
           degats = levelOfFirstAttacker;
           return degats;       
    };

};