import { firstAttackerPrimaryStatutAlteration } from "./first-attacker-statut-state-alteration/first-attacker-primary-statut-alteration.js";

import {
  firstAttackerSecondaryStatutConfusingAlteration,
  firstAttackerSecondaryStatutCursedAlteration,
  firstAttackerSecondaryStatutScaredAlteration,
} from "./first-attacker-statut-state-alteration/first-attacker-secondary-statut-alteration.js";

import {
  getFirstAttackerPrimaryStatutAlterationDelays,
  getFirstAttackerConfusingStatutAlterationDelays,
  getFirstAttackerScaredStatutAlterationDelays,
  getFirstAttackerCursedStatutAlterationDelays,
} from "../../../game-logic/battle/animations/animations-delays/alterations-delay.js";

import { updateDisplayPokemonHp } from "../../../game-logic/battle/update-display-Pokemon-hp.js";

import { openDialogueWhenPokemonHpDecreaseByBurningStatut } from "../../battle-dialogues/dialogues/pokemon-hp-decrease-by-burning-statut.dialogue.js";
import { openDialogueWhenPokemonHpDecreaseByPoisonedStatut } from "../../battle-dialogues/dialogues/pokemon-hp-decrease-by-poisoned-statut.dialogue.js";

import { pokemonLose } from "../../../game-logic/battle/pokemon-is-knock-out.js";

export async function checkIfFirstAttackerStatusHasBurningOrPoisoned(
  firstAttacker,
  secondAttacker,
  enemyPokemon,
  playerSelectedPokemon,
  sleepStatutAlteredAnimation
) {
  if (
    firstAttacker.primaryStatut === "burning" ||
    firstAttacker.primaryStatut === "poisoned"
  ) {
    appropriateDialogues(firstAttacker);

    const firstAttackerAlterationStateDelays =
      getFirstAttackerPrimaryStatutAlterationDelays(firstAttacker);

    firstAttackerPrimaryStatutAlteration(firstAttacker);

    await sleepStatutAlteredAnimation(
      firstAttackerAlterationStateDelays.firstAttackerStateDelay
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
    }
  }
}

export async function checkIfFirstAttackerStatusHasParalyzedFrozenNormalOrAsleep(
  firstAttacker,
  sleepStatutAlteredAnimation
) {
  if (
    firstAttacker.primaryStatut === "paralyzed" ||
    firstAttacker.primaryStatut === "frozen" ||
    firstAttacker.primaryStatut === "normal" ||
    firstAttacker.primaryStatut === "asleep"
  ) {
    const firstAttackerAlterationStateDelays =
      getFirstAttackerPrimaryStatutAlterationDelays(firstAttacker);

    firstAttackerPrimaryStatutAlteration(firstAttacker);

    await sleepStatutAlteredAnimation(
      firstAttackerAlterationStateDelays.firstAttackerStateDelay
    );
  }
}

export async function checkIfFirstAttackerStatusConfusing(
  firstAttacker,
  secondAttacker,
  enemyPokemon,
  playerSelectedPokemon,
  sleepStatutAlteredAnimation
) {
  if (
    firstAttacker.secondaryStatut.isConfused ||
    firstAttacker.secondaryStatut.isNormal
  ) {
    const firstAttackerAlterationStateDelays =
      getFirstAttackerConfusingStatutAlterationDelays(firstAttacker);

    firstAttackerSecondaryStatutConfusingAlteration(firstAttacker);

    await sleepStatutAlteredAnimation(
      firstAttackerAlterationStateDelays.firstAttackerSecondStateConfusedDelay
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
    }
  }
}

export async function checkIfFirstAttackerStatusScared(
  firstAttacker,
  sleepStatutAlteredAnimation
) {
  if (
    firstAttacker.secondaryStatut.isScared ||
    firstAttacker.secondaryStatut.isNormal
  ) {
    const firstAttackerAlterationStateDelays =
      getFirstAttackerScaredStatutAlterationDelays(firstAttacker);

    firstAttackerSecondaryStatutScaredAlteration(firstAttacker);

    await sleepStatutAlteredAnimation(
      firstAttackerAlterationStateDelays.firstAttackerSecondStateScaredDelay
    );
  }
}

export async function checkIfFirstAttackerStatusCursed(
  firstAttacker,
  secondAttacker,
  enemyPokemon,
  playerSelectedPokemon,
  sleepStatutAlteredAnimation
) {
  if (
    firstAttacker.secondaryStatut.isCursed ||
    firstAttacker.secondaryStatut.isNormal
  ) {
    const firstAttackerAlterationStateDelays =
      getFirstAttackerCursedStatutAlterationDelays(firstAttacker);

    firstAttackerSecondaryStatutCursedAlteration(firstAttacker);

    await sleepStatutAlteredAnimation(
      firstAttackerAlterationStateDelays.firstAttackerSecondStateCursedDelay
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
    }
  }
}

function appropriateDialogues(firstAttacker) {
  if (firstAttacker.primaryStatut === "burning") {
    openDialogueWhenPokemonHpDecreaseByBurningStatut(firstAttacker);
  } else if (firstAttacker.primaryStatut === "poisoned") {
    openDialogueWhenPokemonHpDecreaseByPoisonedStatut(firstAttacker);
  }
}
