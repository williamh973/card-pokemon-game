import { animationVariables } from "../../../../../../../../shared/animations/animation-variables.js";
import { domElements } from "../../../../../../../../shared/dom/dom-elements.js";
import { getTargetCoordonates } from "./get-target-coordonates.js";
import { addGrowUpAnimation } from "./add-grow-up-effect-animation.js";

export function dreamEaterAnimation(
  attackName,
  firstAttackerCard,
  secondAttackerCard
) {
  if (attackName && firstAttackerCard && secondAttackerCard) {
    checkPokemonsLocation(firstAttackerCard);
  }
}

function checkPokemonsLocation(firstAttackerCard) {
  if (domElements.pokemonLeftLocation.contains(firstAttackerCard)) {
    let getTargetLocationCenterX = getTargetCoordonates(firstAttackerCard);

    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        createDreamEater(
          firstAttackerCard,
          domElements.pokemonLeftLocation,
          animationVariables.firstAttackerCenterX,
          animationVariables.firstAttackerCenterY,
          getTargetLocationCenterX,
          animationVariables.targetLocationCenterY
        );
      }, i * 200);
    }
  } else if (domElements.pokemonRightLocation.contains(firstAttackerCard)) {
    let getTargetLocationCenterX = getTargetCoordonates(firstAttackerCard);

    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        createDreamEater(
          firstAttackerCard,
          domElements.pokemonRightLocation,
          animationVariables.firstAttackerCenterX,
          animationVariables.firstAttackerCenterY,
          getTargetLocationCenterX,
          animationVariables.targetLocationCenterY
        );
      }, i * 200);
    }
  }
}

function createDreamEater(
  firstAttackerCard,
  pokemonLocation,
  firstAttackerCenterX,
  firstAttackerCenterY,
  getTargetLocationCenterX,
  targetLocationCenterY
) {
  const dreamEater = document.createElement("div");
  dreamEater.classList.add("dream-eater");
  pokemonLocation.appendChild(dreamEater);

  setTimeout(() => {
    addGrowUpAnimation(firstAttackerCard);
  }, 3_500);

  const randomNumberY =
    Math.floor(Math.random() * 250) - Math.floor(Math.random() * 250);
  const randomScale = Math.floor(Math.random() * 1.2) + 0.2;

  gsap.fromTo(
    dreamEater,
    {
      x: getTargetLocationCenterX,
      y: targetLocationCenterY + randomNumberY,
    },
    {
      x: firstAttackerCenterX,
      y: firstAttackerCenterY,
      scale: randomScale,
      duration: 3,
      ease: "sine.inOut",
      onComplete: () => {
        dreamEater.remove();
      },
    }
  );
}
