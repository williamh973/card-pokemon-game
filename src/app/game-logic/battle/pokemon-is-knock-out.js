import { updateDisplayPokemonHp } from "./update-display-Pokemon-hp.js";
import { displayBattleResult } from "../../components/battle-result-popup/display-battle-result/display-battle-result.js";
import { openDialogueWhenPokemonKo } from "../../components/battle-dialogues/dialogues/dialogue-battle.js";
import { hideBattleInProgress } from "./display-battle-in-progress.js";
import {
  hideFirstAttackerWhenLose,
  hideSecondAttackerWhenLose,
} from "./hideLocationsWhenPokemonsLoses.js";
import { displayStatsPokemonsContainer } from "../../components/pokemon-stats-container.js";
import { pokemonVariables } from "../../shared/pokemon/pokemon-variables.js";

import { pokemonCardList } from "../../shared/pokemon/pokemon-card-list.js";

export function pokemonLose(firstAttacker, secondAttacker, enemyPokemon) {
  updateDisplayPokemonHp(firstAttacker, secondAttacker);
  displayBattleResult();
  openDialogueWhenPokemonKo();
  hideBattleInProgress();

  if (firstAttacker.stats.hp === 0) {
    hideFirstAttackerWhenLose(firstAttacker, enemyPokemon);
  } else if (secondAttacker.stats.hp === 0) {
    hideSecondAttackerWhenLose(secondAttacker, enemyPokemon);
  }
  animationWhenPokemonKo();
  displayStatsPokemonsContainer(firstAttacker, secondAttacker);

  function animationWhenPokemonKo() {
    const pokemonCard = pokemonCardList[pokemonVariables.pokemonKo];
    pokemonCard.classList.add("slide-out");

    pokemonCard.addEventListener("animationend", () => {
      pokemonCard.remove();
    });
  }
}
