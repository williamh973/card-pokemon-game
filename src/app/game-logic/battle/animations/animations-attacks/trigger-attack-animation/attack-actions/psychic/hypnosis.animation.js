import { animationVariables } from "../../../../../../../shared/animations/animation-variables.js";
import { domElements } from "../../../../../../../shared/dom/dom-elements.js";
import { pokemonVariables } from "../../../../../../../shared/pokemon/pokemon-variables.js";
import {
  getFirstAttackerBoundingClientRectCard,
  getSecondAttackerBoundingClientRectCard,
} from "../../../check-pokemon-location/check-pokemon-location.js";

function coordonates(pokemonLocation, startX, endX) {
  pokemonVariables.firstAttackerLocation = pokemonLocation;
  animationVariables.startX = startX;
  animationVariables.endX = endX;
}

function checkPokemonsLocation(firstAttackerCard, secondAttackerCard) {
  pokemonVariables.firstAttackerCardRect =
    getFirstAttackerBoundingClientRectCard(firstAttackerCard);

  pokemonVariables.secondAttackerCardRect =
    getSecondAttackerBoundingClientRectCard(secondAttackerCard);

  if (domElements.pokemonFirstLocation.contains(secondAttackerCard)) {
    coordonates(domElements.pokemonFirstLocation, 0, 0);
  } else {
    coordonates(domElements.pokemonSecondLocation, 0, 0);
  }
}

export function hypnosisAnimation(
  attackName,
  firstAttackerCard,
  secondAttackerCard
) {
  if (attackName && firstAttackerCard) {
    checkPokemonsLocation(firstAttackerCard, secondAttackerCard);

    function createHypnosis() {
      const hypnosis = document.createElement("div");
      hypnosis.classList.add("hypnosis");
      pokemonVariables.firstAttackerLocation.appendChild(hypnosis);

      gsap.fromTo(
        hypnosis,
        { scale: 0.8, opacity: 0.6, rotation: 0 },
        {
          scale: 1.2,
          opacity: 1,
          rotation: 2000,
          duration: 3,
          ease: "power1.inOut",
          yoyo: true,
          onComplete: () => {
            hypnosis.remove();
          },
        }
      );
      console.log(hypnosis);
    }
    createHypnosis();
  }
}
