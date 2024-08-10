export function agilityAnimation(
  attackName,
  firstAttackerCard,
  secondAttackerCard
) {
  if (attackName && firstAttackerCard && secondAttackerCard) {
    firstAttackerCard.classList.add("agility");

    setTimeout(() => {
      firstAttackerCard.classList.remove("agility");
    }, 2_500);
  }
}
