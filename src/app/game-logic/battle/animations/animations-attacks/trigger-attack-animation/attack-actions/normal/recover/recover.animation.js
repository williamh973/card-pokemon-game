import { animationVariables } from "../../../../../../../../shared/animations/animation-variables.js";
import { domElements } from "../../../../../../../../shared/dom/dom-elements.js";
import { createHealthUpAnimation } from "../../../../../animation-stats/health-up.animation.js";
import { createLightRay } from "./light-ray.animation.js";
import { twinkleRecoverAnimation } from "./twinkle-recover.animation.js";

export async function recoverAnimation(attackName, firstAttackerCard) {
  if (attackName && firstAttackerCard) {
    const pokemonLocation = domElements.pokemonLeftLocation.contains(
      firstAttackerCard
    )
      ? domElements.pokemonLeftLocation
      : domElements.pokemonRightLocation;

    twinkleRecoverAnimation(attackName, firstAttackerCard);
    createLightBall(pokemonLocation);
    createLightRay(pokemonLocation);

    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1_500);
    });

    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        createHealthUpAnimation(pokemonLocation);
      }, i * 200);
    }
  }
}

function createLightBall(pokemonLocation) {
  const lightBall = document.createElement("div");
  lightBall.classList.add("light-ball");
  pokemonLocation.appendChild(lightBall);

  gsap.fromTo(
    lightBall,
    {
      x: animationVariables.firstAttackerCenterX,
      y: animationVariables.firstAttackerCenterY,
      scale: 0.1,
      opacity: 1,
    },
    {
      x: animationVariables.firstAttackerCenterX,
      y: animationVariables.firstAttackerCenterY,
      scale: 2,
      opacity: 1,
      duration: 0.7,
      ease: "linear",
      onComplete: () => {
        lightBall.remove();
      },
    }
  );
}
