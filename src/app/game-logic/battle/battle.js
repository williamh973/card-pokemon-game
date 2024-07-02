import {
  firstAttacker,
  secondAttacker,
  determineFirstAttacker,
} from "./determine-first-attacker.js";
import { displayBattleInProgress } from "./display-battle-in-progress.js";
import { calculateDamageFirstAttack } from "../../components/damages-attacks/calculate-damages-attacks/calculateDamageFirstAttack.js";
import { calculateDamageSecondAttack } from "../../components/damages-attacks/calculate-damages-attacks/calculateDamageSecondAttack.js";
import { domElements } from "../../shared/dom/dom-elements.js";
import { isProtectOrDetectCapacityActived } from "../../components/factors-attacks/protect-factors-attacks/protect-detect-capacity-actived.js";
import {
  getAttackDelays,
  sleepAttacksAnimation,
} from "./animations-delays/attacks-delay.js";
import {
  firstAttackerTakesDamage,
  secondAttackerTakesDamage,
} from "./pokemon-takes-damage.js";
import { pokemonLose } from "./pokemon-is-knock-out.js";
import { sleepStatutAlteredAnimation } from "./animations-delays/alterations-delay.js";
import {
  checkIfFirstAttackerStatusHasBurningOrPoisoned,
  checkIfFirstAttackerStatusHasParalyzedFrozenNormalOrAsleep,
  checkIfFirstAttackerStatusConfusing,
  checkIfFirstAttackerStatusScared,
  checkIfFirstAttackerStatusCursed,
} from "../../components/handle-statut-state-in-fight/first-attacker/check-if-first-attacker-statut-has-changed.js";
import {
  checkIfSecondAttackerStatusHasBurningOrPoisoned,
  checkIfSecondAttackerStatusHasParalyzedFrozenNormalOrAsleep,
  checkIfSecondAttackerStatusConfusing,
  checkIfSecondAttackerStatusScared,
  checkIfSecondAttackerStatusCursed,
} from "../../components/handle-statut-state-in-fight/second-attacker/check-if-second-attacker-statut-has-changed.js";
import { firstAttackerStatutStateVariableList } from "../../components/handle-statut-state-in-fight/first-attacker/first-attacker-statut-state-alteration/first-attacker-primary-statut-alteration.js";
import { firstAttackerSecondaryStatutStateVariableList } from "../../components/handle-statut-state-in-fight/first-attacker/first-attacker-statut-state-alteration/first-attacker-secondary-statut-alteration.js";
import { secondAttackerStatutStateVariableList } from "../../components/handle-statut-state-in-fight/second-attacker/second-attacker-statut-state-alteration/second-attacker-primary-statut-alteration.js";
import { secondAttackerSecondaryStatutStateVariableList } from "../../components/handle-statut-state-in-fight/second-attacker/second-attacker-statut-state-alteration/second-attacker-secondary-statut-alteration.js";
import { pokemonVariables } from "../../shared/pokemon/pokemon-variables.js";
import { battleVariable } from "../../shared/battle/battle-variables.js";
import { battleSelectors } from "../../shared/battle/battle-selectors.js";

document.addEventListener("DOMContentLoaded", () => {
  battleSelectors.startBattleButton.addEventListener("click", () => {
    async function battle() {
      battleVariable.isLoopRunning = true;

      displayBattleInProgress();
      determineFirstAttacker();

      while (
        firstAttacker.stats.hp > 0 &&
        secondAttacker.stats.hp > 0 &&
        battleVariable.isLoopRunning
      ) {
        pokemonVariables.isFirstAttackActive = false;
        pokemonVariables.isSecondAttackActive = false;
        battleVariable.numberOfTurns++;

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
          !firstAttackerStatutStateVariableList.isFirstAttackerParalyzed &&
          !firstAttackerStatutStateVariableList.isFirstAttackerFrozen &&
          !firstAttackerStatutStateVariableList.isFirstAttackerAsleep &&
          !firstAttackerSecondaryStatutStateVariableList.isFirstAttackerConfusing &&
          !firstAttackerSecondaryStatutStateVariableList.isFirstAttackerScared
        ) {
          const randomNumber = Math.floor(Math.random() * 100) + 1;

          if (randomNumber <= 50) {
            pokemonVariables.isFirstAttackActive = true;
            pokemonVariables.isSecondAttackActive = false;

            let damageFirstAttack = calculateDamageFirstAttack(
              firstAttacker,
              secondAttacker,
              pokemonVariables.isFirstAttackActive,
              firstAttacker.firstAttack.strength,
              firstAttacker.stats.specialAtt,
              secondAttacker.stats.specialDef,
              firstAttacker.firstAttack.precision,
              firstAttacker.firstAttack.type,
              secondAttacker.type,
              secondAttacker.secondaryType
            );

            if (pokemonVariables.isFirstAttackActive) {
              const attackDelays = getAttackDelays(
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

            let damageSecondAttack = calculateDamageSecondAttack(
              firstAttacker,
              secondAttacker,
              pokemonVariables.isSecondAttackActive,
              firstAttacker.secondAttack.strength,
              firstAttacker.stats.specialAtt,
              secondAttacker.stats.specialDef,
              firstAttacker.secondAttack.precision,
              firstAttacker.secondAttack.type,
              secondAttacker.type,
              secondAttacker.secondaryType
            );

            if (pokemonVariables.isSecondAttackActive) {
              const attackDelays = getAttackDelays(
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
          !secondAttackerStatutStateVariableList.isSecondAttackerParalyzed &&
          !secondAttackerStatutStateVariableList.isSecondAttackerFrozen &&
          !secondAttackerStatutStateVariableList.isSecondAttackerAsleep &&
          !secondAttackerSecondaryStatutStateVariableList.isSecondAttackerConfusing &&
          !secondAttackerSecondaryStatutStateVariableList.isSecondAttackerScared
        ) {
          const randomNumber = Math.floor(Math.random() * 100) + 1;

          if (randomNumber <= 50) {
            pokemonVariables.isFirstAttackActive = true;
            pokemonVariables.isSecondAttackActive = false;

            let damageFirstAttack = calculateDamageFirstAttack(
              secondAttacker,
              firstAttacker,
              pokemonVariables.isFirstAttackActive,
              secondAttacker.firstAttack.strength,
              secondAttacker.stats.specialAtt,
              firstAttacker.stats.specialDef,
              secondAttacker.firstAttack.precision,
              secondAttacker.firstAttack.type,
              firstAttacker.type,
              firstAttacker.secondaryType
            );

            if (pokemonVariables.isFirstAttackActive) {
              const attackDelays = getAttackDelays(
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

            let damageSecondAttack = calculateDamageSecondAttack(
              secondAttacker,
              firstAttacker,
              pokemonVariables.isSecondAttackActive,
              secondAttacker.secondAttack.strength,
              secondAttacker.stats.specialAtt,
              firstAttacker.stats.specialDef,
              secondAttacker.secondAttack.precision,
              secondAttacker.secondAttack.type,
              firstAttacker.type,
              firstAttacker.secondaryType
            );

            if (pokemonVariables.isSecondAttackActive) {
              const attackDelays = getAttackDelays(
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

  document.addEventListener("keydown", function (event) {
    if (event.key === "a") {
      battleVariable.isLoopRunning = false;
    }
  });
});
