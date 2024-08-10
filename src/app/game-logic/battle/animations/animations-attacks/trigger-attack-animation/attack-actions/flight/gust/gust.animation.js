import { animationVariables } from "../../../../../../../../shared/animations/animation-variables.js";
import { domElements } from "../../../../../../../../shared/dom/dom-elements.js";
import { getTargetCoordonates } from "../../get-target-coordonates.js";
import { resetAnimationVariables } from "../../reset-animation-variables.js";
import { addShakeAnimation } from "./add-shaking-effect.js";

export function gustAnimation(
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

    createGust(
      pokemonLocation,
      secondAttackerCard,
      animationVariables.firstAttackerCenterX,
      animationVariables.firstAttackerCenterY,
      getTargetLocationCenterX,
      animationVariables.targetLocationCenterY
    );
  }
}

function createGust(
  pokemonLocation,
  secondAttackerCard,
  firstAttackerCenterX,
  firstAttackerCenterY,
  getTargetLocationCenterX,
  targetLocationCenterY
) {
  const tornado = document.createElement("div");
  tornado.classList.add("tornado");
  pokemonLocation.appendChild(tornado);

  gsap.fromTo(
    tornado,
    {
      x: firstAttackerCenterX,
      y: firstAttackerCenterY,
      scale: 0.4,
      opacity: 0.4,
      rotation: 0,
    },
    {
      x: getTargetLocationCenterX,
      y: targetLocationCenterY,
      scale: 1.4,
      opacity: 1,
      rotation: 3060,
      duration: 2,
      ease: "power1.in",
      onComplete: () => {
        gsap.to(tornado, {
          x: getTargetLocationCenterX,
          y: targetLocationCenterY,
          scale: 1.4,
          opacity: 1,
          duration: 1,
          onComplete: () => tornado.remove(),
        });
      },
    }
  );

  setTimeout(() => {
    addShakeAnimation(secondAttackerCard);
  }, 2_000);

  resetAnimationVariables();
}
