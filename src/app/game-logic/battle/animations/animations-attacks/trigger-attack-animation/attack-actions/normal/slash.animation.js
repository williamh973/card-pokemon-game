import { animationVariables } from "../../../../../../../shared/animations/animation-variables.js";
import { domElements } from "../../../../../../../shared/dom/dom-elements.js";

export function slashAnimation(
  attackName,
  firstAttackerCard,
  secondAttackerCard
) {
  if (attackName && firstAttackerCard && secondAttackerCard) {
    if (domElements.pokemonLeftLocation.contains(secondAttackerCard)) {
      createSlash(domElements.pokemonLeftLocation);
    } else {
      createSlash(domElements.pokemonRightLocation);
    }
  }
}

function createSlash(pokemonLocation) {
  const slash = document.createElement("div");
  slash.classList.add("slash");
  pokemonLocation.appendChild(slash);

  gsap.fromTo(
    slash,
    {
      x: animationVariables.targetLocationCenterX + 400,
      y: animationVariables.targetLocationCenterY - 400,
      scale: 1.2,
      rotation: 45,
    },
    {
      x: animationVariables.targetLocationCenterX - 400,
      y: animationVariables.targetLocationCenterY + 400,
      scale: 1.2,
      rotation: 45,
      duration: 0.5,
      ease: "linear",

      onComplete: () => slash.remove(),
    }
  );
}
