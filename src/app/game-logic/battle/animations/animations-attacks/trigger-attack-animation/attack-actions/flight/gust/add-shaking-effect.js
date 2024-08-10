export function addShakeAnimation(secondAttackerCard) {
  secondAttackerCard.classList.add("shake");
  setTimeout(() => {
    secondAttackerCard.classList.remove("shake");
  }, 1_000);
}
