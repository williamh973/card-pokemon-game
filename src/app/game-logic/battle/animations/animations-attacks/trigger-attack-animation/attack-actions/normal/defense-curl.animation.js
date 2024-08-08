import { animationVariables } from "../../../../../../../shared/animations/animation-variables.js";
import { domElements } from "../../../../../../../shared/dom/dom-elements.js";

export async function defenseCurlAnimation(attackName, firstAttackerCard) {
  if (attackName && firstAttackerCard) {
    await createDefenseCurlAnimation(firstAttackerCard);
    checkPokemonsLocation(firstAttackerCard);
  }
}

function checkPokemonsLocation(firstAttackerCard) {
  if (domElements.pokemonLeftLocation.contains(firstAttackerCard)) {
    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        createDefenseUpAnimation(
          domElements.pokemonLeftLocation,
          animationVariables.firstAttackerCenterX,
          animationVariables.firstAttackerCenterY
        );
      }, i * 200);
    }
  } else if (domElements.pokemonRightLocation.contains(firstAttackerCard)) {
    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        createDefenseUpAnimation(
          domElements.pokemonRightLocation,
          animationVariables.firstAttackerCenterX,
          animationVariables.firstAttackerCenterY
        );
      }, i * 200);
    }
  }
}

async function createDefenseCurlAnimation(firstAttackerCard) {
  return new Promise((resolve, reject) => {
    firstAttackerCard.classList.add("defense-curl");

    setTimeout(() => {
      firstAttackerCard.classList.remove("defense-curl");
      resolve();
    }, 2_500);
  });
}

function createDefenseUpAnimation(
  pokemonLocation,
  firstAttackerCenterX,
  firstAttackerCenterY
) {
  const defenseUp = document.createElement("div");
  defenseUp.classList.add("defense-up");

  pokemonLocation.appendChild(defenseUp);

  const randomNumberX =
    Math.floor(Math.random() * 300) - Math.floor(Math.random() * 300);
  const randomScale = Math.floor(Math.random() * 1.2) + 0.2;

  gsap.fromTo(
    defenseUp,
    {
      x: firstAttackerCenterX + randomNumberX,
      y: firstAttackerCenterY + 200,
    },
    {
      y: firstAttackerCenterY - 200,
      scale: randomScale,
      duration: 1.5,
      ease: "sine.inOut",
      onComplete: () => {
        defenseUp.remove();
      },
    }
  );
}
