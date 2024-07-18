import { openDialogueWhenPokemonReadyToProtectItself } from "../../../../../../components/battle-dialogues/dialogues/pokemon-ready-to-protect-itself.dialogue.js";
import { pokemonVariables } from "../../../../../../shared/pokemon/pokemon-variables.js";
import { pokemonDecreasePrecision } from "./precision-decrease-and-reset.js";

const possibleAttacksList = ["Abri", "Détection"];

export function protectFactorAttack(firstAttacker, firstAttackerAttack) {
  if (possibleAttacksList.includes(firstAttackerAttack.name)) {
    console.log(
      "firstAttacker",
      firstAttacker.name,
      "firstAttackerAttack",
      firstAttackerAttack.name,
      "isProtectCapacity",
      pokemonVariables.isProtectOrDetectCapacityActived
    );
    pokemonVariables.isProtectOrDetectCapacityActived = true;
    openDialogueWhenPokemonReadyToProtectItself(firstAttacker);
    pokemonDecreasePrecision(firstAttackerAttack);
  }
}
