import { getScaredStatutAnimationDelays } from "../../../animations/animations-delays/alterations-delay.js";
import { statutScaredAlteration } from "../pokemon-secondary-statut-alteration.js";

export async function checkIfPokemonStatutScared(
  pokemon,
  sleepStatutAlteredAnimation
) {
  if (pokemon.secondaryStatut.isScared || pokemon.secondaryStatut.isNormal) {
    const alterationStateDelays = getScaredStatutAnimationDelays(pokemon);

    statutScaredAlteration(pokemon);

    await sleepStatutAlteredAnimation(
      alterationStateDelays.getScaredStatutAnimationDelay
    );
  }
}
