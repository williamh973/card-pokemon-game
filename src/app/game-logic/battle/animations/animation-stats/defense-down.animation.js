export function createDefenseDown(
  pokemonLocation,
  firstAttackerCenterX,
  firstAttackerCenterY
) {
  const defenseDown = document.createElement("div");
  defenseDown.classList.add("defense-down");

  pokemonLocation.appendChild(defenseDown);

  const randomNumberX =
    Math.floor(Math.random() * 250) - Math.floor(Math.random() * 250);
  const randomScale = Math.floor(Math.random() * 1.2) + 0.2;

  gsap.fromTo(
    defenseDown,
    {
      x: firstAttackerCenterX + randomNumberX,
      y: firstAttackerCenterY - 200,
    },
    {
      y: firstAttackerCenterY + 200,
      scale: randomScale,
      duration: 1.5,
      ease: "sine.inOut",
      onComplete: () => {
        defenseDown.remove();
      },
    }
  );
}
