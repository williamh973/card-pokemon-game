import { animationVariables } from "../../../../../shared/animations/animation-variables.js";
import {
  checkPokemonsLocation,
  firstAttackerLocation,
} from "./check-pokemon-location/check-pokemon-location.js";

export function protectAnimation(
  attackName,
  firstAttackerCard,
  secondAttackerCard
) {
  if (attackName && firstAttackerCard) {
    const protect = document.createElement("div");
    protect.classList.add("protect");

    checkPokemonsLocation(firstAttackerCard, secondAttackerCard);

    firstAttackerLocation.appendChild(protect);

    gsap.fromTo(
      protect,
      { x: animationVariables.startX, y: animationVariables.startY },
      {
        x: (animationVariables.endX = 0),
        y: animationVariables.endY,
        duration: 2,
        ease: "power1.out",
        onComplete: () => {
          protect.remove();
        },
      }
    );
  }
}
