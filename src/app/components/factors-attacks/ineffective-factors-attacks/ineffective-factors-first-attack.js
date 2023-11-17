import { 
  openDialogueWhenPokemonMakesIneffectiveAttack
} from '../../dialogue-fight.js';


export const ineffectiveFactorForFirstAttack = 
function ineffectiveFactorForFirstAttack(
  firstAttackType, 
  secondAttackerType,
  isFirstAttackActive
  ) {

if (
  isFirstAttackActive &&
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
    openDialogueWhenPokemonMakesIneffectiveAttack();
    return 0;
  } else {
    return 1;
  }
};