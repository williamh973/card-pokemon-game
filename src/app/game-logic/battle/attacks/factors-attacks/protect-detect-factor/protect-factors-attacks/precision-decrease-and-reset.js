let protectCount = 0;

export function pokemonDecreasePrecision(firstAttackerAttack) {
  protectCount++;
  firstAttackerAttack.precision -= 15;
  resetPrecisionAttack(firstAttackerAttack);
}

function resetPrecisionAttack(firstAttackerAttack) {
  if (protectCount === 5) {
    protectCount = 0;
    firstAttackerAttack.precision = firstAttackerAttack.precisionMax;
    console.log(
      "precision",
      firstAttackerAttack.precision,
      "precisionMax",
      firstAttackerAttack.precisionMax
    );
  }
}
