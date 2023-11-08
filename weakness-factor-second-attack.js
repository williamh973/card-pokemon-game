export const weaknessFactorForSecondAttack = function weaknessFactorForSecondAttack(secondAttackType, secondAttackerType) {

if (
  (
    secondAttackerType === "water" &&
    secondAttackType === "plant"
  ) ||
  (
    secondAttackerType === "water" &&
    secondAttackType === "electric"
  ) ||
  (
    secondAttackerType === "plant" &&
    secondAttackType === "fire"
  ) ||
  (
    secondAttackerType === "plant" &&
    secondAttackType === "flight"
  ) ||
  (
    secondAttackerType === "plant" &&
    secondAttackType === "insect"
  ) ||
  (
    secondAttackerType === "plant" &&
    secondAttackType === "poison"
  ) ||
  (
    secondAttackerType === "plant" &&
    secondAttackType === "ice"
  ) ||
  (
    secondAttackerType === "fire" &&
    secondAttackType === "water"
  ) ||
  (
    secondAttackerType === "fire" &&
    secondAttackType === "rock"
  ) ||
  (
    secondAttackerType === "fire" &&
    secondAttackType === "ground"
  ) ||
  (
    secondAttackerType === "electric" &&
    secondAttackType === "ground"
  ) ||
  (
    secondAttackerType === "flight" &&
    secondAttackType === "electric"
  ) ||
  (
    secondAttackerType === "flight" &&
    secondAttackType === "rock"
  ) ||
  (
    secondAttackerType === "flight" &&
    secondAttackType === "ice"
  ) ||
  (
    secondAttackerType === "psy" &&
    secondAttackType === "insect"
  ) ||
  (
    secondAttackerType === "psy" &&
    secondAttackType === "spectrum"
  ) ||
  (
    secondAttackerType === "psy" &&
    secondAttackType === "dark"
  ) ||
  (
    secondAttackerType === "rock" &&
    secondAttackType === "water"
  ) ||
  (
    secondAttackerType === "rock" &&
    secondAttackType === "plant"
  ) ||
  (
    secondAttackerType === "rock" &&
    secondAttackType === "fight"
  ) ||
  (
    secondAttackerType === "rock" &&
    secondAttackType === "steel"
  ) ||
  (
    secondAttackerType === "rock" &&
    secondAttackType === "ground"
  ) ||
  (
    secondAttackerType === "ground" &&
    secondAttackType === "water"
  ) ||
  (
    secondAttackerType === "ground" &&
    secondAttackType === "plant"
  ) ||
  (
    secondAttackerType === "ground" &&
    secondAttackType === "ice"
  ) ||
  (
    secondAttackerType === "ice" &&
    secondAttackType === "fight"
  ) ||
  (
    secondAttackerType === "ice" &&
    secondAttackType === "steel"
  ) ||
  (
    secondAttackerType === "ice" &&
    secondAttackType === "fire"
  ) ||
  (
    secondAttackerType === "ice" &&
    secondAttackType === "rock"
  ) ||
  (
    secondAttackerType === "steel" &&
    secondAttackType === "fight"
  ) ||
  (
    secondAttackerType === "steel" &&
    secondAttackType === "fire"
  ) ||
  (
    secondAttackerType === "steel" &&
    secondAttackType === "ground"
  ) ||
  (
    secondAttackerType === "poison" &&
    secondAttackType === "psy"
  ) ||
  (
    secondAttackerType === "poison" &&
    secondAttackType === "ground"
  ) ||
  (
    secondAttackerType === "spectrum" &&
    secondAttackType === "spectrum"
  ) ||
  (
    secondAttackerType === "spectrum" &&
    secondAttackType === "dark"
  ) ||
  (
    secondAttackerType === "dark" &&
    secondAttackType === "fight"
  ) ||
  (
    secondAttackerType === "dark" &&
    secondAttackType === "fairy"
  ) ||
  (
    secondAttackerType === "dark" &&
    secondAttackType === "insect"
  ) ||
  (
    secondAttackerType === "insect" &&
    secondAttackType === "flight"
  ) ||
  (
    secondAttackerType === "insect" &&
    secondAttackType === "fire"
  ) ||
  (
    secondAttackerType === "insect" &&
    secondAttackType === "rock"
  ) ||
  (
    secondAttackerType === "fight" &&
    secondAttackType === "flight"
  ) ||
  (
    secondAttackerType === "fight" &&
    secondAttackType === "psy"
  ) ||
  (
    secondAttackerType === "fight" &&
    secondAttackType === "fairy"
  ) ||
  (
    secondAttackerType === "normal" &&
    secondAttackType === "fight"
  ) ||
  (
    secondAttackerType === "dragon" &&
    secondAttackType === "ice"
  ) ||
  (
    secondAttackerType === "dragon" &&
    secondAttackType === "dragon"
  ) ||
  (
    secondAttackerType === "dragon" &&
    secondAttackType === "fairy"
  ) ||
  (
    secondAttackerType === "fairy" &&
    secondAttackType === "steel"
  ) ||
  (
    secondAttackerType === "fairy" &&
    secondAttackType === "poison"
  )
    ) {
      return 5;
    } else {
      return 1;
    }
};