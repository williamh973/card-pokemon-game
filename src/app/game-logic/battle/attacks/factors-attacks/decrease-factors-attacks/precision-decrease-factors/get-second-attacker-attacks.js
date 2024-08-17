export function getSecondAttackerAttacks(secondAttacker) {
  const secondAttackerFirstAttack = secondAttacker.firstAttack;
  const secondAttackerSecondAttack = secondAttacker.secondAttack;

  return { secondAttackerFirstAttack, secondAttackerSecondAttack };
}
