import { getStatutAlterationDelays } from "../../../animations/animations-delays/alterations-delay.js";
import { pokemonPrimaryStatutAlteration } from "../pokemon-primary-statut-alteration.js";

export async function checkIfPokemonStatusHasParalyzedFrozenNormalOrAsleep(
  pokemon,
  sleepStatutAlteredAnimation
) {
  if (
    pokemon.primaryStatut === "paralyzed" ||
    pokemon.primaryStatut === "frozen" ||
    pokemon.primaryStatut === "normal" ||
    pokemon.primaryStatut === "asleep"
  ) {
    const alterationStateDelays = getStatutAlterationDelays(pokemon);

    pokemonPrimaryStatutAlteration(pokemon);

    await sleepStatutAlteredAnimation(
      alterationStateDelays.getStatutAnimationDelay
    );
  }
}
