import { animationVariables } from "../../../../../../../../shared/animations/animation-variables.js";
import { domElements } from "../../../../../../../../shared/dom/dom-elements.js";
import { pokemonVariables } from "../../../../../../../../shared/pokemon/pokemon-variables.js";
import { getTargetCoordonates } from "./get-target-coordonates.js";

function checkPokemonsLocation(firstAttackerCard, secondAttackerCard) {
  if (domElements.pokemonLeftLocation.contains(firstAttackerCard)) {
    let getTargetLocationCenterX = getTargetCoordonates(firstAttackerCard);

    for (let i = 0; i < 6; i++) {
      setTimeout(() => {
        createHypnosis(
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

    for (let i = 0; i < 6; i++) {
      setTimeout(() => {
        createHypnosis(
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

export function hypnosisAnimation(
  attackName,
  firstAttackerCard,
  secondAttackerCard
) {
  if (attackName && firstAttackerCard && secondAttackerCard) {
    checkPokemonsLocation(firstAttackerCard, secondAttackerCard);
  }
}

function createHypnosis(
  pokemonLocation,
  firstAttackerCenterX,
  firstAttackerCenterY,
  getTargetLocationCenterX,
  targetLocationCenterY
) {
  const hypnosis = document.createElement("div");
  hypnosis.classList.add("hypnosis");
  pokemonLocation.appendChild(hypnosis);

  console.log(getTargetLocationCenterX);

  gsap.fromTo(
    hypnosis,
    {
      x: firstAttackerCenterX,
      y: firstAttackerCenterY,
      scale: 0.5,
      opacity: 0.8,
    },
    {
      x: getTargetLocationCenterX,
      y: targetLocationCenterY,
      scale: 1.2,
      opacity: 1,
      duration: 3,
      ease: "power1.inOut",
      onComplete: () => {
        hypnosis.remove();
      },
    }
  );
}
