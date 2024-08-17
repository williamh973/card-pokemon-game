import { resetAnimationVariables } from "../../reset-animation-variables.js";

export function createGustParticles(
  pokemonLocation,
  getTargetLocationCenterX,
  targetLocationCenterY
) {
  const gustParticles = document.createElement("div");
  gustParticles.classList.add("layer1");
  pokemonLocation.appendChild(gustParticles);

  gsap.fromTo(
    gustParticles,
    {
      x: getTargetLocationCenterX,
      y: targetLocationCenterY,
    },
    {
      x: getTargetLocationCenterX,
      y: targetLocationCenterY,
      rotation: -10,
      ease: "linear",
      onComplete: () => gustParticles.remove(),
    }
  );
  resetAnimationVariables();
}
