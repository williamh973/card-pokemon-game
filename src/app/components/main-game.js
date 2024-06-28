import {
  firstAttacker,
  secondAttacker,
  determineFirstAttacker,
} from "./determineFirstAttacker.js";
// import { handleMenu } from "./handle-menu-and-selections/handleMenu.js";
import { handlePokemonFirstSelection } from "./handle-menu-and-selections/handlePokemonFirstSelection.js";
import { handlePokemonSecondSelection } from "./handle-menu-and-selections/handlePokemonSecondSelection.js";
import { handleSelectionRandomPokemon } from "./handle-menu-and-selections/handlePokemonRandomSelection.js";
import { displayFightInProgress } from "./display-fight-in-progress.js";
import { calculateDamageFirstAttack } from "./damages-attacks/calculate-damages-attacks/calculateDamageFirstAttack.js";
import { calculateDamageSecondAttack } from "./damages-attacks/calculate-damages-attacks/calculateDamageSecondAttack.js";
import { domElementsFromSelectors } from "../shared/game-variables/dom/dom-elements.js";
import { displayStatsPokemonsContainer } from "./pokemon-stats-container.js";
import { isProtectOrDetectCapacityActived } from "./factors-attacks/protect-factors-attacks/protect-detect-capacity-actived.js";
import { possibleRandomPokemonsList } from "./handle-menu-and-selections/possible-random-pokemons-list.js";
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
} from "./handle-statut-state-in-fight/first-attacker/check-if-first-attacker-statut-has-changed.js";
import {
  checkIfSecondAttackerStatusHasBurningOrPoisoned,
  checkIfSecondAttackerStatusHasParalyzedFrozenNormalOrAsleep,
  checkIfSecondAttackerStatusConfusing,
  checkIfSecondAttackerStatusScared,
  checkIfSecondAttackerStatusCursed,
} from "./handle-statut-state-in-fight/second-attacker/check-if-second-attacker-statut-has-changed.js";
import { firstAttackerStatutStateVariableList } from "./handle-statut-state-in-fight/first-attacker/first-attacker-statut-state-alteration/first-attacker-primary-statut-alteration.js";
import { firstAttackerSecondaryStatutStateVariableList } from "./handle-statut-state-in-fight/first-attacker/first-attacker-statut-state-alteration/first-attacker-secondary-statut-alteration.js";
import { secondAttackerStatutStateVariableList } from "./handle-statut-state-in-fight/second-attacker/second-attacker-statut-state-alteration/second-attacker-primary-statut-alteration.js";
import { secondAttackerSecondaryStatutStateVariableList } from "./handle-statut-state-in-fight/second-attacker/second-attacker-statut-state-alteration/second-attacker-secondary-statut-alteration.js";
import { pokemonVariables } from "../shared/game-variables/pokemon/pokemon.js";
import { battleVariable } from "../shared/game-variables/battle/battle.js";

document.addEventListener("DOMContentLoaded", () => {
  domElementsFromSelectors.headContainer.appendChild(
    domElementsFromSelectors.fightInProgress
  );

  domElementsFromSelectors.selectFirstPokemonButton.addEventListener(
    "change",
    () => {
      handlePokemonFirstSelection(
        domElementsFromSelectors.selectFirstPokemonButton.value
      );
      pokemonVariables.isFirstPokemonSelected = true;
      pokemonVariables.playerSelectedPokemon =
        domElementsFromSelectors.selectFirstPokemonButton.value;
      domElementsFromSelectors.fightButtonContainer.style.display = "flex";
      activateFightButton();
      domElementsFromSelectors.containerFullPopupDialogueFight.style.display =
        "none";
      domElementsFromSelectors.displayDialogue.style.display = "none";
    }
  );

  domElementsFromSelectors.selectSecondPokemonButton.addEventListener(
    "change",
    () => {
      handlePokemonSecondSelection(
        domElementsFromSelectors.selectSecondPokemonButton.value
      );
      pokemonVariables.isSecondPokemonSelected = true;
      pokemonVariables.enemyPokemon =
        domElementsFromSelectors.selectSecondPokemonButton.value;
      domElementsFromSelectors.fightButtonContainer.style.display = "flex";
      activateFightButton();
      domElementsFromSelectors.containerFullPopupDialogueFight.style.display =
        "none";
      domElementsFromSelectors.displayDialogue.style.display = "none";
    }
  );

  domElementsFromSelectors.pokemonRandomSelectionButton.addEventListener(
    "click",
    () => {
      const randomIndex = Math.floor(
        Math.random() * possibleRandomPokemonsList.length
      );
      const pokemon = possibleRandomPokemonsList[randomIndex];
      domElementsFromSelectors.selectSecondPokemonButton.value = pokemon;
      handleSelectionRandomPokemon(pokemon);
      pokemonVariables.isSecondPokemonSelected = true;
      pokemonVariables.enemyPokemon = pokemon;
      domElementsFromSelectors.fightButtonContainer.style.display = "flex";
      activateFightButton();
      domElementsFromSelectors.containerFullPopupDialogueFight.style.display =
        "none";
      domElementsFromSelectors.displayDialogue.style.display = "none";
    }
  );

  domElementsFromSelectors.fightButton.disabled = true;

  domElementsFromSelectors.fightButton.addEventListener("click", () => {
    async function fight() {
      battleVariable.loopRunning = true;

      displayFightInProgress();
      determineFirstAttacker();

      while (
        firstAttacker.stats.hp > 0 &&
        secondAttacker.stats.hp > 0 &&
        battleVariable.loopRunning
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
    fight();
  });

  function activateFightButton() {
    if (
      pokemonVariables.isFirstPokemonSelected &&
      pokemonVariables.isSecondPokemonSelected
    ) {
      domElementsFromSelectors.fightButton.disabled = false;
    }
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "a") {
      battleVariable.loopRunning = false;
    }
  });
});
