import { animationVariables } from "../../../../../../../shared/animations/animation-variables.js";
import { domElements } from "../../../../../../../shared/dom/dom-elements.js";
import { shakeAnimation } from "../auxiliary-effects/shake.js";
import { getTargetCoordonates } from "../get-target-coordonates.js";
import { createPoisonBubble } from "./poison-bubble.animation.js";

export async function poisonStingAnimation(
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

    createPoisonSting(
      pokemonLocation,
      animationVariables.firstAttackerCenterX,
      animationVariables.firstAttackerCenterY,
      getTargetLocationCenterX,
      animationVariables.targetLocationCenterY
    );

    await new Promise((resolve) => {
      setTimeout(() => {
        shakeAnimation(secondAttackerCard);
        for (let i = 0; i < 6; i++) {
          setTimeout(() => {
            createPoisonBubble(
              pokemonLocation,
              getTargetLocationCenterX,
              animationVariables.targetLocationCenterY
            );
          }, i * 150);
        }
        resolve();
      }, 500);
    });
  }
}

function createPoisonSting(
  pokemonLocation,
  firstAttackerCenterX,
  firstAttackerCenterY,
  getTargetLocationCenterX,
  targetLocationCenterY
) {
  const poisonSting = document.createElement("div");
  poisonSting.classList.add("poison-sting");
  pokemonLocation.appendChild(poisonSting);

  gsap.fromTo(
    poisonSting,
    {
      x: firstAttackerCenterX,
      y: firstAttackerCenterY,
    },
    {
      x: getTargetLocationCenterX,
      y: targetLocationCenterY,
      duration: 0.5,
      ease: "power1.inOut",
      onComplete: () => {
        poisonSting.remove();
      },
    }
  );
}
