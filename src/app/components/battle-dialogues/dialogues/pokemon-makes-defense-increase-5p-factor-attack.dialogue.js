import { displayDialogue } from "./display-dialogue.js";

export async function openDialogueWhenPokemonMakesDefenseIncrease5pFactorAttack(
  pokemon
) {
  await displayDialogue(`La Défense de ${pokemon.name} augmente !`, 2000);
}
