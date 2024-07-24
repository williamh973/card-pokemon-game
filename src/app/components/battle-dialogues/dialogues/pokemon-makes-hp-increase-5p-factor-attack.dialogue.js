import { displayDialogue } from "./display-dialogue.js";

export async function openDialogueWhenPokemonMakesHpIncrease5pFactorAttack(
  pokemon,
  hpGained
) {
  await displayDialogue(`${pokemon.name} regagne ${hpGained} pv !`, 2000);
}
