import { openDialogueWhenPokemonReadyToProtectItself } from "../../../../../../components/battle-dialogues/dialogues/pokemon-ready-to-protect-itself.dialogue.js";
import { pokemonVariables } from "../../../../../../shared/pokemon/pokemon-variables.js";
import { pokemonDecreasePrecision } from "./precision-decrease-and-reset.js";

const possibleAttacksList = ["Abri", "Détection"];

export async function protectOrDetectFactorAttack(
  firstAttacker,
  firstAttackerAttack
) {
  if (possibleAttacksList.includes(firstAttackerAttack.name)) {
    pokemonVariables.isProtectOrDetectCapacityActived = true;
    await openDialogueWhenPokemonReadyToProtectItself(firstAttacker);
    pokemonDecreasePrecision(firstAttackerAttack);
  }
}
