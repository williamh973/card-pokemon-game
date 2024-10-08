import { animationVariables } from "../../../../../../../../shared/animations/animation-variables.js";
import { domElements } from "../../../../../../../../shared/dom/dom-elements.js";
import { getTargetCoordonates } from "../../get-target-coordonates.js";
import { resetAnimationVariables } from "../../reset-animation-variables.js";
import { applyClassBurn } from "../../auxiliary-effects/burn.js";

export async function fireSparkAnimation(
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
      setTimeout(
        createFireSpark(
          pokemonLocation,
          getTargetLocationCenterX,
          secondAttackerCard
        ),
        i * 100
      );
    }
    await new Promise((resolve) => {
      setTimeout(() => {
        applyClassBurn(secondAttackerCard, 1000);
        resolve();
      }, 1_500);
    });
  }
}

function createFireSpark(pokemonLocation, getTargetLocationCenterX) {
  const randomNumberX =
    Math.floor(Math.random() * 50) - Math.floor(Math.random() + 50);
  const randomNumberY =
    Math.floor(Math.random() * 100) - Math.floor(Math.random() * 100);
  const fireSpark = document.createElement("div");
  fireSpark.classList.add("fire-spark");

  pokemonLocation.appendChild(fireSpark);

  gsap.fromTo(
    fireSpark,
    {
      x: animationVariables.firstAttackerCenterX,
      y: animationVariables.firstAttackerCenterY,
    },
    {
      x: getTargetLocationCenterX + randomNumberX,
      y: (animationVariables.targetLocationCenterY = randomNumberY),
      duration: 1.5,
      rotation: 90,
      ease: "power1.out",
      onComplete: () => {
        fireSpark.remove();
      },
    }
  );
  resetAnimationVariables();
}
