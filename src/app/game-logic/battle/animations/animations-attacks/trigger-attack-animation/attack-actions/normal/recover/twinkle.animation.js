export function twinkleAnimation(attackName, firstAttackerCard) {
  if (attackName && firstAttackerCard) {
    firstAttackerCard.classList.add("twinkle");

    setTimeout(() => {
      firstAttackerCard.classList.remove("twinkle");
    }, 2000);
  }
}
