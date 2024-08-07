import { animationVariables } from "../../../../../../../shared/animations/animation-variables.js";
import { domElements } from "../../../../../../../shared/dom/dom-elements.js";
import { getTargetCoordonates } from "./get-target-coordonates.js";
import { addFrozenEffectAnimations } from "./target-effects-animations/add-frozen-animation.js";
import { glassShardAnimation } from "./target-effects-animations/add-glass-shard-animation.js";

let leftLocationRect;
let rightLocationRect;

function checkPokemonsLocation(firstAttackerCard, secondAttackerCard) {
  leftLocationRect = domElements.pokemonLeftLocation.getBoundingClientRect();
  rightLocationRect = domElements.pokemonRightLocation.getBoundingClientRect();

  if (domElements.pokemonLeftLocation.contains(firstAttackerCard)) {
    let getTargetLocationCenterX = getTargetCoordonates(
      firstAttackerCard,
      leftLocationRect,
      rightLocationRect
    );

    for (let i = 0; i < 15; i++) {
      setTimeout(() => {
        createIceBeam(
          firstAttackerCard,
          secondAttackerCard,
          domElements.pokemonLeftLocation,
          animationVariables.firstAttackerCenterX,
          animationVariables.firstAttackerCenterY,
          getTargetLocationCenterX,
          animationVariables.targetLocationCenterY
        );
      }, i * 100);
    }
  } else {
    let getTargetLocationCenterX = getTargetCoordonates(
      firstAttackerCard,
      leftLocationRect,
      rightLocationRect
    );

    for (let i = 0; i < 15; i++) {
      setTimeout(() => {
        createIceBeam(
          firstAttackerCard,
          secondAttackerCard,
          domElements.pokemonRightLocation,
          animationVariables.firstAttackerCenterX,
          animationVariables.firstAttackerCenterY,
          getTargetLocationCenterX,
          animationVariables.targetLocationCenterY
        );
      }, i * 100);
    }
  }
}

export function iceBeamAnimation(
  attackName,
  firstAttackerCard,
  secondAttackerCard
) {
  if (attackName && firstAttackerCard) {
    checkPokemonsLocation(firstAttackerCard, secondAttackerCard);
  }
}

function createIceBeam(
  firstAttackerCard,
  secondAttackerCard,
  pokemonLocation,
  firstAttackerCenterX,
  firstAttackerCenterY,
  getTargetLocationCenterX,
  targetLocationCenterY
) {
  setTimeout(() => {
    addFrozenEffectAnimations(secondAttackerCard);
    glassShardAnimation(secondAttackerCard);
  }, 1_000);

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
}
