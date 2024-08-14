import { resetAnimationVariables } from "../../reset-animation-variables.js";

export function createSmoke(
  pokemonLocation,
  getTargetLocationCenterX,
  targetLocationCenterY
) {
  const smoke = document.createElement("div");
  smoke.classList.add("smoke");

  pokemonLocation.appendChild(smoke);

  gsap.fromTo(
    smoke,
    {
      x: getTargetLocationCenterX,
      y: targetLocationCenterY,
      scale: 0.5,
      opacity: 1,
    },
    {
      x: getTargetLocationCenterX,
      y: targetLocationCenterY - 200,
      scale: 3,
      opacity: 0,
      duration: 2,
      ease: "power1.out",
      onComplete: () => {
        smoke.remove();
      },
    }
  );

  resetAnimationVariables();
}
