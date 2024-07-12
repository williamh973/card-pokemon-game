export function baseDamage(firstAttacker, attackStrength, secondAttacker) {
  return (
    (((2 * firstAttacker.stats.attack) / secondAttacker.stats.defense) *
      attackStrength *
      (firstAttacker.stats.specialAtt / secondAttacker.stats.specialDef)) /
    20
  );
}
