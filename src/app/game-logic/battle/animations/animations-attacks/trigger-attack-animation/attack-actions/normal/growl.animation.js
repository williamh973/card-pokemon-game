import { animationVariables } from "../../../../../../../shared/animations/animation-variables.js";
import { domElements } from "../../../../../../../shared/dom/dom-elements.js";
import { applyClassVerticalShake } from "../auxiliary-effects/vertical-shake.js";
import { applyClassHorizontalShake } from "../auxiliary-effects/horizontal-shake.js";
import { getTargetCoordonates } from "../get-target-coordonates.js";
import { resetAnimationVariables } from "../reset-animation-variables.js";

export async function growlAnimation(
  attackName,
  firstAttackerCard,
  secondAttackerCard
) {
  if (attackName && firstAttackerCard && secondAttackerCard) {
    let rotationAngle = 0;
    let pokemonLocation;
    let leftLocationRect =
      domElements.pokemonLeftLocation.getBoundingClientRect();

    let rightLocationRect =
      domElements.pokemonRightLocation.getBoundingClientRect();

    let getTargetLocationCenterX = getTargetCoordonates(
      firstAttackerCard,
      leftLocationRect,
      rightLocationRect
    );

    if (domElements.pokemonLeftLocation.contains(firstAttackerCard)) {
      pokemonLocation = domElements.pokemonLeftLocation;
      rotationAngle = 90;
    } else {
      pokemonLocation = domElements.pokemonRightLocation;
      rotationAngle = -90;
    }

    applyClassVerticalShake(firstAttackerCard);

    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        createGrowl(
          pokemonLocation,
          animationVariables.firstAttackerCenterX,
          animationVariables.firstAttackerCenterY,
          getTargetLocationCenterX,
          animationVariables.targetLocationCenterY,
          rotationAngle
        );
      }, i * 200);
    }

    await new Promise((resolve) => {
      setTimeout(() => {
        applyClassHorizontalShake(secondAttackerCard);
        resolve();
      }, 500);
    });
  }
}

function createGrowl(
  pokemonLocation,
  firstAttackerCenterX,
  firstAttackerCenterY,
  getTargetLocationCenterX,
  targetLocationCenterY,
  rotationAngle
) {
  const growl = document.createElement("div");
  growl.classList.add("growl");
  pokemonLocation.appendChild(growl);

  gsap.fromTo(
    growl,
    {
      x: firstAttackerCenterX,
      y: firstAttackerCenterY,
      scale: 0.5,
      opacity: 1,
    },
    {
      x: getTargetLocationCenterX,
      y: targetLocationCenterY,
      scale: 1.7,
      opacity: 0,
      duration: 1,
      rotate: rotationAngle,
      ease: "power4.Out",
      onComplete: () => {
        growl.remove();
      },
    }
  );
  resetAnimationVariables();
}
