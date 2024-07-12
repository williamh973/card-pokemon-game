import { openDialogueWhenPokemonMakesWeaknessAttack } from "../../../../../components/battle-dialogues/dialogues/pokemon-makes-weakness-attack.dialogue.js";

export function weaknessFactorForFirstAttack(
  firstAttacker,
  secondAttacker,
  isFirstAttackActive
) {
  if (
    (isFirstAttackActive &&
      secondAttacker.type === "water" &&
      firstAttacker.firstAttack.type === "plant") ||
    (secondAttacker.type === "water" &&
      firstAttacker.firstAttack.type === "electric") ||
    (secondAttacker.type === "plant" &&
      firstAttacker.firstAttack.type === "fire") ||
    (secondAttacker.type === "plant" &&
      firstAttacker.firstAttack.type === "flight") ||
    (secondAttacker.type === "plant" &&
      firstAttacker.firstAttack.type === "insect") ||
    (secondAttacker.type === "plant" &&
      firstAttacker.firstAttack.type === "poison") ||
    (secondAttacker.type === "plant" &&
      firstAttacker.firstAttack.type === "ice") ||
    (secondAttacker.type === "fire" &&
      firstAttacker.firstAttack.type === "water") ||
    (secondAttacker.type === "fire" &&
      firstAttacker.firstAttack.type === "rock") ||
    (secondAttacker.type === "fire" &&
      firstAttacker.firstAttack.type === "ground") ||
    (secondAttacker.type === "electric" &&
      firstAttacker.firstAttack.type === "ground") ||
    (secondAttacker.type === "flight" &&
      firstAttacker.firstAttack.type === "electric") ||
    (secondAttacker.type === "flight" &&
      firstAttacker.firstAttack.type === "rock") ||
    (secondAttacker.type === "flight" &&
      firstAttacker.firstAttack.type === "ice") ||
    (secondAttacker.type === "psy" &&
      firstAttacker.firstAttack.type === "insect") ||
    (secondAttacker.type === "psy" &&
      firstAttacker.firstAttack.type === "spectrum") ||
    (secondAttacker.type === "psy" &&
      firstAttacker.firstAttack.type === "dark") ||
    (secondAttacker.type === "rock" &&
      firstAttacker.firstAttack.type === "water") ||
    (secondAttacker.type === "rock" &&
      firstAttacker.firstAttack.type === "plant") ||
    (secondAttacker.type === "rock" &&
      firstAttacker.firstAttack.type === "fight") ||
    (secondAttacker.type === "rock" &&
      firstAttacker.firstAttack.type === "steel") ||
    (secondAttacker.type === "rock" &&
      firstAttacker.firstAttack.type === "ground") ||
    (secondAttacker.type === "ground" &&
      firstAttacker.firstAttack.type === "water") ||
    (secondAttacker.type === "ground" &&
      firstAttacker.firstAttack.type === "plant") ||
    (secondAttacker.type === "ground" &&
      firstAttacker.firstAttack.type === "ice") ||
    (secondAttacker.type === "ice" &&
      firstAttacker.firstAttack.type === "fight") ||
    (secondAttacker.type === "ice" &&
      firstAttacker.firstAttack.type === "steel") ||
    (secondAttacker.type === "ice" &&
      firstAttacker.firstAttack.type === "fire") ||
    (secondAttacker.type === "ice" &&
      firstAttacker.firstAttack.type === "rock") ||
    (secondAttacker.type === "steel" &&
      firstAttacker.firstAttack.type === "fight") ||
    (secondAttacker.type === "steel" &&
      firstAttacker.firstAttack.type === "fire") ||
    (secondAttacker.type === "steel" &&
      firstAttacker.firstAttack.type === "ground") ||
    (secondAttacker.type === "poison" &&
      firstAttacker.firstAttack.type === "psy") ||
    (secondAttacker.type === "poison" &&
      firstAttacker.firstAttack.type === "ground") ||
    (secondAttacker.type === "spectrum" &&
      firstAttacker.firstAttack.type === "spectrum") ||
    (secondAttacker.type === "spectrum" &&
      firstAttacker.firstAttack.type === "dark") ||
    (secondAttacker.type === "dark" &&
      firstAttacker.firstAttack.type === "fight") ||
    (secondAttacker.type === "dark" &&
      firstAttacker.firstAttack.type === "fairy") ||
    (secondAttacker.type === "dark" &&
      firstAttacker.firstAttack.type === "insect") ||
    (secondAttacker.type === "insect" &&
      firstAttacker.firstAttack.type === "flight") ||
    (secondAttacker.type === "insect" &&
      firstAttacker.firstAttack.type === "fire") ||
    (secondAttacker.type === "insect" &&
      firstAttacker.firstAttack.type === "rock") ||
    (secondAttacker.type === "fight" &&
      firstAttacker.firstAttack.type === "flight") ||
    (secondAttacker.type === "fight" &&
      firstAttacker.firstAttack.type === "psy") ||
    (secondAttacker.type === "fight" &&
      firstAttacker.firstAttack.type === "fairy") ||
    (secondAttacker.type === "normal" &&
      firstAttacker.firstAttack.type === "fight") ||
    (secondAttacker.type === "dragon" &&
      firstAttacker.firstAttack.type === "ice") ||
    (secondAttacker.type === "dragon" &&
      firstAttacker.firstAttack.type === "dragon") ||
    (secondAttacker.type === "dragon" &&
      firstAttacker.firstAttack.type === "fairy") ||
    (secondAttacker.type === "fairy" &&
      firstAttacker.firstAttack.type === "steel") ||
    (secondAttacker.type === "fairy" &&
      firstAttacker.firstAttack.type === "poison") ||
    (secondAttacker.type === "water" &&
      secondAttacker.secondaryType === "ice" &&
      firstAttacker.firstAttack.type === "fight") ||
    (secondAttacker.type === "water" &&
      secondAttacker.secondaryType === "ice" &&
      firstAttacker.firstAttack.type === "electric") ||
    (secondAttacker.type === "water" &&
      secondAttacker.secondaryType === "ice" &&
      firstAttacker.firstAttack.type === "plant") ||
    (secondAttacker.type === "water" &&
      secondAttacker.secondaryType === "ice" &&
      firstAttacker.firstAttack.type === "rock") ||
    (secondAttacker.type === "rock" &&
      secondAttacker.secondaryType === "ground" &&
      firstAttacker.firstAttack.type === "steel") ||
    (secondAttacker.type === "rock" &&
      secondAttacker.secondaryType === "ground" &&
      firstAttacker.firstAttack.type === "fight") ||
    (secondAttacker.type === "rock" &&
      secondAttacker.secondaryType === "ground" &&
      firstAttacker.firstAttack.type === "ice") ||
    (secondAttacker.type === "rock" &&
      secondAttacker.secondaryType === "ground" &&
      firstAttacker.firstAttack.type === "ground") ||
    (secondAttacker.type === "normal" &&
      secondAttacker.secondaryType === "flight" &&
      firstAttacker.firstAttack.type === "electric") ||
    (secondAttacker.type === "normal" &&
      secondAttacker.secondaryType === "flight" &&
      firstAttacker.firstAttack.type === "ice") ||
    (secondAttacker.type === "normal" &&
      secondAttacker.secondaryType === "flight" &&
      firstAttacker.firstAttack.type === "rock")
  ) {
    openDialogueWhenPokemonMakesWeaknessAttack();
    return 5;
  } else {
    return 1;
  }
}
