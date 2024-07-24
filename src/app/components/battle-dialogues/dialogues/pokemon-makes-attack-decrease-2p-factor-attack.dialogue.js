import { displayDialogue } from "./display-dialogue.js";

export async function openDialogueWhenPokemonMakesAttackDecrease2pFactorAttack(
  secondAttacker
) {
  await displayDialogue(`L'Attaque de ${secondAttacker.name} baisse !`, 2000);
}
