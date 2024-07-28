import { getScaredStatutAnimationDelays } from "../../../animations/animations-delays/alterations-delay.js";
import { secondaryStatutScaredAlteration } from "../pokemon-secondary-statut-alteration.js";

export async function checkIfPokemonStatutScared(
  pokemon,
  sleepStatutAlteredAnimation
) {
  if (pokemon.secondaryStatut.isScared || pokemon.secondaryStatut.isNormal) {
    const alterationStateDelays = getScaredStatutAnimationDelays(pokemon);

    secondaryStatutScaredAlteration(pokemon);

    await sleepStatutAlteredAnimation(
      alterationStateDelays.getScaredStatutAnimationDelay
    );
  }
}
