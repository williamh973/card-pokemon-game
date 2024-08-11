import { animationVariables } from "../../../../../../../shared/animations/animation-variables.js";
import { domElements } from "../../../../../../../shared/dom/dom-elements.js";
import { resetAnimationVariables } from "../reset-animation-variables.js";
import { getTargetCoordonates } from "../get-target-coordonates.js";
import { applyFrozenClass } from "../auxiliary-effects/frozen.js";
import { glassShardAnimation } from "./target-effects-animations/add-glass-shard-animation.js";

export function iceBeamAnimation(
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

    for (let i = 0; i < 15; i++) {
      setTimeout(() => {
        createIceBeam(
          pokemonLocation,
          secondAttackerCard,
          animationVariables.firstAttackerCenterX,
          animationVariables.firstAttackerCenterY,
          getTargetLocationCenterX,
          animationVariables.targetLocationCenterY
        );
      }, i * 100);
    }
  }
}

function createIceBeam(
  pokemonLocation,
  secondAttackerCard,
  firstAttackerCenterX,
  firstAttackerCenterY,
  getTargetLocationCenterX,
  targetLocationCenterY
) {
  const iceBeam = document.createElement("div");
  iceBeam.classList.add("ice-beam");
  pokemonLocation.appendChild(iceBeam);

  gsap.fromTo(
    iceBeam,
    {
      x: firstAttackerCenterX,
      y: firstAttackerCenterY,
      scale: 1,
      opacity: 1,
    },
    {
      x: getTargetLocationCenterX,
      y: targetLocationCenterY,
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: "linear",
      onComplete: () => iceBeam.remove(),
    }
  );

  setTimeout(() => {
    applyFrozenClass(secondAttackerCard);
    glassShardAnimation(secondAttackerCard);
  }, 1_000);

  resetAnimationVariables();
}
