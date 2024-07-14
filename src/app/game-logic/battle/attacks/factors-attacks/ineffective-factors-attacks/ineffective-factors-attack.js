import { openDialogueWhenPokemonMakesIneffectiveAttack } from "../../../../../components/battle-dialogues/dialogues/pokemon-makes-ineffective-attack.dialogue.js";
import { doubleTypeInefficiveList } from "../../../../../shared/pokemon/types/ineffective/double-type-ineffective-list.js";
import { simpleTypeIneffectiveList } from "../../../../../shared/pokemon/types/ineffective/simple-type-ineffective-list.js";

export function ineffectiveFactorAttack(secondAttacker, firstAttackerAttack) {
  const simpleTypeIneffective =
    simpleTypeIneffectiveList[secondAttacker.type] || [];
  const doubleTypeIneffective =
    doubleTypeInefficiveList[secondAttacker.type]?.[
      secondAttacker.secondaryType
    ] || [];

  if (simpleTypeIneffective.includes(secondAttacker.type)) {
    openDialogueWhenPokemonMakesIneffectiveAttack();
    return 5;
  }

  if (secondAttacker.secondaryType) {
    if (doubleTypeIneffective.includes(firstAttackerAttack.type)) {
      openDialogueWhenPokemonMakesIneffectiveAttack();
      return 5;
    }
  }

  return 1;
}