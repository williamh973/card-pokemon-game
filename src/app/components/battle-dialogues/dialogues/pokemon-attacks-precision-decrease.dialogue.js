import { displayDialogue } from "./display-dialogue-during-battle.js";

export async function openDialogueWhenPokemonPrecisionAttacksDecrease2pFactorAttack(
  pokemon
) {
  await displayDialogue(`La précision de ${pokemon.name} baisse !`, 2000);
}
