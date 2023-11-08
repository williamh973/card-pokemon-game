export const ineffectiveFactorForFirstAttack = function ineffectiveFactorForFirstAttack(firstAttackType, secondAttackerType) {

if (
  (
    secondAttackerType === "spectrum" &&
    firstAttackType === "normal"
  ) ||
  (
    secondAttackerType === "spectrum" &&
    firstAttackType === "fight"
  ) ||
  (
    secondAttackerType === "steel" &&
    firstAttackType === "poison"
  ) ||
  (
    secondAttackerType === "flight" &&
    firstAttackType === "ground"
  ) ||
  (
    secondAttackerType === "plant" &&
    firstAttackType === "water"
  ) ||
  (
    secondAttackerType === "normal" &&
    firstAttackType === "spectrum"
  ) ||
  (
    secondAttackerType === "dark" &&
    firstAttackType === "psy"
  ) ||
  (
    secondAttackerType === "fairy" &&
    firstAttackType === "dragon"
  ) ||
  (
    secondAttackerType === "rock" &&
    firstAttackType === "electric"
  )
  ) {
    return 0;
  } else {
    return 1;
  }
};



export const ineffectiveFactorForSecondAttack = function ineffectiveFactorForSecondAttack(secondAttackType, secondAttackerType) {

if (
  (
    secondAttackerType === "spectrum" &&
    secondAttackType === "normal"
  ) ||
  (
    secondAttackerType === "spectrum" &&
    secondAttackType === "fight"
  ) ||
  (
    secondAttackerType === "steel" &&
    secondAttackType === "poison"
  ) ||
  (
    secondAttackerType === "flight" &&
    secondAttackType === "ground"
  ) ||
  (
    secondAttackerType === "plant" &&
    secondAttackType === "water"
  ) ||
  (
    secondAttackerType === "normal" &&
    secondAttackType === "spectrum"
  ) ||
  (
    secondAttackerType === "dark" &&
    secondAttackType === "psy"
  ) ||
  (
    secondAttackerType === "fairy" &&
    secondAttackType === "dragon"
  ) ||
  (
    secondAttackerType === "rock" &&
    secondAttackType === "electric"
  )
  ) {
    return 0;
  } else {
    return 1;
  }
};