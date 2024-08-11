import { displayDialogue } from "./display-dialogue-during-battle.js";

export async function openDialogueWhenPokemonMakesSpeedIncrease10pFactorAttack(
  pokemon
) {
  await displayDialogue(`Vitesse de ${pokemon.name} augmente beaucoup !`, 2000);
}
