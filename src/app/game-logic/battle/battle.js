import {
  firstAttacker,
  secondAttacker,
  determineFirstAttacker,
} from "./determine-first-attacker.js";
import { displayBattleInProgress } from "./display-battle-in-progress.js";
import { pokemonLose } from "./pokemon-is-knock-out.js";
import { sleepStatutAlteredAnimation } from "./animations/animations-delays/alterations-delay.js";
import { checkIfPokemonStatusCursed } from "./statut/handle-statut-state-in-fight/check-statut-in-battle/check-if-pokemon-statut-cursed.js";
import { pokemonVariables } from "../../shared/pokemon/pokemon-variables.js";
import { battleSelectors } from "../../shared/battle/battle-selectors.js";
import { updateNumberOfTurns } from "./number-of-turn/update-number-of-turn.js";
import { initNumberOfTurn } from "./number-of-turn/init-number-of-turn.js";
import { checkIfPokemonCanAttack } from "./statut/handle-statut-state-in-fight/check-if-pokemon-can-attack.js";
import { checkIfPokemonStatutScared } from "./statut/handle-statut-state-in-fight/check-statut-in-battle/check-if-pokemon-statut-scared.js";
import { checkIfPokemonStatusHasParalyzedFrozenNormalOrAsleep } from "./statut/handle-statut-state-in-fight/check-statut-in-battle/check-if-pokemon-statut-paralyzed-frozen-normal-alseep.js";
import { updateDisplayPokemonHp } from "./update-display-Pokemon-hp.js";
import { checkIfPokemonStatusHasBurningOrPoisoned } from "./statut/handle-statut-state-in-fight/check-statut-in-battle/check-if-pokemon-statut-burning-poisoned.js";
import { checkIfPokemonStatusConfusing } from "./statut/handle-statut-state-in-fight/check-statut-in-battle/check-if-pokemon-statut-confused.js";
import { firstAttackerTurn } from "./first-attacker-turn.js";
import { secondAttackerTurn } from "./second-attacker-turn.js";
import { initBattle } from "./init-battle.js";

document.addEventListener("DOMContentLoaded", () => {
  battleSelectors.startBattleButton.addEventListener("click", () => {
    async function battle() {
      initNumberOfTurn();
      displayBattleInProgress();
      determineFirstAttacker();

      while (firstAttacker.stats.hp > 0 && secondAttacker.stats.hp > 0) {
        initBattle();
        updateNumberOfTurns();

        await checkIfPokemonStatusHasParalyzedFrozenNormalOrAsleep(
          firstAttacker,
          sleepStatutAlteredAnimation
        );

        await checkIfPokemonStatusConfusing(
          firstAttacker,
          sleepStatutAlteredAnimation
        );

        updateDisplayPokemonHp(firstAttacker, secondAttacker);

        if (firstAttacker.stats.hp <= 0) {
          firstAttacker.stats.hp = 0;

          await pokemonLose(
            firstAttacker,
            secondAttacker,
            pokemonVariables.enemyPokemon,
            pokemonVariables.playerSelectedPokemon
          );

          break;
        }

        await checkIfPokemonStatutScared(
          firstAttacker,
          sleepStatutAlteredAnimation
        );

        checkIfPokemonCanAttack(pokemonVariables.isFirstAttackerTurn);

        await firstAttackerTurn(firstAttacker, secondAttacker);

        if (secondAttacker.stats.hp <= 0) {
          secondAttacker.stats.hp = 0;

          await pokemonLose(
            firstAttacker,
            secondAttacker,
            pokemonVariables.enemyPokemon,
            pokemonVariables.playerSelectedPokemon
          );

          break;
        }

        await checkIfPokemonStatusHasBurningOrPoisoned(
          firstAttacker,
          sleepStatutAlteredAnimation
        );

        updateDisplayPokemonHp(firstAttacker, secondAttacker);

        if (firstAttacker.stats.hp <= 0) {
          firstAttacker.stats.hp = 0;

          await pokemonLose(
            firstAttacker,
            secondAttacker,
            pokemonVariables.enemyPokemon,
            pokemonVariables.playerSelectedPokemon
          );

          break;
        }

        await checkIfPokemonStatusCursed(
          firstAttacker,
          sleepStatutAlteredAnimation
        );

        updateDisplayPokemonHp(firstAttacker, secondAttacker);

        if (firstAttacker.stats.hp <= 0) {
          firstAttacker.stats.hp = 0;

          await pokemonLose(
            firstAttacker,
            secondAttacker,
            pokemonVariables.enemyPokemon,
            pokemonVariables.playerSelectedPokemon
          );

          break;
        }

        pokemonVariables.isFirstAttackerTurn = false;
        pokemonVariables.isFirstAttackActive = false;
        pokemonVariables.isSecondAttackActive = false;
        pokemonVariables.isFirstAttackerCanAttack = false;
        pokemonVariables.isSecondAttackerTurn = true;
        await checkIfPokemonStatusHasParalyzedFrozenNormalOrAsleep(
          secondAttacker,
          sleepStatutAlteredAnimation
        );

        await checkIfPokemonStatusConfusing(
          secondAttacker,
          sleepStatutAlteredAnimation
        );

        updateDisplayPokemonHp(firstAttacker, secondAttacker);

        if (secondAttacker.stats.hp <= 0) {
          secondAttacker.stats.hp = 0;

          await pokemonLose(
            firstAttacker,
            secondAttacker,
            pokemonVariables.enemyPokemon,
            pokemonVariables.playerSelectedPokemon
          );

          break;
        }

        await checkIfPokemonStatutScared(
          secondAttacker,
          sleepStatutAlteredAnimation
        );

        checkIfPokemonCanAttack(pokemonVariables.isSecondAttackerTurn);
        secondAttacker.name,
          "peut attaquer ? :",
          pokemonVariables.isSecondAttackerCanAttack;
        await secondAttackerTurn(secondAttacker, firstAttacker);

        if (firstAttacker.stats.hp <= 0) {
          firstAttacker.stats.hp = 0;

          await pokemonLose(
            firstAttacker,
            secondAttacker,
            pokemonVariables.enemyPokemon,
            pokemonVariables.playerSelectedPokemon
          );

          break;
        }

        await checkIfPokemonStatusHasBurningOrPoisoned(
          secondAttacker,
          sleepStatutAlteredAnimation
        );

        updateDisplayPokemonHp(firstAttacker, secondAttacker);

        if (secondAttacker.stats.hp <= 0) {
          secondAttacker.stats.hp = 0;

          await pokemonLose(
            firstAttacker,
            secondAttacker,
            pokemonVariables.enemyPokemon,
            pokemonVariables.playerSelectedPokemon
          );

          break;
        }

        await checkIfPokemonStatusCursed(
          secondAttacker,
          sleepStatutAlteredAnimation
        );

        updateDisplayPokemonHp(firstAttacker, secondAttacker);

        if (secondAttacker.stats.hp <= 0) {
          secondAttacker.stats.hp = 0;

          await pokemonLose(
            firstAttacker,
            secondAttacker,
            pokemonVariables.enemyPokemon,
            pokemonVariables.playerSelectedPokemon
          );

          break;
        }
      }
      console.log("end turns");
    }
    battle();
  });
});
