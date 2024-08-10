import { animationVariables } from "../../../../../../../../shared/animations/animation-variables.js";
import { domElements } from "../../../../../../../../shared/dom/dom-elements.js";
import { resetAnimationVariables } from "../../reset-animation-variables.js";
import { addStompEffectAnimation } from "./add-stomp-effect-animation.js";

export function rockThrowAnimation(
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

    createRockThrow(
      pokemonLocation,
      secondAttackerCard,
      animationVariables.targetLocationCenterY
    );
  }
}

function createRockThrow(
  pokemonLocation,
  secondAttackerCard,
  targetLocationCenterY
) {
  const rockThrow = document.createElement("div");
  rockThrow.classList.add("rock-throw");
  pokemonLocation.appendChild(rockThrow);

  gsap.fromTo(
    rockThrow,
    { y: targetLocationCenterY - 600, scale: 1.5 },
    {
      y: targetLocationCenterY,
      scale: 1.5,
      duration: 0.2,
      ease: "power2.out",
      onComplete: () => {
        gsap.to(rockThrow, {
          x: "+=40",
          y: targetLocationCenterY - 80,
          scale: 1.5,
          rotation: 45,
          duration: 0.25,
          ease: "bounce.out",
          onComplete: () => {
            gsap.to(rockThrow, {
              x: "+=40",
              y: targetLocationCenterY,
              scale: 1.5,
              rotation: 45,
              duration: 0.25,
              ease: "power2.out",
              onComplete: () => {
                gsap.to(rockThrow, {
                  y: targetLocationCenterY - 40,
                  scale: 1.5,
                  rotation: 45,
                  duration: 0.25,
                  ease: "bounce.out",
                  onComplete: () => {
                    gsap.to(rockThrow, {
                      x: "+=20",
                      y: targetLocationCenterY,
                      duration: 0.25,
                      rotation: 45,
                      ease: "power2.out",
                      onComplete: () => rockThrow.remove(),
                    });
                  },
                });
              },
            });
          },
        });
      },
    }
  );
  setTimeout(() => {
    addStompEffectAnimation(secondAttackerCard);
  }, 150);

  resetAnimationVariables();
}
