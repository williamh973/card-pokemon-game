import { animationVariables } from "../../../../../../shared/animations/animation-variables.js";
import {
  checkPokemonsLocation,
  firstAttackerLocation,
} from "../../check-pokemon-location/check-pokemon-location.js";

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
      firstAttackerLocation.appendChild(fireSpark);

      gsap.fromTo(
        fireSpark,
        { x: animationVariables.startX, y: animationVariables.startY },
        {
          x: animationVariables.endX,
          y: (animationVariables.endY = randomNumber),
          duration: 1,
          ease: "power1.out",
          onComplete: () => {
            fireSpark.remove();
          },
        }
      );
    }

    for (let i = 0; i < 5; i++) {
      setTimeout(createFireSpark, i * 100);
    }
  }
}
