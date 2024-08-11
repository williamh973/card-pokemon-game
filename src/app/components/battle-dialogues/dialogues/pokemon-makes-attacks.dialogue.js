import { pokemonVariables } from "../../../shared/pokemon/pokemon-variables.js";
import { displayDialogue } from "./display-dialogue-during-battle.js";

export async function openDialogueWhenPokemonMakesAttack(firstAttacker) {
  if (pokemonVariables.isFirstAttackActive) {
    await displayDialogue(
      `${firstAttacker.name} utilise ${firstAttacker.firstAttack.name} !`,
      2000
    );
  } else if (pokemonVariables.isSecondAttackActive) {
    await displayDialogue(
      `${firstAttacker.name} utilise ${firstAttacker.secondAttack.name} !`,
      2000
    );
  }
}
