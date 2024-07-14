import { openDialogueWhenPokemonMakesWeaknessAttack } from "../../../../../components/battle-dialogues/dialogues/pokemon-makes-weakness-attack.dialogue.js";
import { doubleTypeWeaknesseList } from "../../../../../shared/pokemon/types/weakness/double-type-weakness-list.js";
import { simpleTypeWeaknesseList } from "../../../../../shared/pokemon/types/weakness/simple-type-weakness-list.js";

export function weaknessFactorAttack(secondAttacker, firstAttackerAttack) {
  const simpleTypeWeaknesses =
    simpleTypeWeaknesseList[secondAttacker.type] || [];
  const doubleTypeWeaknesses =
    doubleTypeWeaknesseList[secondAttacker.type]?.[
      secondAttacker.secondaryType
    ] || [];

  if (simpleTypeWeaknesses.includes(firstAttackerAttack.type)) {
    openDialogueWhenPokemonMakesWeaknessAttack();
    return 5;
  }

  if (secondAttacker.secondaryType) {
    if (doubleTypeWeaknesses.includes(firstAttackerAttack.type)) {
      openDialogueWhenPokemonMakesWeaknessAttack();
      return 5;
    }
  }

  return 1;
}
