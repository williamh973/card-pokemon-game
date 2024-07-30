import { openDialogueWhenPokemonMakesAttack } from "../../../../../components/battle-dialogues/dialogues/pokemon-makes-attacks.dialogue.js";
import { openDialogueWhenPokemonProtectingHimself } from "../../../../../components/battle-dialogues/dialogues/pokemon-protecting-himself.dialogue.js";
import { disabledProtectCapacity } from "../../factors-attacks/protect-detect-factor/protect-factors-attacks/protect-detect-capacity-actived.js";
import { handleBonusAttackWhenProtectOrDetectCapacityActived } from "../../factors-attacks/protect-detect-factor/handle-bonus-attack-when-protect-or-detect-capacity-actived/handle-bonus-attack-when-protect-or-detect-capacity-actived-first-attack.js";
import { pokemonVariables } from "../../../../../shared/pokemon/pokemon-variables.js";
import { calculateDamagesAttack } from "./calculate-damages-attacks/calculate-damages-attack.js";
import { getFirstAttackerAttack } from "../../../../../shared/attacks/get-first-attacker-attack.js";

export async function pokemonMakesAttack(firstAttacker, secondAttacker) {
  const isFirstAttackerAttackActive =
    pokemonVariables.isFirstAttackActive ||
    pokemonVariables.isSecondAttackActive;

  const possibleTypeAttacksList = ["bonus"];
  const possibleClassAttacksList = ["status"];

  const firstAttackerAttack = getFirstAttackerAttack(firstAttacker);

  if (isFirstAttackerAttackActive) {
    if (!pokemonVariables.isProtectOrDetectCapacityActived) {
      return await calculateDamagesAttack(
        firstAttacker,
        secondAttacker,
        firstAttackerAttack
      );
    }

    if (pokemonVariables.isProtectOrDetectCapacityActived) {
      if (
        possibleTypeAttacksList.includes(firstAttackerAttack.type) ||
        possibleClassAttacksList.includes(firstAttackerAttack.class)
      ) {
        await handleBonusAttackWhenProtectOrDetectCapacityActived(
          firstAttacker,
          firstAttackerAttack
        );
        disabledProtectCapacity();
        return 0;
      } else if (
        !possibleTypeAttacksList.includes(firstAttackerAttack.type) ||
        !possibleClassAttacksList.includes(firstAttackerAttack.class)
      ) {
        await openDialogueWhenPokemonMakesAttack(firstAttacker);
        await openDialogueWhenPokemonProtectingHimself(secondAttacker);
        disabledProtectCapacity();
        return 0;
      }
    }
  }
}
