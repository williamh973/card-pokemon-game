import { displayDialogue } from "./display-dialogue-during-battle.js";

export async function openDialogueWhenPokemonAttacksDespiteParalyzedStatut(
  pokemon
) {
  await displayDialogue(`${pokemon.name} résiste à sa paralysie !`, 2000);
}
