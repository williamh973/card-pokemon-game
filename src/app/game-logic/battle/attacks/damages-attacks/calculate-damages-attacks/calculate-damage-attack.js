import { openDialogueWhenPokemonMakesAttack } from "../../../../../components/battle-dialogues/dialogues/pokemon-makes-attacks.dialogue.js";
import { openDialogueWhenPokemonProtectingHimself } from "../../../../../components/battle-dialogues/dialogues/pokemon-protecting-himself.dialogue.js";
import { disabledProtectCapacity } from "../../factors-attacks/protect-detect-factor/protect-factors-attacks/protect-detect-capacity-actived.js";
import { handleBonusAttackWhenProtectOrDetectCapacityActived } from "../../factors-attacks/protect-detect-factor/handle-bonus-attack-when-protect-or-detect-capacity-actived/handle-bonus-attack-when-protect-or-detect-capacity-actived-first-attack.js";
import { pokemonVariables } from "../../../../../shared/pokemon/pokemon-variables.js";
import { pokemonMakesAttack } from "./pokemon-makes-attack/pokemon-makes-attack.js";

export function calculateDamagesAttack(firstAttacker, secondAttacker) {
  const isFirstAttackerAttackActive =
    pokemonVariables.isFirstAttackActive ||
    pokemonVariables.isSecondAttackActive;

  const firstAttackerAttack = pokemonVariables.isFirstAttackActive
    ? firstAttacker.firstAttack
    : firstAttacker.secondAttack;

  const firstAttackerFirstAttackBonusType =
    firstAttackerAttack.type === "bonus" ||
    firstAttackerAttack.type !== "bonus";

  if (
    isFirstAttackerAttackActive &&
    !pokemonVariables.isProtectOrDetectCapacityActived &&
    firstAttackerFirstAttackBonusType
  ) {
    openDialogueWhenPokemonMakesAttack(firstAttacker);

    return pokemonMakesAttack(
      firstAttacker,
      secondAttacker,
      firstAttackerAttack
    );
  } else if (
    isFirstAttackerAttackActive &&
    pokemonVariables.isProtectOrDetectCapacityActived &&
    firstAttackerAttack.type !== "bonus"
  ) {
    openDialogueWhenPokemonMakesAttack(firstAttacker);
    openDialogueWhenPokemonProtectingHimself(secondAttacker);
    disabledProtectCapacity();
    return 0;
  } else if (
    isFirstAttackerAttackActive &&
    pokemonVariables.isProtectOrDetectCapacityActived &&
    firstAttackerAttack.type === "bonus"
  ) {
    handleBonusAttackWhenProtectOrDetectCapacityActived(
      firstAttacker,
      firstAttackerAttack
    );
    return 0;
  }
}
