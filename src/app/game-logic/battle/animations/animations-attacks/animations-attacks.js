import {
  getPokemonCardIds,
  getCardRects,
  calculateRectangleCoordinates,
} from "../../../pokemon/pokemon-utils.js";
import { domElements } from "../../../../shared/dom/dom-elements.js";

export function addAttackAnimation(attackName) {
  const { firstPokemonCardId, secondPokemonCardId, randomPokemonCardId } =
    getPokemonCardIds();

  const cardRects = getCardRects(
    firstPokemonCardId,
    secondPokemonCardId,
    randomPokemonCardId
  );

  const { firstRect, secondRect, randomRect } = cardRects;

  const coordinates = calculateRectangleCoordinates(
    firstRect,
    secondRect,
    randomRect
  );

  const { startX, startY, endX, endY } = coordinates;

  if (attackName === "Flammèche") {
    const flame = document.createElement("div");
    flame.classList.add("fire-spark");
    domElements.ring.appendChild(flame);
    flame.style.left = `${startX}px`;
    flame.style.top = `${startY}px`;

    gsap.fromTo(
      flame,
      { x: startX, y: startY },
      {
        x: endX,
        y: endY,
        duration: 1,
        ease: "power1.inOut",
        onComplete: () => {
          flame.remove();
        },
      }
    );
  }
}
