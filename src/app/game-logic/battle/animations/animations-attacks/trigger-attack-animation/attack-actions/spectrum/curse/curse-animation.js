import { animationVariables } from "../../../../../../../../shared/animations/animation-variables.js";
import { domElements } from "../../../../../../../../shared/dom/dom-elements.js";
import { resetAnimationVariables } from "../../reset-animation-variables.js";
import { getTargetCoordonates } from "../get-target-coordonates.js";
import { createShine } from "./shine-animation.js";
import { createSkull } from "./skull-animation.js";
import { createSmoke } from "./smoke.animation.js";

export async function curseAnimation(
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

    setTimeout(() => {
      createCurse(
        pokemonLocation,
        animationVariables.firstAttackerCenterX,
        animationVariables.firstAttackerCenterY
      );
    }, 0);

    await new Promise((resolve) => {
      setTimeout(() => {
        createShine(
          pokemonLocation,
          animationVariables.firstAttackerCenterX,
          animationVariables.firstAttackerCenterY
        );
        resolve();
      }, 500);
    });

    await new Promise((resolve) => {
      setTimeout(() => {
        createSmoke(
          pokemonLocation,
          getTargetLocationCenterX,
          animationVariables.targetLocationCenterY
        );
        createSkull(
          pokemonLocation,
          getTargetLocationCenterX,
          animationVariables.targetLocationCenterY
        );
        resolve();
      }, 1000);
    });
  }
}

function createCurse(
  pokemonLocation,
  firstAttackerCenterX,
  firstAttackerCenterY
) {
  const curse = document.createElement("div");
  curse.classList.add("curse");
  pokemonLocation.appendChild(curse);

  gsap.fromTo(
    curse,
    {
      x: firstAttackerCenterX + 200,
      y: firstAttackerCenterY - 200,
      duration: 0.5,
    },
    {
      x: firstAttackerCenterX,
      y: firstAttackerCenterY,
      duration: 0.5,
      ease: "power3.in",
      onComplete: () => {
        curse.remove();
      },
    }
  );
  resetAnimationVariables();
}
