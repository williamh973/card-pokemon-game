export function brickShards(
  pokemonLocation,
  getTargetLocationCenterX,
  targetLocationCenterY
) {
  for (let i = 0; i < 15; i++) {
    const shard = document.createElement("div");

    const radius = 700;
    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * radius;
    const endX = getTargetLocationCenterX + distance * Math.cos(angle);
    const endY = targetLocationCenterY + distance * Math.sin(angle);

    shard.classList.add("brick-shards");
    pokemonLocation.appendChild(shard);

    gsap.fromTo(
      shard,
      {
        x: getTargetLocationCenterX,
        y: targetLocationCenterY,
        scale: 1,
        opacity: 1,
        ease: "power1.out",
      },
      {
        x: endX,
        y: endY,
        scale: 1,
        opacity: 1,
        filter: "blur(5px)",
        duration: 0.5,
        ease: "power1.out",
        onComplete: () => {
          shard.remove();
        },
      }
    );
  }
}
