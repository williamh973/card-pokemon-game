import { animationVariables } from "../../../../../../../../shared/animations/animation-variables.js";
import { domElements } from "../../../../../../../../shared/dom/dom-elements.js";
import { getTargetCoordonates } from "./get-target-coordonates.js";

export function fireSparkAnimation(
  attackName,
  firstAttackerCard,
  secondAttackerCard
) {
  if (attackName && firstAttackerCard) {
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

    for (let i = 0; i < 20; i++) {
      setTimeout(
        createFireSpark(
          getTargetLocationCenterX,
          domElements.pokemonLeftLocation,
          secondAttackerCard
        ),
        i * 10
      );
    }
  } else {
    let getTargetLocationCenterX = getTargetCoordonates(firstAttackerCard);

    for (let i = 0; i < 20; i++) {
      setTimeout(
        createFireSpark(
          getTargetLocationCenterX,
          domElements.pokemonRightLocation,
          secondAttackerCard
        ),
        i * 10
      );
    }
  }
}

function addTargetEffectAnimations(secondAttackerCard) {
  secondAttackerCard.classList.add("burning");
  setTimeout(() => {
    secondAttackerCard.classList.remove("burning");
  }, 2_000);
}

function createFireSpark(
  getTargetLocationCenterX,
  pokemonLocation,
  secondAttackerCard
) {
  const randomNumber =
    Math.floor(Math.random() * 200) - Math.floor(Math.random() * 190);
  const fireSpark = document.createElement("div");
  fireSpark.classList.add("fire-spark");

  setTimeout(() => {
    addTargetEffectAnimations(secondAttackerCard);
  }, 2_000);

  pokemonLocation.appendChild(fireSpark);

  gsap.fromTo(
    fireSpark,
    {
      x: animationVariables.firstAttackerCenterX,
      y: animationVariables.firstAttackerCenterY,
    },
    {
      x: getTargetLocationCenterX,
      y: (animationVariables.targetLocationCenterY = randomNumber),
      duration: 2,
      ease: "power1.out",
      onComplete: () => {
        fireSpark.remove();
      },
    }
  );
}
