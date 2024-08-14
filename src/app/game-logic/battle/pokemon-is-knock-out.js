import { updateDisplayPokemonHp } from "./update-display-Pokemon-hp.js";
import {
  determinePokemonKo,
  displayMenu,
  openBattleResultPopup,
  updatePokemonSelectionStatus,
} from "../../components/battle-result-popup/display-battle-result/display-battle-result.js";
import { openDialogueWhenPokemonKo } from "../../components/battle-dialogues/dialogues/pokemon-ko.dialogue.js";
import { hideBattleInProgress } from "./display-battle-in-progress.js";
import { applyClassSlideOut } from "./animations/utils/pokemon-ko.animation.js";
import { removeStatutAnimationWhenPokemonKo } from "./animations/animations-statuts/remove-primary-statut-when-pokemon-ko/remove-statut-animation-when-pokemon-ko.js";

export async function pokemonLose(firstAttacker, secondAttacker) {
  determinePokemonKo(firstAttacker, secondAttacker);
  updateDisplayPokemonHp(firstAttacker, secondAttacker);
  updatePokemonSelectionStatus();
  removeStatutAnimationWhenPokemonKo();
  openBattleResultPopup();
  applyClassSlideOut();
  hideBattleInProgress();
  await openDialogueWhenPokemonKo();
  displayMenu();
}
