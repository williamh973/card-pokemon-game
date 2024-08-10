import { animationVariables } from "../../../../../../../shared/animations/animation-variables.js";
import { domElements } from "../../../../../../../shared/dom/dom-elements.js";
import { resetAnimationVariables } from "../reset-animation-variables.js";
import { getTargetCoordonates } from "./get-target-coordonates.js";

export function nightShadeAnimation(
  attackName,
  firstAttackerCard,
  secondAttackerCard
) {
  if (attackName && firstAttackerCard && secondAttackerCard) {
    let leftLocationRect =
      domElements.pokemonLeftLocation.getBoundingClientRect();
    let rightLocationRect =
      domElements.pokemonRightLocation.getBoundingClientRect();

    let getTargetLocationCenterX = getTargetCoordonates(
      firstAttackerCard,
      leftLocationRect,
      rightLocationRect
    );

    createNightShade(
      firstAttackerCard,
      getTargetLocationCenterX,
      animationVariables.targetLocationCenterY
    );
  }
}

function createNightShade(
  firstAttackerCard,
  getTargetLocationCenterX,
  targetLocationCenterY
) {
  gsap.fromTo(
    firstAttackerCard,
    {
      x: animationVariables.firstAttackerCenterX,
      y: animationVariables.firstAttackerCenterY,
      scale: 1,
      opacity: 0.3,
      duration: 0.5,
    },
    {
      x: getTargetLocationCenterX,
      y: targetLocationCenterY,
      scale: 1,
      opacity: 0.3,
      duration: 1,
      ease: "elastic.inOut",
      onComplete: () => {
        gsap.to(firstAttackerCard, {
          x: animationVariables.firstAttackerCenterX,
          y: animationVariables.firstAttackerCenterY,
          scale: 1,
          opacity: 1,
          duration: 0.5,
        });
      },
    }
  );
  resetAnimationVariables();
}
