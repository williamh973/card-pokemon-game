import { animationVariables } from "../../../../shared/animations/animation-variables.js";

export function createHealthUpAnimation(pokemonLocation) {
  const healthUp = document.createElement("div");
  healthUp.classList.add("health-up");

  pokemonLocation.appendChild(healthUp);

  const randomNumberX =
    Math.floor(Math.random() * 250) - Math.floor(Math.random() * 250);
  const randomScale = Math.floor(Math.random() * 1.2) + 0.2;

  gsap.fromTo(
    healthUp,
    {
      x: animationVariables.firstAttackerCenterX + randomNumberX,
      y: animationVariables.firstAttackerCenterY + 200,
    },
    {
      y: animationVariables.firstAttackerCenterY - 200,
      scale: randomScale,
      duration: 1.2,
      ease: "sine.inOut",
      onComplete: () => {
        healthUp.remove();
      },
    }
  );
}
