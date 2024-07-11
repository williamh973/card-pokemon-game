export function levelFactorForFirstAttack(
  firstAttacker,
  isFirstAttackActive,
  damages
) {
  if (
    isFirstAttackActive &&
    (firstAttacker.firstAttack.name === "Frappe Atlas" ||
      firstAttacker.firstAttack.name === "Ombre Nocturne")
  ) {
    const levelOfFirstAttacker = firstAttacker.level;
    damages = levelOfFirstAttacker;
    return damages;
  }
}
