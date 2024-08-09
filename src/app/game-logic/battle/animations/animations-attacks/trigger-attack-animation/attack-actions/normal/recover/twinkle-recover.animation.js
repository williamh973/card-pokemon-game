export function twinkleRecoverAnimation(attackName, firstAttackerCard) {
  if (attackName && firstAttackerCard) {
    firstAttackerCard.classList.add("twinkle-recover");

    setTimeout(() => {
      firstAttackerCard.classList.remove("twinkle-recover");
    }, 2000);
  }
}
