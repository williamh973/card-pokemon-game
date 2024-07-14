import { dialogueConstant } from "../../../shared/battle/dialogues/dialogue-constant.js";
import { battleSelectors } from "../../../shared/battle/battle-selectors.js";
import { pokemonVariables } from "../../../shared/pokemon/pokemon-variables.js";

function getText(firstAttacker, attackName) {
  return `${firstAttacker.name} utilise ${attackName} !`;
}

export function openDialogueWhenPokemonMakesAttack(firstAttacker) {
  battleSelectors.displayDialogue.style.display = "flex";

  if (pokemonVariables.isFirstAttackActive) {
    battleSelectors.displayDialogue.textContent = getText(
      firstAttacker,
      firstAttacker.firstAttack.name
    );
  } else if (pokemonVariables.isSecondAttackActive) {
    battleSelectors.displayDialogue.textContent = getText(
      firstAttacker,
      firstAttacker.secondAttack.name
    );
  }

  setTimeout(function () {
    battleSelectors.displayDialogue.style.display = "none";
  }, dialogueConstant.ATTACKS_DISPLAY_DURATION);
}
