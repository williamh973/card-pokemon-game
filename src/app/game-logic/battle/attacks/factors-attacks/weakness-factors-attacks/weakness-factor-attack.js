import { openDialogueWhenPokemonMakesWeaknessAttack } from "../../../../../components/battle-dialogues/dialogues/pokemon-makes-weakness-attack.dialogue.js";
import { attackStatesVariables } from "../../../../../shared/attacks/attack-variables.js";
import { doubleTypeWeaknesseList } from "../../../../../shared/pokemon/types/weakness/double-type-weakness-list.js";
import { simpleTypeWeaknesseList } from "../../../../../shared/pokemon/types/weakness/simple-type-weakness-list.js";

export async function weaknessFactorAttack(
  secondAttacker,
  firstAttackerAttack
) {
  const simpleTypeWeaknesses =
    simpleTypeWeaknesseList[secondAttacker.type] || [];

  const doubleTypeWeaknesses =
    doubleTypeWeaknesseList[secondAttacker.type]?.[
      secondAttacker.secondaryType
    ] || [];

  if (
    simpleTypeWeaknesses.includes(firstAttackerAttack.type) &&
    firstAttackerAttack.class !== "status"
  ) {
    attackStatesVariables.currentStateAttack = "weakness";
    await openDialogueWhenPokemonMakesWeaknessAttack();
    return 5;
  }

  if (secondAttacker.secondaryType) {
    if (
      doubleTypeWeaknesses.includes(firstAttackerAttack.type) &&
      firstAttackerAttack.class !== "status"
    ) {
      attackStatesVariables.currentStateAttack = "weakness";
      await openDialogueWhenPokemonMakesWeaknessAttack();
      return 5;
    }
  }

  return 1;
}
