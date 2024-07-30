import { openDialogueWhenPokemonMakesAttack } from "../../../../../components/battle-dialogues/dialogues/pokemon-makes-attacks.dialogue.js";
import { openDialogueWhenPokemonProtectingHimself } from "../../../../../components/battle-dialogues/dialogues/pokemon-protecting-himself.dialogue.js";
import { disabledProtectCapacity } from "../../factors-attacks/protect-detect-factor/protect-factors-attacks/protect-detect-capacity-actived.js";
import { handleStatusAttackWhenProtectOrDetectCapacityActived } from "../../factors-attacks/protect-detect-factor/handle-bonus-attack-when-protect-or-detect-capacity-actived/handle-bonus-attack-when-protect-or-detect-capacity-actived-first-attack.js";
import { pokemonVariables } from "../../../../../shared/pokemon/pokemon-variables.js";
import { calculateDamagesAttack } from "./calculate-damages-attacks/calculate-damages-attack.js";
import { getFirstAttackerAttack } from "../../../../../shared/attacks/get-first-attacker-attack.js";

export async function pokemonMakesAttack(firstAttacker, secondAttacker) {
  const isFirstAttackerAttackActive =
    pokemonVariables.isFirstAttackActive ||
    pokemonVariables.isSecondAttackActive;

  const possibleClassAttacksList = ["status"];

  const firstAttackerAttack = getFirstAttackerAttack(firstAttacker);

  await openDialogueWhenPokemonMakesAttack(firstAttacker);

  if (isFirstAttackerAttackActive) {
    if (!pokemonVariables.isProtectOrDetectCapacityActived) {
      return await calculateDamagesAttack(
        firstAttacker,
        secondAttacker,
        firstAttackerAttack
      );
    } else if (pokemonVariables.isProtectOrDetectCapacityActived) {
      if (possibleClassAttacksList.includes(firstAttackerAttack.class)) {
        await handleStatusAttackWhenProtectOrDetectCapacityActived(
          firstAttacker,
          firstAttackerAttack,
          secondAttacker
        );

        disabledProtectCapacity();
        return 0;
      } else {
        await openDialogueWhenPokemonProtectingHimself(secondAttacker);
        disabledProtectCapacity();
        return 0;
      }
    }
  }
}
