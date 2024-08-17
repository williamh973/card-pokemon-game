import { displayDialogue } from "./display-dialogue-during-battle.js";

export async function openDialogueWhenPokemonMakesDefenseDecrease5pFactorAttack(
  pokemon
) {
  await displayDialogue(`La Défense de ${pokemon.name} baisse !`, 2000);
}
