import { animationVariables } from "../../../../../../shared/animations/animation-variables.js";
import { domElements } from "../../../../../../shared/dom/dom-elements.js";
import { pokemonVariables } from "../../../../../../shared/pokemon/pokemon-variables.js";
import {
  getFirstAttackerBoundingClientRectCard,
  getSecondAttackerBoundingClientRectCard,
} from "../../check-pokemon-location/check-pokemon-location.js";

function coordonates(pokemonLocation, startX, endX) {
  pokemonVariables.firstAttackerLocation = pokemonLocation;
  animationVariables.startX = startX;
  animationVariables.endX = endX;
}

function checkPokemonsLocation(firstAttackerCard, secondAttackerCard) {
  pokemonVariables.firstAttackerCardRect =
    getFirstAttackerBoundingClientRectCard(firstAttackerCard);

  pokemonVariables.secondAttackerCardRect =
    getSecondAttackerBoundingClientRectCard(secondAttackerCard);

  if (domElements.pokemonFirstLocation.contains(firstAttackerCard)) {
    coordonates(domElements.pokemonFirstLocation, -50, 700);
  } else {
    coordonates(domElements.pokemonSecondLocation, -50, -700);
  }
}

export function fireSparkAnimation(
  attackName,
  firstAttackerCard,
  secondAttackerCard
) {
  if (attackName && firstAttackerCard) {
    checkPokemonsLocation(firstAttackerCard, secondAttackerCard);

    function createFireSpark() {
      const randomNumber =
        Math.floor(Math.random() * 200) - Math.floor(Math.random() * 190);
      const fireSpark = document.createElement("div");
      fireSpark.classList.add("fire-spark");
      pokemonVariables.firstAttackerLocation.appendChild(fireSpark);

      gsap.fromTo(
        fireSpark,
        { x: animationVariables.startX, y: animationVariables.startY },
        {
          x: animationVariables.endX,
          y: (animationVariables.endY = randomNumber),
          duration: 2,
          transition: 0.2,
          ease: "power1.out",
          onComplete: () => {
            fireSpark.remove();
          },
        }
      );
    }

    for (let i = 0; i < 20; i++) {
      setTimeout(createFireSpark, i * 10);
    }
  }
}
