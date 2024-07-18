import {
  firstAttacker,
  secondAttacker,
  determineFirstAttacker,
} from "./determine-first-attacker.js";
import { displayBattleInProgress } from "./display-battle-in-progress.js";
import { calculateDamagesAttack } from "./attacks/damages-attacks/calculate-damages-attacks/calculate-damage-attack.js";
import { isProtectOrDetectCapacityActived } from "./attacks/factors-attacks/protect-detect-factor/protect-factors-attacks/protect-detect-capacity-actived.js";
import {
  handleAttacksDelayAndAnimations,
  sleepAttacksAnimation,
} from "./animations/animations-delays/attacks-delay.js";
import {
  firstAttackerTakesDamage,
  secondAttackerTakesDamage,
} from "./pokemon-takes-damage.js";
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

document.addEventListener("DOMContentLoaded", () => {
  battleSelectors.startBattleButton.addEventListener("click", () => {
    async function battle() {
      initNumberOfTurn();
      displayBattleInProgress();
      determineFirstAttacker();

      while (firstAttacker.stats.hp > 0 && secondAttacker.stats.hp > 0) {
        pokemonVariables.isFirstAttackerTurn = true;
        pokemonVariables.isSecondAttackerTurn = false;
        pokemonVariables.isFirstAttackActive = false;
        pokemonVariables.isSecondAttackActive = false;
        pokemonVariables.isFirstAttackerCanAttack = false;
        pokemonVariables.isSecondAttackerCanAttack = false;
        console.log(
          "isFirstAttackerTurn",
          pokemonVariables.isFirstAttackerTurn
        );

        updateNumberOfTurns();

        isProtectOrDetectCapacityActived;
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

          pokemonLose(
            firstAttacker,
            secondAttacker,
            enemyPokemon,
            playerSelectedPokemon
          );

          break;
        }
        await checkIfPokemonStatutScared(
          firstAttacker,
          sleepStatutAlteredAnimation
        );

        checkIfPokemonCanAttack(pokemonVariables.isFirstAttackerTurn);

        if (pokemonVariables.isFirstAttackerCanAttack) {
          console.log(
            firstAttacker.name,
            "isFirstAttackerCanAttack",
            pokemonVariables.isFirstAttackerCanAttack
          );
          const randomNumber = Math.floor(Math.random() * 100) + 1;

          if (randomNumber <= 50) {
            pokemonVariables.isFirstAttackActive = true;
            pokemonVariables.isSecondAttackActive = false;

            let damageFirstAttack = calculateDamagesAttack(
              firstAttacker,
              secondAttacker
            );

            if (pokemonVariables.isFirstAttackActive) {
              const attackDelays =
                handleAttacksDelayAndAnimations(firstAttacker);

              await sleepAttacksAnimation(attackDelays.pokemonAttackDelay);

              secondAttackerTakesDamage(
                firstAttacker,
                secondAttacker,
                damageFirstAttack
              );
            }
          } else {
            pokemonVariables.isFirstAttackActive = false;
            pokemonVariables.isSecondAttackActive = true;

            let damageSecondAttack = calculateDamagesAttack(
              firstAttacker,
              secondAttacker
            );

            if (pokemonVariables.isSecondAttackActive) {
              const attackDelays =
                handleAttacksDelayAndAnimations(firstAttacker);

              await sleepAttacksAnimation(attackDelays.pokemonAttackDelay);

              secondAttackerTakesDamage(
                firstAttacker,
                secondAttacker,
                damageSecondAttack
              );
            }
          }
        }

        if (secondAttacker.stats.hp <= 0) {
          secondAttacker.stats.hp = 0;

          pokemonLose(
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

          pokemonLose(
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

          pokemonLose(
            firstAttacker,
            secondAttacker,
            enemyPokemon,
            playerSelectedPokemon
          );

          break;
        }

        pokemonVariables.isFirstAttackerTurn = false;
        pokemonVariables.isSecondAttackerTurn = true;
        pokemonVariables.isFirstAttackActive = false;
        pokemonVariables.isSecondAttackActive = false;
        console.log(
          "isSecondAttackerTurn",
          pokemonVariables.isSecondAttackerTurn
        );

        isProtectOrDetectCapacityActived;

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

          pokemonLose(
            firstAttacker,
            secondAttacker,
            enemyPokemon,
            playerSelectedPokemon
          );

          break;
        }

        await checkIfPokemonStatutScared(
          secondAttacker,
          sleepStatutAlteredAnimation
        );

        checkIfPokemonCanAttack(pokemonVariables.isSecondAttackerTurn);

        if (pokemonVariables.isSecondAttackerCanAttack) {
          console.log(
            secondAttacker.name,
            "isSecondAttackerCanAttack",
            pokemonVariables.isSecondAttackerCanAttack
          );
          const randomNumber = Math.floor(Math.random() * 100) + 1;

          if (randomNumber <= 50) {
            pokemonVariables.isFirstAttackActive = true;
            pokemonVariables.isSecondAttackActive = false;

            let damageFirstAttack = calculateDamagesAttack(
              secondAttacker,
              firstAttacker
            );

            if (pokemonVariables.isFirstAttackActive) {
              const attackDelays =
                handleAttacksDelayAndAnimations(secondAttacker);

              await sleepAttacksAnimation(attackDelays.pokemonAttackDelay);

              firstAttackerTakesDamage(
                firstAttacker,
                secondAttacker,
                damageFirstAttack
              );
            }
          } else {
            pokemonVariables.isFirstAttackActive = false;
            pokemonVariables.isSecondAttackActive = true;

            let damageSecondAttack = calculateDamagesAttack(
              secondAttacker,
              firstAttacker
            );

            if (pokemonVariables.isSecondAttackActive) {
              const attackDelays =
                handleAttacksDelayAndAnimations(secondAttacker);

              await sleepAttacksAnimation(attackDelays.pokemonAttackDelay);

              firstAttackerTakesDamage(
                firstAttacker,
                secondAttacker,
                damageSecondAttack
              );
            }
          }
        }

        if (firstAttacker.stats.hp <= 0) {
          firstAttacker.stats.hp = 0;

          pokemonLose(
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

          pokemonLose(
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

        if (secondAttacker.stats.hp <= 0) {
          secondAttacker.stats.hp = 0;
          break;
        }
      }
    }
    battle();
  });
});
