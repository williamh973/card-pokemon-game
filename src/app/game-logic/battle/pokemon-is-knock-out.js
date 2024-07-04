import { updateDisplayPokemonHp } from "./update-display-Pokemon-hp.js";
import { displayBattleResult } from "../../components/battle-result-popup/display-battle-result/display-battle-result.js";
import { openDialogueWhenPokemonKo } from "../../components/battle-dialogues/dialogues/pokemon-ko.dialogue.js";
import { hideBattleInProgress } from "./display-battle-in-progress.js";
import {
  hideFirstAttackerWhenLose,
  hideSecondAttackerWhenLose,
} from "./hideLocationsWhenPokemonsLoses.js";
import { animationWhenPokemonKo } from "./animations/pokemon-ko.animation.js";
import { stopPokemonKoStatutAnimation } from "./statut/stop-pokemon-ko-statut-animation.js";

export function pokemonLose(firstAttacker, secondAttacker, enemyPokemon) {
  updateDisplayPokemonHp(firstAttacker, secondAttacker);
  displayBattleResult();
  openDialogueWhenPokemonKo();
  hideBattleInProgress();
  stopPokemonKoStatutAnimation();

  if (firstAttacker.stats.hp === 0) {
    hideFirstAttackerWhenLose(firstAttacker, enemyPokemon);
  } else if (secondAttacker.stats.hp === 0) {
    hideSecondAttackerWhenLose(secondAttacker, enemyPokemon);
  }
  animationWhenPokemonKo();

  // displayStatsPokemonsContainer(firstAttacker, secondAttacker);
}
