export function createDefenseUpAnimation(
  pokemonLocation,
  firstAttackerCenterX,
  firstAttackerCenterY
) {
  const defenseUp = document.createElement("div");
  defenseUp.classList.add("defense-up");

  pokemonLocation.appendChild(defenseUp);

  const randomNumberX =
    Math.floor(Math.random() * 250) - Math.floor(Math.random() * 250);
  const randomScale = Math.floor(Math.random() * 1.2) + 0.2;

  gsap.fromTo(
    defenseUp,
    {
      x: firstAttackerCenterX + randomNumberX,
      y: firstAttackerCenterY + 200,
    },
    {
      y: firstAttackerCenterY - 200,
      scale: randomScale,
      duration: 1.5,
      ease: "sine.inOut",
      onComplete: () => {
        defenseUp.remove();
      },
    }
  );
}
