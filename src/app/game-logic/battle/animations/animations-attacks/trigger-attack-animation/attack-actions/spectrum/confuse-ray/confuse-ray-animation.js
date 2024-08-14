import { animationVariables } from "../../../../../../../../shared/animations/animation-variables.js";
import { domElements } from "../../../../../../../../shared/dom/dom-elements.js";
import { resetAnimationVariables } from "../../reset-animation-variables.js";
import { getTargetCoordonates } from "../get-target-coordonates.js";

export function confuseRayAnimation(
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

    let leftLocationRect =
      domElements.pokemonLeftLocation.getBoundingClientRect();
    let rightLocationRect =
      domElements.pokemonRightLocation.getBoundingClientRect();

    let getTargetLocationCenterX = getTargetCoordonates(
      firstAttackerCard,
      leftLocationRect,
      rightLocationRect
    );

    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        createConfuseRay(
          pokemonLocation,
          animationVariables.firstAttackerCenterX,
          animationVariables.firstAttackerCenterY,
          getTargetLocationCenterX,
          animationVariables.targetLocationCenterY
        );
      }, i * 200);
    }
  }
}

function createConfuseRay(
  pokemonLocation,
  firstAttackerCenterX,
  firstAttackerCenterY,
  getTargetLocationCenterX,
  targetLocationCenterY
) {
  const confuseRay = document.createElement("div");
  confuseRay.classList.add("confuse-ray");
  pokemonLocation.appendChild(confuseRay);

  gsap.fromTo(
    confuseRay,
    {
      x: firstAttackerCenterX,
      y: firstAttackerCenterY,
      scale: 1,
      opacity: 0.8,
    },
    {
      x: getTargetLocationCenterX,
      y: targetLocationCenterY,
      scale: 1,
      opacity: 0.8,
      duration: 3,
      ease: "bounce.inOut",
      onComplete: () => {
        confuseRay.remove();
      },
    }
  );
  resetAnimationVariables();
}
