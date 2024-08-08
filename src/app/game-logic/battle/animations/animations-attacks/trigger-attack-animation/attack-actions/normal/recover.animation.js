import { animationVariables } from "../../../../../../../shared/animations/animation-variables.js";
import { domElements } from "../../../../../../../shared/dom/dom-elements.js";

function checkPokemonsLocation(firstAttackerCard, secondAttackerCard) {
  if (domElements.pokemonLeftLocation.contains(firstAttackerCard)) {
    for (let i = 0; i < 6; i++) {
      setTimeout(() => {
        createRecover(domElements.pokemonLeftLocation);
      }, i * 200);
    }
  } else {
    for (let i = 0; i < 6; i++) {
      setTimeout(() => {
        createRecover(domElements.pokemonRightLocation);
      }, i * 200);
    }
  }
}

export function recoverAnimation(
  attackName,
  firstAttackerCard,
  secondAttackerCard
) {
  if (attackName && firstAttackerCard) {
    checkPokemonsLocation(firstAttackerCard, secondAttackerCard);
  }
}

function createRecover(pokemonLocation) {
  const recover = document.createElement("div");
  recover.classList.add("recover");
  pokemonLocation.appendChild(recover);

  gsap.fromTo(
    recover,
    {
      x: animationVariables.firstAttackerCenterX,
      y: animationVariables.firstAttackerCenterY + 200,
      scale: 1.5,
      opacity: 0.8,
    },
    {
      x: animationVariables.firstAttackerCenterX,
      y: animationVariables.firstAttackerCenterY - 200,
      scale: 1.5,
      opacity: 1,
      duration: 1.5,
      ease: "sine.inOut",
      onComplete: () => {
        recover.remove();
      },
    }
  );
}
