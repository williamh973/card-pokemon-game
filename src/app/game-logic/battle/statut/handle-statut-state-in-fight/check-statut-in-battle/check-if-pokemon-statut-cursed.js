import { secondaryStatutCursedAlteration } from "../pokemon-secondary-statut-alteration.js";
import { getCursedStatutAnimationDelays } from "../../../animations/animations-delays/alterations-delay.js";

export async function checkIfPokemonStatusCursed(
  pokemon,
  sleepStatutAlteredAnimation
) {
  if (pokemon.secondaryStatut.isCursed || pokemon.secondaryStatut.isNormal) {
    const alterationStateDelays = getCursedStatutAnimationDelays(pokemon);

    secondaryStatutCursedAlteration(pokemon);

    await sleepStatutAlteredAnimation(
      alterationStateDelays.getCursedStatutAnimationDelay
    );
  }
}
