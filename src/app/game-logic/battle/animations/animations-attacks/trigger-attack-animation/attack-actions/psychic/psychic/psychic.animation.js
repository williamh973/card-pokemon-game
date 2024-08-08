import { animationVariables } from "../../../../../../../../shared/animations/animation-variables.js";
import { domElements } from "../../../../../../../../shared/dom/dom-elements.js";
import { getTargetCoordonates } from "./get-target-coordonates.js";

function checkPokemonsLocation(firstAttackerCard, secondAttackerCard) {
  if (domElements.pokemonLeftLocation.contains(firstAttackerCard)) {
    let getTargetLocationCenterX = getTargetCoordonates(firstAttackerCard);

    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        createPsychic(
          domElements.pokemonLeftLocation,
          animationVariables.firstAttackerCenterX,
          animationVariables.firstAttackerCenterY,
          getTargetLocationCenterX,
          animationVariables.targetLocationCenterY
        );
      }, i * 200);
    }
  } else {
    let getTargetLocationCenterX = getTargetCoordonates(firstAttackerCard);

    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        createPsychic(
          domElements.pokemonRightLocation,
          animationVariables.firstAttackerCenterX,
          animationVariables.firstAttackerCenterY,
          getTargetLocationCenterX,
          animationVariables.targetLocationCenterY
        );
      }, i * 200);
    }
  }
}

export function psychicAnimation(
  attackName,
  firstAttackerCard,
  secondAttackerCard
) {
  if (attackName && firstAttackerCard && secondAttackerCard) {
    checkPokemonsLocation(firstAttackerCard, secondAttackerCard);
  }
}

function createPsychic(
  pokemonLocation,
  firstAttackerCenterX,
  firstAttackerCenterY,
  getTargetLocationCenterX,
  targetLocationCenterY
) {
  const psychic = document.createElement("div");
  psychic.classList.add("psychic");
  pokemonLocation.appendChild(psychic);

  gsap.fromTo(
    psychic,
    {
      x: firstAttackerCenterX,
      y: firstAttackerCenterY,
      scale: 1.5,
      opacity: 0.8,
    },
    {
      x: getTargetLocationCenterX,
      y: targetLocationCenterY,
      scale: 1.5,
      opacity: 1,
      duration: 1.5,
      ease: "sine.inOut",
      onComplete: () => {
        psychic.remove();
      },
    }
  );
}
