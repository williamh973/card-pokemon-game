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
    appropriateDialogues(pokemon);

    const alterationStateDelays = getStatutAlterationDelays(pokemon);

    pokemonPrimaryStatutAlteration(pokemon);

    await sleepStatutAlteredAnimation(
      alterationStateDelays.getStatutAnimationDelay
    );
  }
}

function appropriateDialogues(pokemon) {
  if (pokemon.primaryStatut === "burning") {
    openDialogueWhenPokemonHpDecreaseByBurningStatut(pokemon);
  } else if (pokemon.primaryStatut === "poisoned") {
    openDialogueWhenPokemonHpDecreaseByPoisonedStatut(pokemon);
  }
}
