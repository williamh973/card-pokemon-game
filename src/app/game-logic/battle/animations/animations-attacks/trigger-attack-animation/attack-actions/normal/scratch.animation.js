import { animationVariables } from "../../../../../../../shared/animations/animation-variables.js";
import { domElements } from "../../../../../../../shared/dom/dom-elements.js";

export function scratchAnimation(
  attackName,
  firstAttackerCard,
  secondAttackerCard
) {
  if (attackName && firstAttackerCard && secondAttackerCard) {
    if (domElements.pokemonLeftLocation.contains(secondAttackerCard)) {
      for (let i = 0; i < 3; i++) {
        createScratch(domElements.pokemonLeftLocation);
      }
    } else {
      for (let i = 0; i < 3; i++) {
        createScratch(domElements.pokemonRightLocation);
      }
    }
  }
}

function createScratch(pokemonLocation) {
  const scratch = document.createElement("div");
  scratch.classList.add("scratch");
  pokemonLocation.appendChild(scratch);

  gsap.fromTo(
    scratch,
    {
      x: (animationVariables.targetLocationCenterX += 30),
      y: animationVariables.targetLocationCenterY - 200,
      scale: 1,
    },
    {
      x: animationVariables.targetLocationCenterX - 200,
      y: animationVariables.targetLocationCenterY + 200,
      scale: 1,
      duration: 0.3,
      ease: "linear",

      onComplete: () => {
        scratch.remove();
        animationVariables.targetLocationCenterX = 0;
      },
    }
  );
}
