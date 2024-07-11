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
} from "../../../../../game-logic/battle/animations/animations-delays/alterations-delay.js";

import { updateDisplayPokemonHp } from "../../../../../game-logic/battle/update-display-Pokemon-hp.js";

import { openDialogueWhenPokemonHpDecreaseByBurningStatut } from "../../../../../components/battle-dialogues/dialogues/pokemon-hp-decrease-by-burning-statut.dialogue.js";
import { openDialogueWhenPokemonHpDecreaseByPoisonedStatut } from "../../../../../components/battle-dialogues/dialogues/pokemon-hp-decrease-by-poisoned-statut.dialogue.js";

import { pokemonLose } from "../../../../../game-logic/battle/pokemon-is-knock-out.js";

export async function checkIfSecondAttackerStatusHasBurningOrPoisoned(
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
}

export async function checkIfSecondAttackerStatusHasParalyzedFrozenNormalOrAsleep(
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
}

export async function checkIfSecondAttackerStatusConfusing(
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
}

export async function checkIfSecondAttackerStatusScared(
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
}

export async function checkIfSecondAttackerStatusCursed(
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
}

function appropriateDialogues(secondAttacker) {
  if (secondAttacker.primaryStatut === "burning") {
    return openDialogueWhenPokemonHpDecreaseByBurningStatut(secondAttacker);
  } else if (secondAttacker.primaryStatut === "poisoned") {
    return openDialogueWhenPokemonHpDecreaseByPoisonedStatut(secondAttacker);
  }
}
