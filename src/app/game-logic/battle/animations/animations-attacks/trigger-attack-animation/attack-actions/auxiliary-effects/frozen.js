export function applyFrozenClass(secondAttackerCard) {
  secondAttackerCard.classList.add("frozen");
  setTimeout(() => {
    secondAttackerCard.classList.remove("frozen");
  }, 2_000);
}
