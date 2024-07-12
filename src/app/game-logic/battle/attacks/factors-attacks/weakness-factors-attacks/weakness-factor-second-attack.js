import { openDialogueWhenPokemonMakesWeaknessAttack } from "../../../../../components/battle-dialogues/dialogues/pokemon-makes-weakness-attack.dialogue.js";

export function weaknessFactorForSecondAttack(
  firstAttacker,
  secondAttacker,
  isSecondAttackActive
) {
  if (
    (isSecondAttackActive &&
      secondAttacker.type === "water" &&
      firstAttacker.secondAttack.type === "plant") ||
    (secondAttacker.type === "water" &&
      firstAttacker.secondAttack.type === "electric") ||
    (secondAttacker.type === "plant" &&
      firstAttacker.secondAttack.type === "fire") ||
    (secondAttacker.type === "plant" &&
      firstAttacker.secondAttack.type === "flight") ||
    (secondAttacker.type === "plant" &&
      firstAttacker.secondAttack.type === "insect") ||
    (secondAttacker.type === "plant" &&
      firstAttacker.secondAttack.type === "poison") ||
    (secondAttacker.type === "plant" &&
      firstAttacker.secondAttack.type === "ice") ||
    (secondAttacker.type === "fire" &&
      firstAttacker.secondAttack.type === "water") ||
    (secondAttacker.type === "fire" &&
      firstAttacker.secondAttack.type === "rock") ||
    (secondAttacker.type === "fire" &&
      firstAttacker.secondAttack.type === "ground") ||
    (secondAttacker.type === "electric" &&
      firstAttacker.secondAttack.type === "ground") ||
    (secondAttacker.type === "flight" &&
      firstAttacker.secondAttack.type === "electric") ||
    (secondAttacker.type === "flight" &&
      firstAttacker.secondAttack.type === "rock") ||
    (secondAttacker.type === "flight" &&
      firstAttacker.secondAttack.type === "ice") ||
    (secondAttacker.type === "psy" &&
      firstAttacker.secondAttack.type === "insect") ||
    (secondAttacker.type === "psy" &&
      firstAttacker.secondAttack.type === "spectrum") ||
    (secondAttacker.type === "psy" &&
      firstAttacker.secondAttack.type === "dark") ||
    (secondAttacker.type === "rock" &&
      firstAttacker.secondAttack.type === "water") ||
    (secondAttacker.type === "rock" &&
      firstAttacker.secondAttack.type === "plant") ||
    (secondAttacker.type === "rock" &&
      firstAttacker.secondAttack.type === "fight") ||
    (secondAttacker.type === "rock" &&
      firstAttacker.secondAttack.type === "steel") ||
    (secondAttacker.type === "rock" &&
      firstAttacker.secondAttack.type === "ground") ||
    (secondAttacker.type === "ground" &&
      firstAttacker.secondAttack.type === "water") ||
    (secondAttacker.type === "ground" &&
      firstAttacker.secondAttack.type === "plant") ||
    (secondAttacker.type === "ground" &&
      firstAttacker.secondAttack.type === "ice") ||
    (secondAttacker.type === "ice" &&
      firstAttacker.secondAttack.type === "fight") ||
    (secondAttacker.type === "ice" &&
      firstAttacker.secondAttack.type === "steel") ||
    (secondAttacker.type === "ice" &&
      firstAttacker.secondAttack.type === "fire") ||
    (secondAttacker.type === "ice" &&
      firstAttacker.secondAttack.type === "rock") ||
    (secondAttacker.type === "steel" &&
      firstAttacker.secondAttack.type === "fight") ||
    (secondAttacker.type === "steel" &&
      firstAttacker.secondAttack.type === "fire") ||
    (secondAttacker.type === "steel" &&
      firstAttacker.secondAttack.type === "ground") ||
    (secondAttacker.type === "poison" &&
      firstAttacker.secondAttack.type === "psy") ||
    (secondAttacker.type === "poison" &&
      firstAttacker.secondAttack.type === "ground") ||
    (secondAttacker.type === "spectrum" &&
      firstAttacker.secondAttack.type === "spectrum") ||
    (secondAttacker.type === "spectrum" &&
      firstAttacker.secondAttack.type === "dark") ||
    (secondAttacker.type === "dark" &&
      firstAttacker.secondAttack.type === "fight") ||
    (secondAttacker.type === "dark" &&
      firstAttacker.secondAttack.type === "fairy") ||
    (secondAttacker.type === "dark" &&
      firstAttacker.secondAttack.type === "insect") ||
    (secondAttacker.type === "insect" &&
      firstAttacker.secondAttack.type === "flight") ||
    (secondAttacker.type === "insect" &&
      firstAttacker.secondAttack.type === "fire") ||
    (secondAttacker.type === "insect" &&
      firstAttacker.secondAttack.type === "rock") ||
    (secondAttacker.type === "fight" &&
      firstAttacker.secondAttack.type === "flight") ||
    (secondAttacker.type === "fight" &&
      firstAttacker.secondAttack.type === "psy") ||
    (secondAttacker.type === "fight" &&
      firstAttacker.secondAttack.type === "fairy") ||
    (secondAttacker.type === "normal" &&
      firstAttacker.secondAttack.type === "fight") ||
    (secondAttacker.type === "dragon" &&
      firstAttacker.secondAttack.type === "ice") ||
    (secondAttacker.type === "dragon" &&
      firstAttacker.secondAttack.type === "dragon") ||
    (secondAttacker.type === "dragon" &&
      firstAttacker.secondAttack.type === "fairy") ||
    (secondAttacker.type === "fairy" &&
      firstAttacker.secondAttack.type === "steel") ||
    (secondAttacker.type === "fairy" &&
      firstAttacker.secondAttack.type === "poison") ||
    (secondAttacker.type === "water" &&
      secondAttacker.secondaryType === "ice" &&
      firstAttacker.secondAttack.type === "fight") ||
    (secondAttacker.type === "water" &&
      secondAttacker.secondaryType === "ice" &&
      firstAttacker.secondAttack.type === "electric") ||
    (secondAttacker.type === "water" &&
      secondAttacker.secondaryType === "ice" &&
      firstAttacker.secondAttack.type === "plant") ||
    (secondAttacker.type === "water" &&
      secondAttacker.secondaryType === "ice" &&
      firstAttacker.secondAttack.type === "rock") ||
    (secondAttacker.type === "rock" &&
      secondAttacker.secondaryType === "ground" &&
      firstAttacker.secondAttack.type === "steel") ||
    (secondAttacker.type === "rock" &&
      secondAttacker.secondaryType === "ground" &&
      firstAttacker.secondAttack.type === "fight") ||
    (secondAttacker.type === "rock" &&
      secondAttacker.secondaryType === "ground" &&
      firstAttacker.secondAttack.type === "ice") ||
    (secondAttacker.type === "rock" &&
      secondAttacker.secondaryType === "ground" &&
      firstAttacker.secondAttack.type === "ground") ||
    (secondAttacker.type === "normal" &&
      secondAttacker.secondaryType === "flight" &&
      firstAttacker.secondAttack.type === "electric") ||
    (secondAttacker.type === "normal" &&
      secondAttacker.secondaryType === "flight" &&
      firstAttacker.secondAttack.type === "ice") ||
    (secondAttacker.type === "normal" &&
      secondAttacker.secondaryType === "flight" &&
      firstAttacker.secondAttack.type === "rock")
  ) {
    openDialogueWhenPokemonMakesWeaknessAttack();
    return 5;
  } else {
    return 1;
  }
}
