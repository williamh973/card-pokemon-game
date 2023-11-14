import { 
  openDialogueWhenPokemonMakesResistanceAttack
} from '../../dialogue-fight.js';

export const resistanceFactorForFirstAttack = function resistanceFactorForFirstAttack(
  firstAttackType, 
  secondAttackerType,
  isFirstAttackActive
  ) {

if ( isFirstAttackActive &&
  (
    secondAttackerType === "water" &&
    firstAttackType === "water"
  ) ||
  (
    secondAttackerType === "water" &&
    firstAttackType === "steel"
  ) ||
  (
    secondAttackerType === "water" &&
    firstAttackType === "fire"
  ) ||
  (
    secondAttackerType === "water" &&
    firstAttackType === "ice"
  ) ||
  (
    secondAttackerType === "plant" &&
    firstAttackType === "water"
  ) ||
  (
    secondAttackerType === "plant" &&
    firstAttackType === "plant"
  ) ||
  (
    secondAttackerType === "plant" &&
    firstAttackType === "ground"
  ) ||
  (
    secondAttackerType === "plant" &&
    firstAttackType === "electric"
  ) ||
  (
    secondAttackerType === "fire" &&
    firstAttackType === "fire"
  ) ||
  (
    secondAttackerType === "fire" &&
    firstAttackType === "steel"
  ) ||
  (
    secondAttackerType === "fire" &&
    firstAttackType === "insect"
  ) ||
  (
    secondAttackerType === "fire" &&
    firstAttackType === "fairy"
  ) ||
  (
    secondAttackerType === "fire" &&
    firstAttackType === "plant"
  ) ||
  (
    secondAttackerType === "fire" &&
    firstAttackType === "ice"
  ) ||
  (
    secondAttackerType === "electric" &&
    firstAttackType === "electric"
  ) ||
  (
    secondAttackerType === "electric" &&
    firstAttackType === "steel"
  ) ||
  (
    secondAttackerType === "electric" &&
    firstAttackType === "vol"
  ) ||
  (
    secondAttackerType === "flight" &&
    firstAttackType === "fight"
  ) ||
  (
    secondAttackerType === "flight" &&
    firstAttackType === "insect"
  ) ||
  (
    secondAttackerType === "flight" &&
    firstAttackType === "plant"
  ) ||
  (
    secondAttackerType === "flight" &&
    firstAttackType === "ground"
  ) ||
  (
    secondAttackerType === "psy" &&
    firstAttackType === "fight"
  ) ||
  (
    secondAttackerType === "psy" &&
    firstAttackType === "psy"
  ) ||
  (
    secondAttackerType === "rock" &&
    firstAttackType === "flight"
  ) ||
  (
    secondAttackerType === "rock" &&
    firstAttackType === "normal"
  ) ||
  (
    secondAttackerType === "rock" &&
    firstAttackType === "fire"
  ) ||
  (
    secondAttackerType === "rock" &&
    firstAttackType === "poison"
  ) ||
  (
    secondAttackerType === "ground" &&
    firstAttackType === "electric"
  ) ||
  (
    secondAttackerType === "ground" &&
    firstAttackType === "rock"
  ) ||
  (
    secondAttackerType === "ground" &&
    firstAttackType === "poison"
  ) ||
  (
    secondAttackerType === "ice" &&
    firstAttackType === "ice"
  ) ||
  (
    secondAttackerType === "steel" &&
    firstAttackType === "flight"
  ) ||
  (
    secondAttackerType === "steel" &&
    firstAttackType === "normal"
  ) ||
  (
    secondAttackerType === "steel" &&
    firstAttackType === "fairy"
  ) ||
  (
    secondAttackerType === "steel" &&
    firstAttackType === "ice"
  ) ||
  (
    secondAttackerType === "steel" &&
    firstAttackType === "insect"
  ) ||
  (
    secondAttackerType === "steel" &&
    firstAttackType === "plant"
  ) ||
  (
    secondAttackerType === "steel" &&
    firstAttackType === "dragon"
  ) ||
  (
    secondAttackerType === "steel" &&
    firstAttackType === "steel"
  ) ||
  (
    secondAttackerType === "steel" &&
    firstAttackType === "psy"
  ) ||
  (
    secondAttackerType === "steel" &&
    firstAttackType === "rock"
  ) ||
  (
    secondAttackerType === "steel" &&
    firstAttackType === "poison"
  ) ||
  (
    secondAttackerType === "poison" &&
    firstAttackType === "fairy"
  ) ||
  (
    secondAttackerType === "poison" &&
    firstAttackType === "insect"
  ) ||
  (
    secondAttackerType === "poison" &&
    firstAttackType === "plant"
  ) ||
  (
    secondAttackerType === "poison" &&
    firstAttackType === "fight"
  ) ||
  (
    secondAttackerType === "poison" &&
    firstAttackType === "poison"
  ) ||
  (
    secondAttackerType === "spectrum" &&
    firstAttackType === "normal"
  ) ||
  (
    secondAttackerType === "spectrum" &&
    firstAttackType === "insect"
  ) ||
  (
    secondAttackerType === "spectrum" &&
    firstAttackType === "fight"
  ) ||
  (
    secondAttackerType === "spectrum" &&
    firstAttackType === "poison"
  ) ||
  (
    secondAttackerType === "dark" &&
    firstAttackType === "psy"
  ) ||
  (
    secondAttackerType === "dark" &&
    firstAttackType === "sprectrum"
  ) ||
  (
    secondAttackerType === "dark" &&
    firstAttackType === "dark"
  ) ||
  (
    secondAttackerType === "insect" &&
    firstAttackType === "fight"
  ) ||
  (
    secondAttackerType === "insect" &&
    firstAttackType === "plant"
  ) ||
  (
    secondAttackerType === "insect" &&
    firstAttackType === "ground"
  ) ||
  (
    secondAttackerType === "fight" &&
    firstAttackType === "dark"
  ) ||
  (
    secondAttackerType === "fight" &&
    firstAttackType === "insect"
  ) ||
  (
    secondAttackerType === "fight" &&
    firstAttackType === "rock"
  ) ||
  (
    secondAttackerType === "normal" &&
    firstAttackType === "sprectrum"
  ) ||
  (
    secondAttackerType === "dragon" &&
    firstAttackType === "water"
  ) ||
  (
    secondAttackerType === "dragon" &&
    firstAttackType === "electric"
  ) ||
  (
    secondAttackerType === "dragon" &&
    firstAttackType === "fire"
  ) ||
  (
    secondAttackerType === "dragon" &&
    firstAttackType === "plante"
  ) ||
  (
    secondAttackerType === "fairy" &&
    firstAttackType === "dragon"
  ) ||
  (
    secondAttackerType === "fairy" &&
    firstAttackType === "fight"
  ) ||
  (
    secondAttackerType === "fairy" &&
    firstAttackType === "insect"
  ) ||
  (
    secondAttackerType === "fairy" &&
    firstAttackType === "dark"
  )
    ) {
      openDialogueWhenPokemonMakesResistanceAttack();
      return 5;
    } else {
      return 1;
    }
};





