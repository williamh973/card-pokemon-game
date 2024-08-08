export function agilityAnimation(attackName, firstAttackerCard) {
  if (attackName && firstAttackerCard) {
    firstAttackerCard.classList.add("agility");

    setTimeout(() => {
      firstAttackerCard.classList.remove("agility");
    }, 2_500);
  }
}
