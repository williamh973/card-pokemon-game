import { twinklePsychicAnimation } from "./twinkle-psychic.animation.js";

export async function psychicAnimation(
  attackName,
  firstAttackerCard,
  secondAttackerCard
) {
  if (attackName && firstAttackerCard && secondAttackerCard) {
    twinklePsychicAnimation(attackName, firstAttackerCard);
    await new Promise((resolve) => {
      setTimeout(() => {
        createPsychic(attackName, secondAttackerCard);
        resolve();
      }, 1000);
    });
  }
}

function createPsychic(attackName, secondAttackerCard) {
  if (attackName && secondAttackerCard) {
    secondAttackerCard.classList.add("psychic");

    setTimeout(() => {
      secondAttackerCard.classList.remove("psychic");
    }, 5_000);
  }
}
