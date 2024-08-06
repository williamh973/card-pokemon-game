import { animationVariables } from "../../../../../../../../shared/animations/animation-variables.js";
import { domElements } from "../../../../../../../../shared/dom/dom-elements.js";

function checkPokemonsLocation(firstAttackerCard) {
  if (domElements.pokemonLeftLocation.contains(firstAttackerCard)) {
    createProtect(domElements.pokemonLeftLocation);
  } else {
    createProtect(domElements.pokemonRightLocation);
  }
}

export function protectAnimation(attackName, firstAttackerCard) {
  if (attackName && firstAttackerCard) {
    checkPokemonsLocation(firstAttackerCard);
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
