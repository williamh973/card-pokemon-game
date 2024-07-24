import { displayDialogue } from "./display-dialogue.js";

export async function openDialogueWhenPokemonMakesHpIncrease50PercentOfDamagesFactorAttack(
  pokemon,
  actualIncrease
) {
  await displayDialogue(`${pokemon.name} regagne ${actualIncrease} pv !`, 2000);
}
