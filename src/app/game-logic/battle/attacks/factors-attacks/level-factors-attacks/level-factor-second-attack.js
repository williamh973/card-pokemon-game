export function levelFactorForSecondAttack(
  firstAttacker,
  isSecondAttackActive,
  damages
) {
  if (
    isSecondAttackActive &&
    (firstAttacker.secondAttack.name === "Frappe Atlas" ||
      firstAttacker.secondAttack.name === "Ombre Nocturne")
  ) {
    const levelOfFirstAttacker = firstAttacker.level;
    damages = levelOfFirstAttacker;

    return damages;
  }
}
