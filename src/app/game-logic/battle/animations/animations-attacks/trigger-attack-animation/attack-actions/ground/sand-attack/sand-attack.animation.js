import { animationVariables } from "../../../../../../../../shared/animations/animation-variables.js";
import { domElements } from "../../../../../../../../shared/dom/dom-elements.js";
import { getTargetCoordonates } from "../../get-target-coordonates.js";
import { resetAnimationVariables } from "../../reset-animation-variables.js";

export function sandAttackAnimation(
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

    let leftLocationRect =
      domElements.pokemonLeftLocation.getBoundingClientRect();
    let rightLocationRect =
      domElements.pokemonRightLocation.getBoundingClientRect();

    let getTargetLocationCenterX = getTargetCoordonates(
      firstAttackerCard,
      leftLocationRect,
      rightLocationRect
    );

    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        createSandAttack(
          pokemonLocation,
          animationVariables.firstAttackerCenterX,
          animationVariables.firstAttackerCenterY,
          getTargetLocationCenterX,
          animationVariables.targetLocationCenterY
        );
      }, i * 100);
    }
  }
}

function createSandAttack(
  pokemonLocation,
  firstAttackerCenterX,
  firstAttackerCenterY,
  getTargetLocationCenterX,
  targetLocationCenterY
) {
  const sandAttack = document.createElement("div");
  sandAttack.classList.add("sand-attack");
  pokemonLocation.appendChild(sandAttack);

  gsap.fromTo(
    sandAttack,
    {
      x: firstAttackerCenterX,
      y: firstAttackerCenterY + 150,
      scale: 0.5,
      opacity: 0.8,
    },
    {
      x: getTargetLocationCenterX,
      y: targetLocationCenterY,
      scale: 3,
      opacity: 1,
      duration: 1.5,
      ease: "power3.out",
      onComplete: () => {
        gsap.to(sandAttack, {
          x: getTargetLocationCenterX,
          y: targetLocationCenterY,
          scale: 1.5,
          opacity: 0.5,
          duration: 1.5,
          onComplete: () => {
            sandAttack.remove();
          },
        });
      },
    }
  );
  resetAnimationVariables();
}
