import { secondAttackerPrimaryStatutAlteration } from "./second-attacker-statut-state-alteration/second-attacker-primary-statut-alteration.js";

import {
  secondAttackerSecondaryStatutConfusingAlteration,
  secondAttackerSecondaryStatutCursedAlteration,
  secondAttackerSecondaryStatutScaredAlteration,
} from "./second-attacker-statut-state-alteration/second-attacker-secondary-statut-alteration.js";

import {
  getSecondAttackerPrimaryStatutAlterationDelays,
  getSecondAttackerConfusingStatutAlterationDelays,
  getSecondAttackerScaredStatutAlterationDelays,
  getSecondAttackerCursedStatutAlterationDelays,
} from "../../animations-delays/alterations-delay.js";

import { updateDisplayPokemonHp } from "../../update-display-Pokemon-hp.js";

import {
  openDialogueWhenPokemonHpDecreaseByBurningStatut,
  openDialogueWhenPokemonHpDecreaseByPoisonedStatut,
} from "../../dialogue-battle.js";

import { pokemonLose } from "../../pokemon-is-knock-out.js";

export const checkIfSecondAttackerStatusHasBurningOrPoisoned =
  async function checkIfSecondAttackerStatusHBurningOrPoisoned(
    secondAttacker,
    firstAttacker,
    enemyPokemon,
    playerSelectedPokemon,
    sleepStatutAlteredAnimation
  ) {
    if (
      secondAttacker.primaryStatut === "burning" ||
      secondAttacker.primaryStatut === "poisoned"
    ) {
      appropriateDialogues(secondAttacker);

      const secondAttackerAlterationStateDelays =
        getSecondAttackerPrimaryStatutAlterationDelays(secondAttacker);

      secondAttackerPrimaryStatutAlteration(secondAttacker);

      await sleepStatutAlteredAnimation(
        secondAttackerAlterationStateDelays.secondAttackerStateDelay
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
      }
    }
  };

export const checkIfSecondAttackerStatusHasParalyzedFrozenNormalOrAsleep =
  async function checkIfSecondAttackerStatusHasParalyzedFrozenNormalOrAsleep(
    secondAttacker,
    sleepStatutAlteredAnimation
  ) {
    if (
      secondAttacker.primaryStatut === "paralyzed" ||
      secondAttacker.primaryStatut === "frozen" ||
      secondAttacker.primaryStatut === "normal" ||
      secondAttacker.primaryStatut === "asleep"
    ) {
      const secondAttackerAlterationStateDelays =
        getSecondAttackerPrimaryStatutAlterationDelays(secondAttacker);

      secondAttackerPrimaryStatutAlteration(secondAttacker);

      await sleepStatutAlteredAnimation(
        secondAttackerAlterationStateDelays.secondAttackerStateDelay
      );
    }
  };

export const checkIfSecondAttackerStatusConfusing =
  async function checkIfSecondAttackerStatusConfusing(
    secondAttacker,
    firstAttacker,
    enemyPokemon,
    playerSelectedPokemon,
    sleepStatutAlteredAnimation
  ) {
    if (
      secondAttacker.secondaryStatut.isConfused ||
      secondAttacker.secondaryStatut.isNormal
    ) {
      const secondAttackerAlterationStateDelays =
        getSecondAttackerConfusingStatutAlterationDelays(secondAttacker);

      secondAttackerSecondaryStatutConfusingAlteration(secondAttacker);

      await sleepStatutAlteredAnimation(
        secondAttackerAlterationStateDelays.secondAttackerSecondStateConfusedDelay
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
      }
    }
  };

export const checkIfSecondAttackerStatusScared =
  async function checkIfSecondAttackerStatusScared(
    secondAttacker,
    sleepStatutAlteredAnimation
  ) {
    if (
      secondAttacker.secondaryStatut.isScared ||
      secondAttacker.secondaryStatut.isNormal
    ) {
      const secondAttackerAlterationStateDelays =
        getSecondAttackerScaredStatutAlterationDelays(secondAttacker);

      secondAttackerSecondaryStatutScaredAlteration(secondAttacker);

      await sleepStatutAlteredAnimation(
        secondAttackerAlterationStateDelays.secondAttackerSecondStateScaredDelay
      );
    }
  };

export const checkIfSecondAttackerStatusCursed =
  async function checkIfSecondAttackerStatusCursed(
    secondAttacker,
    firstAttacker,
    enemyPokemon,
    playerSelectedPokemon,
    sleepStatutAlteredAnimation
  ) {
    if (
      secondAttacker.secondaryStatut.isCursed ||
      secondAttacker.secondaryStatut.isNormal
    ) {
      const secondAttackerAlterationStateDelays =
        getSecondAttackerCursedStatutAlterationDelays(secondAttacker);

      secondAttackerSecondaryStatutCursedAlteration(secondAttacker);

      await sleepStatutAlteredAnimation(
        secondAttackerAlterationStateDelays.secondAttackerSecondStateCursedDelay
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
      }
    }
  };

function appropriateDialogues(secondAttacker) {
  if (secondAttacker.primaryStatut === "burning") {
    return openDialogueWhenPokemonHpDecreaseByBurningStatut(secondAttacker);
  } else if (secondAttacker.primaryStatut === "poisoned") {
    return openDialogueWhenPokemonHpDecreaseByPoisonedStatut(secondAttacker);
  }
}
