import { displayDialogue } from "./display-dialogue-during-battle.js";

export async function openDialogueWhenPokemonMakesDefenseIncrease5pFactorAttack(
  pokemon
) {
  await displayDialogue(`La Défense de ${pokemon.name} augmente !`, 2000);
}
