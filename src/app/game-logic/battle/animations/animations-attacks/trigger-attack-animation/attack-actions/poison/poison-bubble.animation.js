export function createPoisonBubble(
  pokemonLocation,
  getTargetLocationCenterX,
  targetLocationCenterY
) {
  const poisonBubble = document.createElement("div");

  const radius = 250;
  const angle = Math.random() * 2 * Math.PI;
  const distance = Math.random() * radius;
  const endX = getTargetLocationCenterX + distance * Math.cos(angle);
  const endY = targetLocationCenterY + distance * Math.sin(angle);

  poisonBubble.classList.add("poison-bubble");
  pokemonLocation.appendChild(poisonBubble);

  gsap.fromTo(
    poisonBubble,
    {
      x: getTargetLocationCenterX,
      y: targetLocationCenterY,
      ease: "power1.out",
    },
    {
      x: endX,
      y: endY,
      duration: 1,
      ease: "power1.out",
      onComplete: () => {
        poisonBubble.remove();
      },
    }
  );
}
