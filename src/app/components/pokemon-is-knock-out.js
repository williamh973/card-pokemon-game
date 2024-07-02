import { updateDisplayPokemonHp } from "./update-display-Pokemon-hp.js";
import { displayBattleResult } from "./display-battle-result.js";
import { openDialogueWhenPokemonKo } from "./dialogue-battle.js";
import { hideBattleInProgress } from "./display-battle-in-progress.js";
import {
  hideFirstAttackerWhenLose,
  hideSecondAttackerWhenLose,
  hidePlayerSecondAttackerWhenLose,
  hidePlayerFirstAttackerWhenLose,
} from "./hideLocationsWhenPokemonsLoses.js";
import { displayStatsPokemonsContainer } from "./pokemon-stats-container.js";

export function pokemonLose(
  firstAttacker,
  secondAttacker,
  enemyPokemon,
  playerSelectedPokemon
) {
  updateDisplayPokemonHp(firstAttacker, secondAttacker);
  displayBattleResult();
  openDialogueWhenPokemonKo();
  hideBattleInProgress();

  if (firstAttacker.stats.hp === 0) {
    hideFirstAttackerWhenLose(firstAttacker, enemyPokemon);
    hidePlayerFirstAttackerWhenLose(firstAttacker, playerSelectedPokemon);
  } else if (secondAttacker.stats.hp === 0) {
    hideSecondAttackerWhenLose(secondAttacker, enemyPokemon);
    hidePlayerSecondAttackerWhenLose(secondAttacker, playerSelectedPokemon);
  }

  displayStatsPokemonsContainer(firstAttacker, secondAttacker);
}
