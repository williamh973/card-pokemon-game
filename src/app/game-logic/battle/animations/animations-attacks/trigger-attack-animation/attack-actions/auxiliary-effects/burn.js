export function applyClassBurn(secondAttackerCard, delay) {
  secondAttackerCard.classList.add("burning");
  setTimeout(() => {
    secondAttackerCard.classList.remove("burning");
  }, delay);
}
