import { openDialogueWhenPokemonMakesIneffectiveAttack } from "../../../../../components/battle-dialogues/dialogues/pokemon-makes-ineffective-attack.dialogue.js";
import { attackStatesVariables } from "../../../../../shared/attacks/attack-variables.js";
import { doubleTypeInefficiveList } from "../../../../../shared/pokemon/types/ineffective/double-type-ineffective-list.js";
import { simpleTypeIneffectiveList } from "../../../../../shared/pokemon/types/ineffective/simple-type-ineffective-list.js";

export async function ineffectiveFactorAttack(
  secondAttacker,
  firstAttackerAttack
) {
  const simpleTypeIneffective =
    simpleTypeIneffectiveList[secondAttacker.type] || [];
  const doubleTypeIneffective =
    doubleTypeInefficiveList[secondAttacker.type]?.[
      secondAttacker.secondaryType
    ] || [];

  if (simpleTypeIneffective.includes(firstAttackerAttack.type)) {
    attackStatesVariables.currentStateAttack = "ineffective";
    await openDialogueWhenPokemonMakesIneffectiveAttack();
    return 0;
  }

  if (secondAttacker.secondaryType) {
    if (doubleTypeIneffective.includes(firstAttackerAttack.type)) {
      attackStatesVariables.currentStateAttack = "ineffective";
      await openDialogueWhenPokemonMakesIneffectiveAttack();
      return 0;
    }
  }

  return 1;
}
