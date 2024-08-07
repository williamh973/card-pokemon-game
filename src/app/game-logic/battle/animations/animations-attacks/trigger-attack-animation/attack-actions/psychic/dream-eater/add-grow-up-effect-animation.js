export function addGrowUpAnimation(firstAttackerCard) {
  firstAttackerCard.classList.add("grow-up");
  setTimeout(() => {
    firstAttackerCard.classList.remove("grow-up");
  }, 2_000);
}
