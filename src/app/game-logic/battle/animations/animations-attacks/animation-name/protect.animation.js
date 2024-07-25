import { domElements } from "../../../../../shared/dom/dom-elements.js";
import { calculateRectangleCoordinates } from "../calculate-rectangle-coordinates.js";
import { getCardRectangles } from "../get-cards-rectangle.js";
import { getPokemonCardIdName } from "../get-pokemon-card-id-name.js";

export function protectAnimation(attackName) {
  //   if (attackName) {
  //     console.log("attackName", attackName);
  //     const cardRects = getCardRectangles(
  //       firstPokemonCardIdName,
  //       secondPokemonCardIdName,
  //       randomPokemonCardIdName
  //     );
  //     const {
  //       firstPokemonCardIdName,
  //       secondPokemonCardIdName,
  //       randomPokemonCardIdName,
  //     } = getPokemonCardIdName();
  //     const coordinates = calculateRectangleCoordinates(
  //       firstRect,
  //       secondRect,
  //       randomRect
  //     );
  //     const { firstRect, secondRect, randomRect } = cardRects;
  //     const { startX, startY, endX, endY } = coordinates;
  //     const protect = document.createElement("div");
  //     protect.classList.add("protect");
  //     domElements.ring.appendChild(protect);
  //     protect.style.left = `${startX}px`;
  //     protect.style.top = `${startY}px`;
  //     gsap.fromTo(
  //       protect,
  //       { x: startX, y: startY },
  //       {
  //         x: endX,
  //         y: endY,
  //         duration: 1,
  //         ease: "power1.inOut",
  //         onComplete: () => {
  //           protect.remove();
  //         },
  //       }
  //     );
  //   }
}
