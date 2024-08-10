import { animationVariables } from "../../../../../../../../shared/animations/animation-variables.js";
import { domElements } from "../../../../../../../../shared/dom/dom-elements.js";

export function protectAnimation(
  attackName,
  firstAttackerCard,
  secondAttackerCard
) {
  if (attackName && firstAttackerCard && secondAttackerCard) {
    const pokemonLocation = domElements.pokemonLeftLocation.contains(
      firstAttackerCard
    )
      ? domElements.pokemonLeftLocation
      : domElements.pokemonRightLocation;

    createProtect(pokemonLocation);
  }
}

function createProtect(pokemonLocation) {
  const protect = document.createElement("div");
  protect.classList.add("protect");

  pokemonLocation.appendChild(protect);

  gsap.fromTo(
    protect,
    {
      x: animationVariables.firstAttackerCenterX,
      y: animationVariables.firstAttackerCenterY,
    },
    {
      x: animationVariables.firstAttackerCenterX,
      y: animationVariables.firstAttackerCenterY,
      duration: 2,
      ease: "power1.out",
      onComplete: () => {
        protect.remove();
      },
    }
  );
}
