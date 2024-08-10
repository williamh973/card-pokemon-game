export function focusEnergyAnimation(
  attackName,
  firstAttackerCard,
  secondAttackerCard
) {
  if (attackName && firstAttackerCard && secondAttackerCard) {
    firstAttackerCard.classList.add("focus-energy");

    setTimeout(() => {
      firstAttackerCard.classList.remove("focus-energy");
    }, 2_500);
  }
}
