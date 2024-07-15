import { openDialogueWhenPokemonMakesResistanceAttack } from "../../../../../components/battle-dialogues/dialogues/pokemon-makes-resistance-attack.dialogue.js";
import { doubleTypeResistanceList } from "../../../../../shared/pokemon/types/resistance/double-type-resistance-list.js";
import { simpleTypeResistanceList } from "../../../../../shared/pokemon/types/resistance/simple-type-resistance-list.js";

export function resistanceFactorAttack(secondAttacker, firstAttackerAttack) {
  const simpleTypeResistances =
    simpleTypeResistanceList[secondAttacker.type] || [];
  const doubleTypeResistances =
    doubleTypeResistanceList[secondAttacker.type]?.[
      secondAttacker.secondaryType
    ] || [];

  if (simpleTypeResistances.includes(firstAttackerAttack.type)) {
    openDialogueWhenPokemonMakesResistanceAttack();
    return 5;
  }

  if (secondAttacker.secondaryType) {
    if (doubleTypeResistances.includes(firstAttackerAttack.type)) {
      openDialogueWhenPokemonMakesResistanceAttack();
      return 5;
    }
  }

  return 1;
}
