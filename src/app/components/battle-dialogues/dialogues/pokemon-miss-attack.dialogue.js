import { displayDialogue } from "./display-dialogue-during-battle.js";

export async function openDialogueWhenPokemonMissAttack(attacker) {
  await displayDialogue(`${attacker.name} a raté son attaque !`, 2000);
}
