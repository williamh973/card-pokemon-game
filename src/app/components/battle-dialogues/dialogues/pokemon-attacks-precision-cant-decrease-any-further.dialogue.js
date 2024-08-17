import { displayDialogue } from "./display-dialogue-during-battle.js";

export async function openDialogueWhenPokemonPrecisionAttacksCantDecreaseAnyFurther(
  pokemon
) {
  await displayDialogue(
    `La précision de ${pokemon.name} ne peut pas baisser plus !`,
    2000
  );
}
