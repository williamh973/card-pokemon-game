export function levelFactorForSecondAttack(
  firstAttacker,
  isSecondAttackActive,
  degats
) {
  if (
    isSecondAttackActive &&
    (firstAttacker.secondAttack.name === "Frappe Atlas" ||
      firstAttacker.secondAttack.name === "Ombre Nocturne")
  ) {
    const levelOfFirstAttacker = firstAttacker.level;
    degats = levelOfFirstAttacker;

    return degats;
  }
}
