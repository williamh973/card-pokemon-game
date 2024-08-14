import { resetAnimationVariables } from "../../reset-animation-variables.js";

export function createSpectre(
  pokemonLocation,
  getTargetLocationCenterX,
  targetLocationCenterY
) {
  const spectre = document.createElement("div");
  spectre.classList.add("spectre");

  pokemonLocation.appendChild(spectre);

  createMouth(pokemonLocation, getTargetLocationCenterX, targetLocationCenterY);

  gsap.fromTo(
    spectre,
    {
      x: getTargetLocationCenterX,
      y: targetLocationCenterY,
      scale: 0.2,
    },
    {
      x: getTargetLocationCenterX,
      y: targetLocationCenterY - 200,
      scale: 0.5,
      duration: 2,
      ease: "power1.out",
      onComplete: () => {
        spectre.remove();
      },
    }
  );
  resetAnimationVariables();
}

function createMouth(
  pokemonLocation,
  getTargetLocationCenterX,
  targetLocationCenterY
) {
  const mouth = document.createElement("div");
  mouth.classList.add("mouth");

  pokemonLocation.appendChild(mouth);

  gsap.fromTo(
    mouth,
    {
      x: getTargetLocationCenterX,
      y: targetLocationCenterY,
      scale: 0.2,
    },
    {
      x: getTargetLocationCenterX,
      y: targetLocationCenterY - 200,
      scale: 0.5,
      duration: 2,
      ease: "power1.out",
      onComplete: () => {
        mouth.remove();
      },
    }
  );
  resetAnimationVariables();
}
