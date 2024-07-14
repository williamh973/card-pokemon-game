import {
  firstAttacker,
  secondAttacker,
  determineFirstAttacker,
} from "./determine-first-attacker.js";
import { displayBattleInProgress } from "./display-battle-in-progress.js";
import { calculateDamagesAttack } from "./attacks/damages-attacks/calculate-damages-attacks/calculate-damage-first-attack.js";
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
import {
  checkIfFirstAttackerStatusHasBurningOrPoisoned,
  checkIfFirstAttackerStatusHasParalyzedFrozenNormalOrAsleep,
  checkIfFirstAttackerStatusConfusing,
  checkIfFirstAttackerStatusScared,
  checkIfFirstAttackerStatusCursed,
} from "./statut/handle-statut-state-in-fight/first-attacker/check-if-first-attacker-statut-has-changed.js";
import {
  checkIfSecondAttackerStatusHasBurningOrPoisoned,
  checkIfSecondAttackerStatusHasParalyzedFrozenNormalOrAsleep,
  checkIfSecondAttackerStatusConfusing,
  checkIfSecondAttackerStatusScared,
  checkIfSecondAttackerStatusCursed,
} from "./statut/handle-statut-state-in-fight/second-attacker/check-if-second-attacker-statut-has-changed.js";
import { pokemonVariables } from "../../shared/pokemon/pokemon-variables.js";
import { battleSelectors } from "../../shared/battle/battle-selectors.js";
import { updateNumberOfTurns } from "./number-of-turn/update-number-of-turn.js";
import { initNumberOfTurn } from "./number-of-turn/init-number-of-turn.js";

document.addEventListener("DOMContentLoaded", () => {
  battleSelectors.startBattleButton.addEventListener("click", () => {
    async function battle() {
      initNumberOfTurn();
      displayBattleInProgress();
      determineFirstAttacker();

      while (firstAttacker.stats.hp > 0 && secondAttacker.stats.hp > 0) {
        pokemonVariables.isFirstAttackActive = false;
        pokemonVariables.isSecondAttackActive = false;
        updateNumberOfTurns();

        isProtectOrDetectCapacityActived;
        await checkIfFirstAttackerStatusHasParalyzedFrozenNormalOrAsleep(
          firstAttacker,
          sleepStatutAlteredAnimation
        );

        await checkIfFirstAttackerStatusConfusing(
          firstAttacker,
          secondAttacker,
          pokemonVariables.enemyPokemon,
          pokemonVariables.playerSelectedPokemon,
          sleepStatutAlteredAnimation
        );

        if (firstAttacker.stats.hp <= 0) {
          firstAttacker.stats.hp = 0;
          break;
        }
        await checkIfFirstAttackerStatusScared(
          firstAttacker,
          sleepStatutAlteredAnimation
        );

        if (
          !pokemonVariables.isFirstAttackerParalyzed &&
          !pokemonVariables.isFirstAttackerFrozen &&
          !pokemonVariables.isFirstAttackerAsleep &&
          !pokemonVariables.isFirstAttackerConfusing &&
          !pokemonVariables.isFirstAttackerScared
        ) {
          const randomNumber = Math.floor(Math.random() * 100) + 1;

          if (randomNumber <= 50) {
            pokemonVariables.isFirstAttackActive = true;
            pokemonVariables.isSecondAttackActive = false;

            let damageFirstAttack = calculateDamagesAttack(
              firstAttacker,
              secondAttacker
            );

            if (pokemonVariables.isFirstAttackActive) {
              const attackDelays = handleAttacksDelayAndAnimations(
                firstAttacker,
                secondAttacker
              );

              await sleepAttacksAnimation(
                attackDelays.firstAttackerFirstAttackDelay
              );

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
              const attackDelays = handleAttacksDelayAndAnimations(
                firstAttacker,
                secondAttacker
              );

              await sleepAttacksAnimation(
                attackDelays.firstAttackerSecondAttackDelay
              );

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

        await checkIfFirstAttackerStatusHasBurningOrPoisoned(
          firstAttacker,
          secondAttacker,
          pokemonVariables.enemyPokemon,
          pokemonVariables.playerSelectedPokemon,
          sleepStatutAlteredAnimation
        );

        if (firstAttacker.stats.hp <= 0) {
          firstAttacker.stats.hp = 0;
          break;
        }

        await checkIfFirstAttackerStatusCursed(
          firstAttacker,
          secondAttacker,
          pokemonVariables.enemyPokemon,
          pokemonVariables.playerSelectedPokemon,
          sleepStatutAlteredAnimation
        );

        if (firstAttacker.stats.hp <= 0) {
          firstAttacker.stats.hp = 0;
          break;
        }

        pokemonVariables.isFirstAttackActive = false;
        pokemonVariables.isSecondAttackActive = false;

        isProtectOrDetectCapacityActived;

        await checkIfSecondAttackerStatusHasParalyzedFrozenNormalOrAsleep(
          secondAttacker,
          sleepStatutAlteredAnimation
        );

        await checkIfSecondAttackerStatusConfusing(
          secondAttacker,
          firstAttacker,
          pokemonVariables.enemyPokemon,
          pokemonVariables.playerSelectedPokemon,
          sleepStatutAlteredAnimation
        );

        if (secondAttacker.stats.hp <= 0) {
          secondAttacker.stats.hp = 0;
          break;
        }

        await checkIfSecondAttackerStatusScared(
          secondAttacker,
          sleepStatutAlteredAnimation
        );

        if (
          !pokemonVariables.isSecondAttackerParalyzed &&
          !pokemonVariables.isSecondAttackerFrozen &&
          !pokemonVariables.isSecondAttackerAsleep &&
          !pokemonVariables.isSecondAttackerConfusing &&
          !pokemonVariables.isSecondAttackerScared
        ) {
          const randomNumber = Math.floor(Math.random() * 100) + 1;

          if (randomNumber <= 50) {
            pokemonVariables.isFirstAttackActive = true;
            pokemonVariables.isSecondAttackActive = false;

            let damageFirstAttack = calculateDamagesAttack(
              secondAttacker,
              firstAttacker
            );

            if (pokemonVariables.isFirstAttackActive) {
              const attackDelays = handleAttacksDelayAndAnimations(
                firstAttacker,
                secondAttacker
              );

              await sleepAttacksAnimation(
                attackDelays.secondAttackerFirstAttackDelay
              );

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
              const attackDelays = handleAttacksDelayAndAnimations(
                firstAttacker,
                secondAttacker
              );

              await sleepAttacksAnimation(
                attackDelays.secondAttackerSecondAttackDelay
              );

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

        await checkIfSecondAttackerStatusHasBurningOrPoisoned(
          secondAttacker,
          firstAttacker,
          pokemonVariables.enemyPokemon,
          pokemonVariables.playerSelectedPokemon,
          sleepStatutAlteredAnimation
        );

        if (secondAttacker.stats.hp <= 0) {
          secondAttacker.stats.hp = 0;
          break;
        }

        await checkIfSecondAttackerStatusCursed(
          secondAttacker,
          firstAttacker,
          pokemonVariables.enemyPokemon,
          pokemonVariables.playerSelectedPokemon,
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
