import { animationVariables } from "../../../../../../../shared/animations/animation-variables.js";
import { domElements } from "../../../../../../../shared/dom/dom-elements.js";
import { getTargetCoordonates } from "../get-target-coordonates.js";
import { resetAnimationVariables } from "../reset-animation-variables.js";

export async function lickAnimation(
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

    createLick(
      pokemonLocation,
      getTargetLocationCenterX,
      animationVariables.targetLocationCenterY
    );
  }
}

function createLick(
  pokemonLocation,
  getTargetLocationCenterX,
  targetLocationCenterY
) {
  const lick = document.createElement("div");
  lick.classList.add("lick");
  pokemonLocation.appendChild(lick);

  gsap.fromTo(
    lick,
    {
      x: getTargetLocationCenterX,
      y: targetLocationCenterY + 200,
      scale: 1,
      opacity: 0.8,
      duration: 0.25,
    },
    {
      x: getTargetLocationCenterX,
      y: targetLocationCenterY,
      scaleY: 2,
      opacity: 1,
      duration: 0.25,
      onComplete: () => {
        gsap.to(lick, {
          x: getTargetLocationCenterX,
          y: targetLocationCenterY - 200,
          scaleY: 1,
          opacity: 0.8,
          duration: 0.25,
          ease: "power1.out",
          onComplete: () => {
            lick.remove();
          },
        });
      },
    }
  );
  resetAnimationVariables();
}
