export const weaknessFactorForFirstAttack = function weaknessFactorForFirstAttack(firstAttackType, secondAttackerType) {

if (
  (
    secondAttackerType === "water" &&
    firstAttackType === "plant"
  ) ||
  (
    secondAttackerType === "water" &&
    firstAttackType === "electric"
  ) ||
  (
    secondAttackerType === "plant" &&
    firstAttackType === "fire"
  ) ||
  (
    secondAttackerType === "plant" &&
    firstAttackType === "flight"
  ) ||
  (
    secondAttackerType === "plant" &&
    firstAttackType === "insect"
  ) ||
  (
    secondAttackerType === "plant" &&
    firstAttackType === "poison"
  ) ||
  (
    secondAttackerType === "plant" &&
    firstAttackType === "ice"
  ) ||
  (
    secondAttackerType === "fire" &&
    firstAttackType === "water"
  ) ||
  (
    secondAttackerType === "fire" &&
    firstAttackType === "rock"
  ) ||
  (
    secondAttackerType === "fire" &&
    firstAttackType === "ground"
  ) ||
  (
    secondAttackerType === "electric" &&
    firstAttackType === "ground"
  ) ||
  (
    secondAttackerType === "flight" &&
    firstAttackType === "electric"
  ) ||
  (
    secondAttackerType === "flight" &&
    firstAttackType === "rock"
  ) ||
  (
    secondAttackerType === "flight" &&
    firstAttackType === "ice"
  ) ||
  (
    secondAttackerType === "psy" &&
    firstAttackType === "insect"
  ) ||
  (
    secondAttackerType === "psy" &&
    firstAttackType === "spectrum"
  ) ||
  (
    secondAttackerType === "psy" &&
    firstAttackType === "dark"
  ) ||
  (
    secondAttackerType === "rock" &&
    firstAttackType === "water"
  ) ||
  (
    secondAttackerType === "rock" &&
    firstAttackType === "plant"
  ) ||
  (
    secondAttackerType === "rock" &&
    firstAttackType === "fight"
  ) ||
  (
    secondAttackerType === "rock" &&
    firstAttackType === "steel"
  ) ||
  (
    secondAttackerType === "rock" &&
    firstAttackType === "ground"
  ) ||
  (
    secondAttackerType === "ground" &&
    firstAttackType === "water"
  ) ||
  (
    secondAttackerType === "ground" &&
    firstAttackType === "plant"
  ) ||
  (
    secondAttackerType === "ground" &&
    firstAttackType === "ice"
  ) ||
  (
    secondAttackerType === "ice" &&
    firstAttackType === "fight"
  ) ||
  (
    secondAttackerType === "ice" &&
    firstAttackType === "steel"
  ) ||
  (
    secondAttackerType === "ice" &&
    firstAttackType === "fire"
  ) ||
  (
    secondAttackerType === "ice" &&
    firstAttackType === "rock"
  ) ||
  (
    secondAttackerType === "steel" &&
    firstAttackType === "fight"
  ) ||
  (
    secondAttackerType === "steel" &&
    firstAttackType === "fire"
  ) ||
  (
    secondAttackerType === "steel" &&
    firstAttackType === "ground"
  ) ||
  (
    secondAttackerType === "poison" &&
    firstAttackType === "psy"
  ) ||
  (
    secondAttackerType === "poison" &&
    firstAttackType === "ground"
  ) ||
  (
    secondAttackerType === "spectrum" &&
    firstAttackType === "spectrum"
  ) ||
  (
    secondAttackerType === "spectrum" &&
    firstAttackType === "dark"
  ) ||
  (
    secondAttackerType === "dark" &&
    firstAttackType === "fight"
  ) ||
  (
    secondAttackerType === "dark" &&
    firstAttackType === "fairy"
  ) ||
  (
    secondAttackerType === "dark" &&
    firstAttackType === "insect"
  ) ||
  (
    secondAttackerType === "insect" &&
    firstAttackType === "flight"
  ) ||
  (
    secondAttackerType === "insect" &&
    firstAttackType === "fire"
  ) ||
  (
    secondAttackerType === "insect" &&
    firstAttackType === "rock"
  ) ||
  (
    secondAttackerType === "fight" &&
    firstAttackType === "flight"
  ) ||
  (
    secondAttackerType === "fight" &&
    firstAttackType === "psy"
  ) ||
  (
    secondAttackerType === "fight" &&
    firstAttackType === "fairy"
  ) ||
  (
    secondAttackerType === "normal" &&
    firstAttackType === "fight"
  ) ||
  (
    secondAttackerType === "dragon" &&
    firstAttackType === "ice"
  ) ||
  (
    secondAttackerType === "dragon" &&
    firstAttackType === "dragon"
  ) ||
  (
    secondAttackerType === "dragon" &&
    firstAttackType === "fairy"
  ) ||
  (
    secondAttackerType === "fairy" &&
    firstAttackType === "steel"
  ) ||
  (
    secondAttackerType === "fairy" &&
    firstAttackType === "poison"
  )
    ) {
      return 5;
    } else {
      return 1;
    }
};





