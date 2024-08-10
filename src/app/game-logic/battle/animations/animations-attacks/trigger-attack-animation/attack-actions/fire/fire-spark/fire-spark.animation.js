import { animationVariables } from "../../../../../../../../shared/animations/animation-variables.js";
import { domElements } from "../../../../../../../../shared/dom/dom-elements.js";
import { getTargetCoordonates } from "../../get-target-coordonates.js";
import { resetAnimationVariables } from "../../reset-animation-variables.js";
import { addTargetBurningAnimations } from "./add-burning-effect.js";

export function fireSparkAnimation(
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

    for (let i = 0; i < 20; i++) {
      setTimeout(
        createFireSpark(
          pokemonLocation,
          getTargetLocationCenterX,
          secondAttackerCard
        ),
        i * 10
      );
    }
  }
}

function createFireSpark(
  pokemonLocation,
  getTargetLocationCenterX,
  secondAttackerCard
) {
  const randomNumber =
    Math.floor(Math.random() * 200) - Math.floor(Math.random() * 190);
  const fireSpark = document.createElement("div");
  fireSpark.classList.add("fire-spark");

  setTimeout(() => {
    addTargetBurningAnimations(secondAttackerCard);
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
  resetAnimationVariables();
}
