import { animationVariables } from "../../../../../../../shared/animations/animation-variables.js";
import { domElements } from "../../../../../../../shared/dom/dom-elements.js";
import { getTargetCoordonates } from "../get-target-coordonates.js";
import { resetAnimationVariables } from "../reset-animation-variables.js";
import { brickShards } from "./brick-shards.animation.js";

export async function brickBreakAnimation(
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

    createBrickBreak(
      pokemonLocation,
      getTargetLocationCenterX,
      animationVariables.targetLocationCenterY
    );

    await new Promise((resolve) => {
      setTimeout(() => {
        brickShards(
          pokemonLocation,
          getTargetLocationCenterX,
          animationVariables.targetLocationCenterY
        );
        resolve();
      }, 1500);
    });
  }
}

function createBrickBreak(
  pokemonLocation,
  getTargetLocationCenterX,
  targetLocationCenterY
) {
  const brickBreak = document.createElement("div");
  brickBreak.classList.add("brick-break");
  pokemonLocation.appendChild(brickBreak);

  gsap.fromTo(
    brickBreak,
    {
      x: getTargetLocationCenterX,
      y: targetLocationCenterY,
      scale: 1,
      opacity: 1,
    },
    {
      x: getTargetLocationCenterX,
      y: targetLocationCenterY,
      scale: 2,
      opacity: 0.6,
      rotation: 45,
      duration: 0.5,
      ease: "power1.out",
      onComplete: () => {
        gsap.to(brickBreak, {
          x: getTargetLocationCenterX,
          y: targetLocationCenterY,
          scale: 0,
          opacity: 0,
          rotation: 360,
          duration: 1,
          ease: "power1.out",
          onComplete: () => {
            brickBreak.remove();
          },
        });
      },
    }
  );

  resetAnimationVariables();
}
