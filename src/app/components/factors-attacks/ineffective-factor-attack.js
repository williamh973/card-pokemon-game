import { 
  openDialogueWhenPokemonMakesIneffectiveAttack
} from '../dialogue-fight.js';


export const ineffectiveFactorForFirstAttack = function ineffectiveFactorForFirstAttack(
  firstAttackType, 
  secondAttackerType,
  isFirstAttackActive
  ) {

if (isFirstAttackActive &&
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
  ) ||
  (
    (
      firstAttackType === "bonus" || 
      firstAttackType === "malus" 
    )
  )
  ) {
    openDialogueWhenPokemonMakesIneffectiveAttack();
    return 0;
  } else {
    return 1;
  }
};



export const ineffectiveFactorForSecondAttack = function ineffectiveFactorForSecondAttack(
  secondAttackType, 
  secondAttackerType, 
  isSecondAttackActive
  ) {

if (isSecondAttackActive &&
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
  ) ||
  (
    (
      secondAttackType === "bonus" || 
      secondAttackType === "malus" 
    )
  )
  ) {
    openDialogueWhenPokemonMakesIneffectiveAttack();
    return 0;
  } else {
    return 1;
  }
};