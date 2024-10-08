import { animationVariables } from "../../../../../../../shared/animations/animation-variables.js";
import { domElements } from "../../../../../../../shared/dom/dom-elements.js";
import { getTargetCoordonates } from "../get-target-coordonates.js";
import { resetAnimationVariables } from "../reset-animation-variables.js";

export function slashAnimation(
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

    createSlash(
      pokemonLocation,
      getTargetLocationCenterX,
      animationVariables.targetLocationCenterY
    );
  }
}

function createSlash(
  pokemonLocation,
  getTargetLocationCenterX,
  targetLocationCenterY
) {
  const slash = document.createElement("div");
  slash.classList.add("slash");
  pokemonLocation.appendChild(slash);

  gsap.fromTo(
    slash,
    {
      x: getTargetLocationCenterX + 400,
      y: targetLocationCenterY - 400,
      scale: 1.2,
      rotation: 45,
    },
    {
      x: getTargetLocationCenterX - 400,
      y: targetLocationCenterY + 400,
      scale: 1.2,
      rotation: 45,
      duration: 0.5,
      ease: "linear",

      onComplete: () => slash.remove(),
    }
  );
  resetAnimationVariables();
}
