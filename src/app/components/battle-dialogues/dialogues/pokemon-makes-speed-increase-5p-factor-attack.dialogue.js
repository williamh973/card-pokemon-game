import { displayDialogue } from "./display-dialogue-during-battle.js";

export async function openDialogueWhenPokemonMakesSpeedIncrease5pFactorAttack(
  pokemon
) {
  await displayDialogue(`Vitesse de ${pokemon.name} augmente !`, 2000);
}
