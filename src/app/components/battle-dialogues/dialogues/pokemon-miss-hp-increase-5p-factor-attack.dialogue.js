import { displayDialogue } from "./display-dialogue-during-battle.js";

export async function openDialogueWhenPokemonMissHpIncrease5pFactorAttack() {
  await displayDialogue(`Cela n'a aucun effet !`, 2000);
}
