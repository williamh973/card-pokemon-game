import { animationVariables } from "../../../../../../../../shared/animations/animation-variables.js";
import { domElements } from "../../../../../../../../shared/dom/dom-elements.js";
import { pokemonVariables } from "../../../../../../../../shared/pokemon/pokemon-variables.js";
import { getTargetCoordonates } from "../../fire/fire-spark/get-target-coordonates.js";

function checkPokemonsLocation(firstAttackerCard, secondAttackerCard) {
  if (domElements.pokemonLeftLocation.contains(firstAttackerCard)) {
    let getTargetLocationCenterX = getTargetCoordonates(firstAttackerCard);

    createGust(
      secondAttackerCard,
      domElements.pokemonLeftLocation,
      animationVariables.firstAttackerCenterX,
      animationVariables.firstAttackerCenterY,
      getTargetLocationCenterX,
      animationVariables.targetLocationCenterY
    );
  } else {
    let getTargetLocationCenterX = getTargetCoordonates(firstAttackerCard);

    createGust(
      secondAttackerCard,
      domElements.pokemonRightLocation,
      animationVariables.firstAttackerCenterX,
      animationVariables.firstAttackerCenterY,
      getTargetLocationCenterX,
      animationVariables.targetLocationCenterY
    );
  }
}

export function gustAnimation(
  attackName,
  firstAttackerCard,
  secondAttackerCard
) {
  if (attackName && firstAttackerCard) {
    checkPokemonsLocation(firstAttackerCard, secondAttackerCard);
  }
}

function addShakeAnimation(secondAttackerCard) {
  secondAttackerCard.classList.add("shake");
  setTimeout(() => {
    secondAttackerCard.classList.remove("shake");
  }, 600);
}

function createGust(
  secondAttackerCard,
  pokemonLocation,
  firstAttackerCenterX,
  firstAttackerCenterY,
  getTargetLocationCenterX,
  targetLocationCenterY
) {
  const tornado = document.createElement("div");
  tornado.classList.add("tornado");

  setTimeout(() => {
    addShakeAnimation(secondAttackerCard);
  }, 2_500);

  pokemonLocation.appendChild(tornado);

  gsap.fromTo(
    tornado,
    {
      x: firstAttackerCenterX,
      y: firstAttackerCenterY,
      scale: 0.4,
      opacity: 0.4,
      rotation: 0,
    },
    {
      x: getTargetLocationCenterX,
      y: targetLocationCenterY,
      scaleX: 1.4,
      scaleY: 1.4,
      opacity: 1,
      rotation: 6060,
      duration: 3,
      ease: "power1.in",
      onComplete: () => tornado.remove(),
    }
  );
}
