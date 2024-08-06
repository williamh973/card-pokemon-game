import { animationVariables } from "../../../../../../../shared/animations/animation-variables.js";
import { domElements } from "../../../../../../../shared/dom/dom-elements.js";
import { pokemonVariables } from "../../../../../../../shared/pokemon/pokemon-variables.js";

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

  if (domElements.pokemonLeftLocation.contains(secondAttackerCard)) {
    coordonates(domElements.pokemonLeftLocation, 0, 0);
  } else {
    coordonates(domElements.pokemonRightLocation, 0, 0);
  }
}

export function guillotineAnimation(
  attackName,
  firstAttackerCard,
  secondAttackerCard
) {
  if (attackName && firstAttackerCard) {
    checkPokemonsLocation(firstAttackerCard, secondAttackerCard);

    function createGuillotine() {
      const guillotine = document.createElement("div");
      guillotine.classList.add("guillotine");
      pokemonVariables.firstAttackerLocation.appendChild(guillotine);

      gsap.fromTo(
        guillotine,
        { y: -400, scale: 2 },
        {
          y: secondAttackerCard.getBoundingClientRect().bottom + 400,
          scale: 2,
          duration: 0.25,
          ease: "power2.out",
          onComplete: () => {
            gsap.to(guillotine, {
              y: secondAttackerCard.getBoundingClientRect().top - 400,
              scale: 2,
              duration: 0.25,
              repeat: 1,
              ease: "power2.inOut",
              onComplete: () => guillotine.remove(),
            });
          },
        }
      );
    }
    createGuillotine();
  }
}
