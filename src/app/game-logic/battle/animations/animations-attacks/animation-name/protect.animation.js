import { domElements } from "../../../../../shared/dom/dom-elements.js";

export function protectAnimation(attackName, firstAttackerCard) {
  if (attackName && firstAttackerCard) {
    const firstAttackerLocation = domElements.pokemonFirstLocation.contains(
      firstAttackerCard
    )
      ? domElements.pokemonFirstLocation
      : domElements.pokemonSecondLocation;

    let startX = 0;
    let startY = 0;
    let endY = startY;
    let endX = startX;

    function checkFirstAttackerLocation(firstAttackerCard) {
      if (domElements.pokemonFirstLocation.contains(firstAttackerCard)) {
        domElements.pokemonFirstLocation;
        endX = startX + 100;
      } else {
        domElements.pokemonSecondLocation;
        endX = startX - 100;
      }
    }
    checkFirstAttackerLocation(firstAttackerCard);

    const protect = document.createElement("div");
    protect.classList.add("protect");
    firstAttackerLocation.appendChild(protect);

    gsap.fromTo(
      protect,
      { x: startX, y: startY },
      {
        x: endX,
        y: endY,
        duration: 3,
        ease: "power1.out",
        onComplete: () => {
          protect.remove();
        },
      }
    );
  }
}
