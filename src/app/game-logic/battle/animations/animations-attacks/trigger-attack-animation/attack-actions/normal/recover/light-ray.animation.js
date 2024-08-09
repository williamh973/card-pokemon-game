import { animationVariables } from "../../../../../../../../shared/animations/animation-variables.js";

export function createLightRay(pokemonLocation) {
  const leftLightRay = document.createElement("div");
  const rightLightRay = document.createElement("div");
  leftLightRay.classList.add("left-light-ray");
  rightLightRay.classList.add("right-light-ray");
  pokemonLocation.appendChild(leftLightRay);
  pokemonLocation.appendChild(rightLightRay);

  gsap.fromTo(
    leftLightRay,
    {
      x: animationVariables.firstAttackerCenterX,
      y: animationVariables.firstAttackerCenterY,
      scale: 0.1,
      opacity: 1,
    },
    {
      x: animationVariables.firstAttackerCenterX,
      y: animationVariables.firstAttackerCenterY,
      scale: 1.5,
      opacity: 1,
      duration: 1,
      ease: "linear",
      onComplete: () => {
        leftLightRay.remove();
      },
    }
  );

  gsap.fromTo(
    rightLightRay,
    {
      x: animationVariables.firstAttackerCenterX,
      y: animationVariables.firstAttackerCenterY,
      scale: 0.1,
      opacity: 1,
    },
    {
      x: animationVariables.firstAttackerCenterX,
      y: animationVariables.firstAttackerCenterY,
      scale: 1.5,
      opacity: 1,
      duration: 1,
      ease: "sine.inOut",
      onComplete: () => {
        rightLightRay.remove();
      },
    }
  );
}
