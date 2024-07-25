import { getConfusedStatutAnimationDelays } from "../../../animations/animations-delays/alterations-delay.js";
import { secondaryStatutConfusingAlteration } from "../pokemon-secondary-statut-alteration.js";

export async function checkIfPokemonStatusConfusing(
  pokemon,
  sleepStatutAlteredAnimation
) {
  if (pokemon.secondaryStatut.isConfused || pokemon.secondaryStatut.isNormal) {
    const alterationStateDelays = getConfusedStatutAnimationDelays(pokemon);

    await secondaryStatutConfusingAlteration(pokemon);

    await sleepStatutAlteredAnimation(
      alterationStateDelays.getConfusedStatutAnimationDelay
    );
  }
}
