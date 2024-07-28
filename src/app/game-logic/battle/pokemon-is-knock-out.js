import { updateDisplayPokemonHp } from "./update-display-Pokemon-hp.js";
import {
  determinePokemonKo,
  displayMenu,
  openBattleResultPopup,
  updatePokemonSelectionStatus,
} from "../../components/battle-result-popup/display-battle-result/display-battle-result.js";
import { openDialogueWhenPokemonKo } from "../../components/battle-dialogues/dialogues/pokemon-ko.dialogue.js";
import { hideBattleInProgress } from "./display-battle-in-progress.js";
import {
  hideFirstAttackerWhenLose,
  hideSecondAttackerWhenLose,
} from "./hide-locations-when-pokemons-loses.js";
import { animationWhenPokemonKo } from "./animations/pokemon-ko.animation.js";
import { removeStatutAnimationWhenPokemonKo } from "./animations/animations-statuts/remove/remove-statut-animation-when-pokemon-ko.js";

export async function pokemonLose(firstAttacker, secondAttacker, enemyPokemon) {
  determinePokemonKo(firstAttacker, secondAttacker);
  updateDisplayPokemonHp(firstAttacker, secondAttacker);
  updatePokemonSelectionStatus();
  removeStatutAnimationWhenPokemonKo();
  openBattleResultPopup();
  animationWhenPokemonKo();
  hideBattleInProgress();
  await openDialogueWhenPokemonKo();
  displayMenu();

  if (firstAttacker.stats.hp === 0) {
    hideFirstAttackerWhenLose(firstAttacker, enemyPokemon);
  } else if (secondAttacker.stats.hp === 0) {
    hideSecondAttackerWhenLose(secondAttacker, enemyPokemon);
  }
}
