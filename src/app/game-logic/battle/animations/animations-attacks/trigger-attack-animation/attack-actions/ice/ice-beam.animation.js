import { animationVariables } from "../../../../../../../shared/animations/animation-variables.js";
import { domElements } from "../../../../../../../shared/dom/dom-elements.js";
import { pokemonVariables } from "../../../../../../../shared/pokemon/pokemon-variables.js";
import {
  getFirstAttackerBoundingClientRectCard,
  getSecondAttackerBoundingClientRectCard,
} from "../../../check-pokemon-location/check-pokemon-location.js";

let iceBeam = document.createElement("div");
iceBeam.classList.add("ice-beam");

function coordonates(
  pokemonLocation,
  startX,
  endX,
  transformOrigin,
  top,
  left
) {
  pokemonVariables.firstAttackerLocation = pokemonLocation;
  animationVariables.startX = startX;
  animationVariables.endX = endX;
  iceBeam.style.transformOrigin = transformOrigin;
  iceBeam.style.top = top;
  iceBeam.style.left = left;
}

function checkPokemonsLocation(firstAttackerCard, secondAttackerCard) {
  pokemonVariables.firstAttackerCardRect =
    getFirstAttackerBoundingClientRectCard(firstAttackerCard);

  pokemonVariables.secondAttackerCardRect =
    getSecondAttackerBoundingClientRectCard(secondAttackerCard);

  if (domElements.pokemonFirstLocation.contains(firstAttackerCard)) {
    coordonates(
      domElements.pokemonFirstLocation,
      0,
      0,
      "left center",
      "60%",
      "35%"
    );
  } else {
    coordonates(
      domElements.pokemonSecondLocation,
      0,
      0,
      "right center",
      "60%",
      "40%"
    );
  }
}

export function iceBeamAnimation(
  attackName,
  firstAttackerCard,
  secondAttackerCard
) {
  if (attackName && firstAttackerCard) {
    checkPokemonsLocation(firstAttackerCard, secondAttackerCard);

    function createIceBeam() {
      pokemonVariables.firstAttackerLocation.appendChild(iceBeam);
      console.log(animationVariables.startX, animationVariables.endX);
      gsap.fromTo(
        iceBeam,
        { x: animationVariables.startX, y: animationVariables.startY },
        {
          x: animationVariables.endX,
          y: animationVariables.endY,
          duration: 1.5,
          ease: "linear",
          onComplete: () => {
            iceBeam.remove();
          },
        }
      );
    }

    for (let i = 0; i < 20; i++) {
      setTimeout(createIceBeam, i * 10);
    }
  }
}
