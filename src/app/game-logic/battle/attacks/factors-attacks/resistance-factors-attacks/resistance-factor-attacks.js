import { openDialogueWhenPokemonMakesResistanceAttack } from "../../../../../components/battle-dialogues/dialogues/pokemon-makes-resistance-attack.dialogue.js";
import { attackStatesVariables } from "../../../../../shared/attacks/attack-variables.js";
import { doubleTypeResistanceList } from "../../../../../shared/pokemon/types/resistance/double-type-resistance-list.js";
import { simpleTypeResistanceList } from "../../../../../shared/pokemon/types/resistance/simple-type-resistance-list.js";

export async function resistanceFactorAttack(
  secondAttacker,
  firstAttackerAttack
) {
  const simpleTypeResistances =
    simpleTypeResistanceList[secondAttacker.type] || [];

  const doubleTypeResistances =
    doubleTypeResistanceList[secondAttacker.type]?.[
      secondAttacker.secondaryType
    ] || [];

  if (
    simpleTypeResistances.includes(firstAttackerAttack.type) &&
    firstAttackerAttack.class !== "status"
  ) {
    attackStatesVariables.currentStateAttack = "resistance";
    await openDialogueWhenPokemonMakesResistanceAttack();
    return 5;
  }

  if (secondAttacker.secondaryType) {
    if (
      doubleTypeResistances.includes(firstAttackerAttack.type) &&
      firstAttackerAttack.class !== "status"
    ) {
      attackStatesVariables.currentStateAttack = "resistance";
      await openDialogueWhenPokemonMakesResistanceAttack();
      return 5;
    }
  }

  return 1;
}
