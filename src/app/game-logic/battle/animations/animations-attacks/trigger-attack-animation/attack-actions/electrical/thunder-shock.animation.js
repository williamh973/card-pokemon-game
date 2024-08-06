import { domElements } from "../../../../../../../shared/dom/dom-elements.js";
import { pokemonVariables } from "../../../../../../../shared/pokemon/pokemon-variables.js";

function coordonates(
  pokemonLocation,
  firstAttackerCard,
  secondAttackerCard,
  firstAttackerCenterX,
  firstAttackerCenterY,
  targetLocationCenterX,
  targetLocationCenterY
) {
  pokemonVariables.firstAttackerLocation = pokemonLocation;
  createThunderShock(
    firstAttackerCard,
    secondAttackerCard,
    firstAttackerCenterX,
    firstAttackerCenterY,
    targetLocationCenterX,
    targetLocationCenterY
  );
}

function checkPokemonsLocation(firstAttackerCard, secondAttackerCard) {
  let targetLocationCenterX = 0;
  let targetLocationCenterY = 0;
  let firstAttackerCenterX = 0;
  let firstAttackerCenterY = 0;
  let leftLocationRect =
    domElements.pokemonLeftLocation.getBoundingClientRect();
  let rightLocationRect =
    domElements.pokemonRightLocation.getBoundingClientRect();

  if (domElements.pokemonLeftLocation.contains(firstAttackerCard)) {
    targetLocationCenterX =
      firstAttackerCenterX +
      leftLocationRect.width / 2 +
      rightLocationRect.left -
      leftLocationRect.right +
      rightLocationRect.width / 2;

    coordonates(
      domElements.pokemonLeftLocation,
      firstAttackerCard,
      secondAttackerCard,
      firstAttackerCenterX,
      firstAttackerCenterY,
      targetLocationCenterX,
      targetLocationCenterY
    );
  } else if (domElements.pokemonRightLocation.contains(firstAttackerCard)) {
    targetLocationCenterX =
      firstAttackerCenterX -
      rightLocationRect.width / 2 -
      rightLocationRect.left +
      leftLocationRect.left +
      leftLocationRect.width / 2;

    coordonates(
      domElements.pokemonRightLocation,
      firstAttackerCard,
      secondAttackerCard,
      firstAttackerCenterX,
      firstAttackerCenterY,
      targetLocationCenterX,
      targetLocationCenterY
    );
  }
}

function addShakeAnimation(pokemonCard) {
  pokemonCard.classList.add("shake");
  setTimeout(() => {
    pokemonCard.classList.remove("shake");
  }, 600);
}

function createThunderShock(
  firstAttackerCard,
  secondAttackerCard,
  firstAttackerCenterX,
  firstAttackerCenterY,
  targetLocationCenterX,
  targetLocationCenterY
) {
  const gsapTimeline = gsap.timeline({ repeat: 0, repeatDelay: 0 });
  const thunderShock = document.createElement("div");

  thunderShock.classList.add("thunder-shock");
  addShakeAnimation(firstAttackerCard);
  setTimeout(() => {
    addShakeAnimation(secondAttackerCard);
  }, 1_600);

  pokemonVariables.firstAttackerLocation.appendChild(thunderShock);
  gsapTimeline
    .fromTo(
      thunderShock,
      {
        x: firstAttackerCenterX,
        y: firstAttackerCenterY,
        scale: 1,
        opacity: 1,
        boxShadow: "0 0 0 rgba(255, 255, 255, 0.9)",
        duration: 0.25,
      },
      {
        scale: 1.2,
        opacity: 0.7,
        boxShadow: "0 0 20px rgba(255, 255, 255, 0.8)",
        duration: 0.25,
      }
    )
    .to(thunderShock, {
      scale: 1.5,
      opacity: 0.5,
      boxShadow: "0 0 40px rgba(255, 255, 255, 0.7)",
      duration: 0.25,
    })
    .to(thunderShock, {
      scale: 1.2,
      opacity: 0.7,
      boxShadow: "0 0 20px rgba(255, 255, 255, 0.8)",
      duration: 0.25,
    })
    .to(thunderShock, {
      scale: 1.3,
      opacity: 0.6,
      boxShadow: "0 0 30px rgba(255, 255, 255, 0.8)",
      duration: 0.25,
    })
    .to(thunderShock, {
      scale: 0.4,
      opacity: 1,
      boxShadow: "0 0 0 rgba(255, 255, 255, 0.9)",
      duration: 0.25,
    })
    .to(thunderShock, {
      x: targetLocationCenterX,
      y: targetLocationCenterY,
      scale: 0.4,
      opacity: 1,
      boxShadow: "0 0 20px rgba(255, 255, 255, 0.8)",
      duration: 0.25,
      ease: "linear",
    })
    .to(thunderShock, {
      scale: 1.5,
      opacity: 1,
      duration: 0.25,
      boxShadow: "0 0 0 rgba(255, 255, 255, 0.9)",
      onComplete: () => thunderShock.remove(),
    });
}

export function thunderShockAnimation(
  attackName,
  firstAttackerCard,
  secondAttackerCard
) {
  if (attackName && firstAttackerCard && secondAttackerCard) {
    checkPokemonsLocation(firstAttackerCard, secondAttackerCard);
  }
}
