import { openDialogueWhenPokemonMakesIneffectiveAttack } from "../../../../../components/battle-dialogues/dialogues/pokemon-makes-ineffective-attack.dialogue.js";
import { pokemonVariables } from "../../../../../shared/pokemon/pokemon-variables.js";

export function ineffectiveFactorForFirstAttack(firstAttacker, secondAttacker) {
  if (
    (pokemonVariables.isFirstAttackActive &&
      secondAttacker.type === "spectrum" &&
      firstAttacker.firstAttack.type === "normal") ||
    (secondAttacker.type === "spectrum" &&
      firstAttacker.firstAttack.type === "fight") ||
    (secondAttacker.type === "steel" &&
      firstAttacker.firstAttack.type === "poison") ||
    (secondAttacker.type === "flight" &&
      firstAttacker.firstAttack.type === "ground") ||
    (secondAttacker.type === "plant" &&
      firstAttacker.firstAttack.type === "water") ||
    (secondAttacker.type === "normal" &&
      firstAttacker.firstAttack.type === "spectrum") ||
    (secondAttacker.type === "dark" &&
      firstAttacker.firstAttack.type === "psy") ||
    (secondAttacker.type === "fairy" &&
      firstAttacker.firstAttack.type === "dragon") ||
    (secondAttacker.type === "rock" &&
      firstAttacker.firstAttack.type === "electric") ||
    (secondAttacker.type === "rock" &&
      secondAttacker.secondaryType === "ground" &&
      firstAttacker.firstAttack.type === "electric") ||
    (secondAttacker.type === "normal" &&
      secondAttacker.secondaryType === "flight" &&
      firstAttacker.firstAttack.type === "ground") ||
    (secondAttacker.type === "normal" &&
      secondAttacker.secondaryType === "flight" &&
      firstAttacker.firstAttack.type === "spectrum")
  ) {
    openDialogueWhenPokemonMakesIneffectiveAttack();
    return 0;
  } else {
    return 1;
  }
}
