import { animationVariables } from "../../../../../../../shared/animations/animation-variables.js";
import { domElements } from "../../../../../../../shared/dom/dom-elements.js";
import { getTargetCoordonates } from "../get-target-coordonates.js";
import { resetAnimationVariables } from "../reset-animation-variables.js";

export function quickAttackAnimation(
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

    createQuickAttack(
      firstAttackerCard,
      getTargetLocationCenterX,
      animationVariables.targetLocationCenterY
    );
  }
}

function createQuickAttack(
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
      filter: "blur(0px)",
    },
    {
      x: getTargetLocationCenterX,
      y: targetLocationCenterY,
      scale: 1,
      filter: "blur(5px)",
      duration: 0.25,
      ease: "power1.in",
      onComplete: () => {
        gsap.to(firstAttackerCard, {
          x: animationVariables.firstAttackerCenterX,
          y: animationVariables.firstAttackerCenterY,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.25,
          ease: "power1.in",
        });
      },
    }
  );
  resetAnimationVariables();
}
