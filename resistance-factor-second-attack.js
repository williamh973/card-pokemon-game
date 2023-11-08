export const resistanceFactorForSecondAttack = function resistanceFactorForSecondAttack(secondAttackType, secondAttackerType) {

if (
  (
    secondAttackerType === "water" &&
    secondAttackType === "water"
  ) ||
  (
    secondAttackerType === "water" &&
    secondAttackType === "steel"
  ) ||
  (
    secondAttackerType === "water" &&
    secondAttackType === "fire"
  ) ||
  (
    secondAttackerType === "water" &&
    secondAttackType === "ice"
  ) ||
  (
    secondAttackerType === "plant" &&
    secondAttackType === "water"
  ) ||
  (
    secondAttackerType === "plant" &&
    secondAttackType === "plant"
  ) ||
  (
    secondAttackerType === "plant" &&
    secondAttackType === "ground"
  ) ||
  (
    secondAttackerType === "plant" &&
    secondAttackType === "electric"
  ) ||
  (
    secondAttackerType === "fire" &&
    secondAttackType === "fire"
  ) ||
  (
    secondAttackerType === "fire" &&
    secondAttackType === "steel"
  ) ||
  (
    secondAttackerType === "fire" &&
    secondAttackType === "insect"
  ) ||
  (
    secondAttackerType === "fire" &&
    secondAttackType === "fairy"
  ) ||
  (
    secondAttackerType === "fire" &&
    secondAttackType === "plant"
  ) ||
  (
    secondAttackerType === "fire" &&
    secondAttackType === "ice"
  ) ||
  (
    secondAttackerType === "electric" &&
    secondAttackType === "electric"
  ) ||
  (
    secondAttackerType === "electric" &&
    secondAttackType === "steel"
  ) ||
  (
    secondAttackerType === "electric" &&
    secondAttackType === "vol"
  ) ||
  (
    secondAttackerType === "flight" &&
    secondAttackType === "fight"
  ) ||
  (
    secondAttackerType === "flight" &&
    secondAttackType === "insect"
  ) ||
  (
    secondAttackerType === "flight" &&
    secondAttackType === "plant"
  ) ||
  (
    secondAttackerType === "flight" &&
    secondAttackType === "ground"
  ) ||
  (
    secondAttackerType === "psy" &&
    secondAttackType === "fight"
  ) ||
  (
    secondAttackerType === "psy" &&
    secondAttackType === "psy"
  ) ||
  (
    secondAttackerType === "rock" &&
    secondAttackType === "flight"
  ) ||
  (
    secondAttackerType === "rock" &&
    secondAttackType === "normal"
  ) ||
  (
    secondAttackerType === "rock" &&
    secondAttackType === "fire"
  ) ||
  (
    secondAttackerType === "rock" &&
    secondAttackType === "poison"
  ) ||
  (
    secondAttackerType === "ground" &&
    secondAttackType === "electric"
  ) ||
  (
    secondAttackerType === "ground" &&
    secondAttackType === "rock"
  ) ||
  (
    secondAttackerType === "ground" &&
    secondAttackType === "poison"
  ) ||
  (
    secondAttackerType === "ice" &&
    secondAttackType === "ice"
  ) ||
  (
    secondAttackerType === "steel" &&
    secondAttackType === "flight"
  ) ||
  (
    secondAttackerType === "steel" &&
    secondAttackType === "normal"
  ) ||
  (
    secondAttackerType === "steel" &&
    secondAttackType === "fairy"
  ) ||
  (
    secondAttackerType === "steel" &&
    secondAttackType === "ice"
  ) ||
  (
    secondAttackerType === "steel" &&
    secondAttackType === "insect"
  ) ||
  (
    secondAttackerType === "steel" &&
    secondAttackType === "plant"
  ) ||
  (
    secondAttackerType === "steel" &&
    secondAttackType === "dragon"
  ) ||
  (
    secondAttackerType === "steel" &&
    secondAttackType === "steel"
  ) ||
  (
    secondAttackerType === "steel" &&
    secondAttackType === "psy"
  ) ||
  (
    secondAttackerType === "steel" &&
    secondAttackType === "rock"
  ) ||
  (
    secondAttackerType === "steel" &&
    secondAttackType === "poison"
  ) ||
  (
    secondAttackerType === "poison" &&
    secondAttackType === "fairy"
  ) ||
  (
    secondAttackerType === "poison" &&
    secondAttackType === "insect"
  ) ||
  (
    secondAttackerType === "poison" &&
    secondAttackType === "plant"
  ) ||
  (
    secondAttackerType === "poison" &&
    secondAttackType === "fight"
  ) ||
  (
    secondAttackerType === "poison" &&
    secondAttackType === "poison"
  ) ||
  (
    secondAttackerType === "spectrum" &&
    secondAttackType === "normal"
  ) ||
  (
    secondAttackerType === "spectrum" &&
    secondAttackType === "insect"
  ) ||
  (
    secondAttackerType === "spectrum" &&
    secondAttackType === "fight"
  ) ||
  (
    secondAttackerType === "spectrum" &&
    secondAttackType === "poison"
  ) ||
  (
    secondAttackerType === "dark" &&
    secondAttackType === "psy"
  ) ||
  (
    secondAttackerType === "dark" &&
    secondAttackType === "sprectrum"
  ) ||
  (
    secondAttackerType === "dark" &&
    secondAttackType === "dark"
  ) ||
  (
    secondAttackerType === "insect" &&
    secondAttackType === "fight"
  ) ||
  (
    secondAttackerType === "insect" &&
    secondAttackType === "plant"
  ) ||
  (
    secondAttackerType === "insect" &&
    secondAttackType === "ground"
  ) ||
  (
    secondAttackerType === "fight" &&
    secondAttackType === "dark"
  ) ||
  (
    secondAttackerType === "fight" &&
    secondAttackType === "insect"
  ) ||
  (
    secondAttackerType === "fight" &&
    secondAttackType === "rock"
  ) ||
  (
    secondAttackerType === "normal" &&
    secondAttackType === "sprectrum"
  ) ||
  (
    secondAttackerType === "dragon" &&
    secondAttackType === "water"
  ) ||
  (
    secondAttackerType === "dragon" &&
    secondAttackType === "electric"
  ) ||
  (
    secondAttackerType === "dragon" &&
    secondAttackType === "fire"
  ) ||
  (
    secondAttackerType === "dragon" &&
    secondAttackType === "plante"
  ) ||
  (
    secondAttackerType === "fairy" &&
    secondAttackType === "dragon"
  ) ||
  (
    secondAttackerType === "fairy" &&
    secondAttackType === "fight"
  ) ||
  (
    secondAttackerType === "fairy" &&
    secondAttackType === "insect"
  ) ||
  (
    secondAttackerType === "fairy" &&
    secondAttackType === "dark"
  )
    ) {
      return 5;
    } else {
      return 1;
    }
};