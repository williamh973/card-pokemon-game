import { animationVariables } from "../../../../../../../../shared/animations/animation-variables.js";
import { domElements } from "../../../../../../../../shared/dom/dom-elements.js";
import { shakeAnimation } from "../../auxiliary-effects/shake.js";
import { getTargetCoordonates } from "../../get-target-coordonates.js";

export async function peckAnimation(
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

    createPeck(
      pokemonLocation,
      animationVariables.firstAttackerCenterX,
      animationVariables.firstAttackerCenterY,
      getTargetLocationCenterX,
      animationVariables.targetLocationCenterY
    );

    await new Promise((resolve) => {
      setTimeout(() => {
        shakeAnimation(secondAttackerCard);
        resolve();
      }, 700);
    });
  }
}

function createPeck(
  pokemonLocation,
  firstAttackerCenterX,
  firstAttackerCenterY,
  getTargetLocationCenterX,
  targetLocationCenterY
) {
  const peck = document.createElement("div");
  peck.classList.add("peck");
  pokemonLocation.appendChild(peck);

  gsap.fromTo(
    peck,
    {
      x: firstAttackerCenterX,
      y: firstAttackerCenterY,
    },
    {
      x: getTargetLocationCenterX,
      y: targetLocationCenterY,
      duration: 0.7,
      ease: "power1.inOut",
      onComplete: () => {
        peck.remove();
      },
    }
  );
}
