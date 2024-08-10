import { animationVariables } from "../../../../../../../../shared/animations/animation-variables.js";
import { domElements } from "../../../../../../../../shared/dom/dom-elements.js";
import { getTargetCoordonates } from "../../get-target-coordonates.js";

export function hypnosisAnimation(
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

    for (let i = 0; i < 6; i++) {
      setTimeout(() => {
        createHypnosis(
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

function createHypnosis(
  pokemonLocation,
  firstAttackerCenterX,
  firstAttackerCenterY,
  getTargetLocationCenterX,
  targetLocationCenterY
) {
  const hypnosis = document.createElement("div");
  hypnosis.classList.add("hypnosis");
  pokemonLocation.appendChild(hypnosis);

  gsap.fromTo(
    hypnosis,
    {
      x: firstAttackerCenterX,
      y: firstAttackerCenterY,
      scale: 0.5,
      opacity: 0.8,
    },
    {
      x: getTargetLocationCenterX,
      y: targetLocationCenterY,
      scale: 1.2,
      opacity: 1,
      duration: 3,
      ease: "power1.inOut",
      onComplete: () => {
        hypnosis.remove();
      },
    }
  );
}
