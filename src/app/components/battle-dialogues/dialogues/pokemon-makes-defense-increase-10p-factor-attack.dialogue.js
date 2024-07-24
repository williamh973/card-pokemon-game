import { displayDialogue } from "./display-dialogue.js";

export async function openDialogueWhenPokemonMakesDefenseIncrease10pFactorAttack(
  pokemon
) {
  await displayDialogue(
    `La Défense de ${pokemon.name} augmente beaucoup !`,
    2000
  );
}
