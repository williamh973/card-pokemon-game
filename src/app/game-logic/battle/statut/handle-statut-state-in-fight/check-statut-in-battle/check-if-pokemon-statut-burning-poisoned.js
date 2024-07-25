import { openDialogueWhenPokemonHpDecreaseByBurningStatut } from "../../../../../components/battle-dialogues/dialogues/pokemon-hp-decrease-by-burning-statut.dialogue.js";
import { openDialogueWhenPokemonHpDecreaseByPoisonedStatut } from "../../../../../components/battle-dialogues/dialogues/pokemon-hp-decrease-by-poisoned-statut.dialogue.js";
import { getStatutAlterationDelays } from "../../../animations/animations-delays/alterations-delay.js";
import { pokemonPrimaryStatutAlteration } from "../pokemon-primary-statut-alteration.js";

export async function checkIfPokemonStatusHasBurningOrPoisoned(
  pokemon,
  sleepStatutAlteredAnimation
) {
  if (
    pokemon.primaryStatut === "burning" ||
    pokemon.primaryStatut === "poisoned"
  ) {
    await appropriateDialogues(pokemon);

    const alterationStateDelays = getStatutAlterationDelays(pokemon);

    await pokemonPrimaryStatutAlteration(pokemon);

    await sleepStatutAlteredAnimation(
      alterationStateDelays.getStatutAnimationDelay
    );
  }
}

async function appropriateDialogues(pokemon) {
  if (pokemon.primaryStatut === "burning") {
    await openDialogueWhenPokemonHpDecreaseByBurningStatut(pokemon);
  } else if (pokemon.primaryStatut === "poisoned") {
    await openDialogueWhenPokemonHpDecreaseByPoisonedStatut(pokemon);
  }
}
