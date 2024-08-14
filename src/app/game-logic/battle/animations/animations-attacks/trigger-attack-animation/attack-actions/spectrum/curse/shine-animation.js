import { resetAnimationVariables } from "../../reset-animation-variables.js";

export async function createShine(
  pokemonLocation,
  firstAttackerCenterX,
  firstAttackerCenterY
) {
  const shine = document.createElement("div");
  shine.classList.add("shine");
  pokemonLocation.appendChild(shine);

  gsap.fromTo(
    shine,
    {
      x: firstAttackerCenterX,
      y: firstAttackerCenterY,
      scale: 0,
    },
    {
      x: firstAttackerCenterX,
      y: firstAttackerCenterY,
      scale: 1.5,
      duration: 0.2,
      ease: "linear",
      onComplete: () => {
        shine.remove();
      },
    }
  );
  resetAnimationVariables();
}
