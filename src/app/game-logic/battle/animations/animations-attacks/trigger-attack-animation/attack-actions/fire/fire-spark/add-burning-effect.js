export function addTargetBurningAnimations(secondAttackerCard) {
  secondAttackerCard.classList.add("burning");
  setTimeout(() => {
    secondAttackerCard.classList.remove("burning");
  }, 2_000);
}
