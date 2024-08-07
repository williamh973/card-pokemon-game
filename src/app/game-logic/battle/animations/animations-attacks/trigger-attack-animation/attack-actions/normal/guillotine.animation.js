import { animationVariables } from "../../../../../../../shared/animations/animation-variables.js";
import { domElements } from "../../../../../../../shared/dom/dom-elements.js";

export function guillotineAnimation(
  attackName,
  firstAttackerCard,
  secondAttackerCard
) {
  if (attackName && firstAttackerCard && secondAttackerCard) {
    if (domElements.pokemonLeftLocation.contains(secondAttackerCard)) {
      createGuillotine(domElements.pokemonLeftLocation);
    } else {
      createGuillotine(domElements.pokemonRightLocation);
    }
  }
}

function createGuillotine(pokemonLocation) {
  const guillotine = document.createElement("div");
  guillotine.classList.add("guillotine");
  pokemonLocation.appendChild(guillotine);

  gsap.fromTo(
    guillotine,
    { y: animationVariables.targetLocationCenterY - 400, scale: 2 },
    {
      y: animationVariables.targetLocationCenterY + 400,
      scale: 2,
      duration: 0.25,
      ease: "power2.out",
      onComplete: () => {
        gsap.to(guillotine, {
          y: animationVariables.targetLocationCenterY - 400,
          scale: 2,
          duration: 0.25,
          repeat: 1,
          ease: "power2.inOut",
          onComplete: () => guillotine.remove(),
        });
      },
    }
  );
}
