import { resetAnimationVariables } from "../../reset-animation-variables.js";

export function createSkull(
  pokemonLocation,
  getTargetLocationCenterX,
  targetLocationCenterY
) {
  const skull = document.createElement("div");
  skull.classList.add("skull");

  pokemonLocation.appendChild(skull);

  createMouth(pokemonLocation, getTargetLocationCenterX, targetLocationCenterY);

  gsap.fromTo(
    skull,
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
        skull.remove();
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
