import { pokemonVariables } from "../../../shared/pokemon/pokemon-variables.js";
import { displayDialogue } from "./display-dialogue.js";

export async function openDialogueWhenPokemonMakesAttack(firstAttacker) {
  if (pokemonVariables.isFirstAttackActive) {
    console.log("avant pokemon make attaque");
    await displayDialogue(
      `${firstAttacker.name} utilise ${firstAttacker.firstAttack.name} !`,
      2000
    );
    console.log("après pokemon make attaque");
  } else if (pokemonVariables.isSecondAttackActive) {
    await displayDialogue(
      `${firstAttacker.name} utilise ${firstAttacker.secondAttack.name} !`,
      2000
    );
  }
}
