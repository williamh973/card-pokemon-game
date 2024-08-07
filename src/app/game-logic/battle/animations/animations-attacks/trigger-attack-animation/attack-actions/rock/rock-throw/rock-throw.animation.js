import { animationVariables } from "../../../../../../../../shared/animations/animation-variables.js";
import { domElements } from "../../../../../../../../shared/dom/dom-elements.js";
import { addStompEffectAnimation } from "./add-stomp-effect-animation.js";

export function rockThrowAnimation(
  attackName,
  firstAttackerCard,
  secondAttackerCard
) {
  if (attackName && firstAttackerCard && secondAttackerCard) {
    if (domElements.pokemonLeftLocation.contains(secondAttackerCard)) {
      createRockThrow(domElements.pokemonLeftLocation, secondAttackerCard);
    } else {
      createRockThrow(domElements.pokemonRightLocation, secondAttackerCard);
    }
  }
}

function createRockThrow(pokemonLocation, secondAttackerCard) {
  const rockThrow = document.createElement("div");
  rockThrow.classList.add("rock-throw");
  pokemonLocation.appendChild(rockThrow);

  setTimeout(() => {
    addStompEffectAnimation(secondAttackerCard);
  }, 150);

  gsap.fromTo(
    rockThrow,
    { y: animationVariables.targetLocationCenterY - 600, scale: 1.5 },
    {
      y: animationVariables.targetLocationCenterY,
      scale: 1.5,
      duration: 0.2,
      ease: "power2.out",
      onComplete: () => {
        gsap.to(rockThrow, {
          x: "+=40",
          y: animationVariables.targetLocationCenterY - 80,
          scale: 1.5,
          rotation: 45,
          duration: 0.25,
          ease: "bounce.out",
          onComplete: () => {
            gsap.to(rockThrow, {
              x: "+=40",
              y: animationVariables.targetLocationCenterY,
              scale: 1.5,
              rotation: 45,
              duration: 0.25,
              ease: "power2.out",
              onComplete: () => {
                gsap.to(rockThrow, {
                  y: animationVariables.targetLocationCenterY - 40,
                  scale: 1.5,
                  rotation: 45,
                  duration: 0.25,
                  ease: "bounce.out",
                  onComplete: () => {
                    gsap.to(rockThrow, {
                      x: "+=20",
                      y: animationVariables.targetLocationCenterY,
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
}
