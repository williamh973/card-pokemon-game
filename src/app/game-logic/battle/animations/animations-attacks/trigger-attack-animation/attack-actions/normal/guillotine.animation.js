import { animationVariables } from "../../../../../../../shared/animations/animation-variables.js";
import { resetAnimationVariables } from "../reset-animation-variables.js";

export function guillotineAnimation(
  attackName,
  firstAttackerCard,
  secondAttackerCard
) {
  if (attackName && firstAttackerCard && secondAttackerCard) {
    createGuillotine(pokemonLocation, animationVariables.targetLocationCenterY);
  }
}

function createGuillotine(pokemonLocation, targetLocationCenterY) {
  const guillotine = document.createElement("div");
  guillotine.classList.add("guillotine");
  pokemonLocation.appendChild(guillotine);

  gsap.fromTo(
    guillotine,
    { y: targetLocationCenterY - 400, scale: 2 },
    {
      y: targetLocationCenterY + 400,
      scale: 2,
      duration: 0.25,
      ease: "power2.out",
      onComplete: () => {
        gsap.to(guillotine, {
          y: targetLocationCenterY - 400,
          scale: 2,
          duration: 0.25,
          ease: "power2.inOut",
          onComplete: () => guillotine.remove(),
        });
      },
    }
  );
  resetAnimationVariables();
}
