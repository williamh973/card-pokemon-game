import { animationVariables } from "../../../../../../../../shared/animations/animation-variables.js";
import { domElements } from "../../../../../../../../shared/dom/dom-elements.js";
import { getTargetCoordonates } from "./get-target-coordonates.js";

export function thunderShockAnimation(
  attackName,
  firstAttackerCard,
  secondAttackerCard
) {
  if (attackName && firstAttackerCard && secondAttackerCard) {
    checkPokemonsLocationAndTriggerAnimation(
      firstAttackerCard,
      secondAttackerCard
    );
  }
}

function checkPokemonsLocationAndTriggerAnimation(
  firstAttackerCard,
  secondAttackerCard
) {
  if (domElements.pokemonLeftLocation.contains(firstAttackerCard)) {
    let getTargetLocationCenterX = getTargetCoordonates(firstAttackerCard);

    createThunderShock(
      firstAttackerCard,
      secondAttackerCard,
      domElements.pokemonLeftLocation,
      animationVariables.firstAttackerCenterX,
      animationVariables.firstAttackerCenterY,
      getTargetLocationCenterX,
      animationVariables.targetLocationCenterY
    );
  } else if (domElements.pokemonRightLocation.contains(firstAttackerCard)) {
    let getTargetLocationCenterX = getTargetCoordonates(firstAttackerCard);

    createThunderShock(
      firstAttackerCard,
      secondAttackerCard,
      domElements.pokemonRightLocation,
      animationVariables.firstAttackerCenterX,
      animationVariables.firstAttackerCenterY,
      getTargetLocationCenterX,
      animationVariables.targetLocationCenterY
    );
  }
}

function addShakeAnimation(pokemonCard) {
  pokemonCard.classList.add("shake");
  setTimeout(() => {
    pokemonCard.classList.remove("shake");
  }, 600);
}

function createThunderShock(
  firstAttackerCard,
  secondAttackerCard,
  pokemonLocation,
  firstAttackerCenterX,
  firstAttackerCenterY,
  targetLocationCenterX,
  targetLocationCenterY
) {
  const gsapTimeline = gsap.timeline({ repeat: 0, repeatDelay: 0 });
  const thunderShock = document.createElement("div");

  thunderShock.classList.add("thunder-shock");
  addShakeAnimation(firstAttackerCard);

  setTimeout(() => {
    addShakeAnimation(secondAttackerCard);
  }, 1_600);

  pokemonLocation.appendChild(thunderShock);

  gsapTimeline
    .fromTo(
      thunderShock,
      {
        x: firstAttackerCenterX,
        y: firstAttackerCenterY,
        scale: 1,
        opacity: 1,
        boxShadow: "0 0 0 rgba(255, 255, 255, 0.9)",
        duration: 0.25,
      },
      {
        scale: 1.2,
        opacity: 0.7,
        boxShadow: "0 0 20px rgba(255, 255, 255, 0.8)",
        duration: 0.25,
      }
    )
    .to(thunderShock, {
      scale: 1.5,
      opacity: 0.5,
      boxShadow: "0 0 40px rgba(255, 255, 255, 0.7)",
      duration: 0.25,
    })
    .to(thunderShock, {
      scale: 1.2,
      opacity: 0.7,
      boxShadow: "0 0 20px rgba(255, 255, 255, 0.8)",
      duration: 0.25,
    })
    .to(thunderShock, {
      scale: 1.3,
      opacity: 0.6,
      boxShadow: "0 0 30px rgba(255, 255, 255, 0.8)",
      duration: 0.25,
    })
    .to(thunderShock, {
      scale: 0.4,
      opacity: 1,
      boxShadow: "0 0 0 rgba(255, 255, 255, 0.9)",
      duration: 0.25,
    })
    .to(thunderShock, {
      x: targetLocationCenterX,
      y: targetLocationCenterY,
      scale: 0.4,
      opacity: 1,
      boxShadow: "0 0 20px rgba(255, 255, 255, 0.8)",
      duration: 0.25,
      ease: "linear",
    })
    .to(thunderShock, {
      scale: 1.5,
      opacity: 1,
      duration: 0.25,
      boxShadow: "0 0 0 rgba(255, 255, 255, 0.9)",
      onComplete: () => thunderShock.remove(),
    });
}
