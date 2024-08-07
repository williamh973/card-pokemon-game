export function addStompEffectAnimation(secondAttackerCard) {
  secondAttackerCard.classList.add("stomp");
  setTimeout(() => {
    secondAttackerCard.classList.remove("stomp");
  }, 1_000);
}
