import { displayDialogue } from "./display-dialogue.js";

export async function openDialogueWhenPokemonMakesSpeedIncrease5pFactorAttack(
  pokemon
) {
  await displayDialogue(`Vitesse de ${pokemon.name} augmente !`, 2000);
}
