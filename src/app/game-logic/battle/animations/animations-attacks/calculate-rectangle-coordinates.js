export function calculateRectangleCoordinates(
  firstRect,
  secondRect,
  randomRect
) {
  const startX = firstRect.left + firstRect.width / 2;
  const startY = firstRect.top + firstRect.height / 2;

  let endX, endY;

  if (secondRect) {
    endX = secondRect.left + secondRect.width / 2;
    endY = secondRect.top + secondRect.height / 2;
  } else if (randomRect) {
    endX = randomRect.left + randomRect.width / 2;
    endY = randomRect.top + randomRect.height / 2;
  } else {
    console.error("No target Pokémon card found.");
    return null;
  }

  return { startX, startY, endX, endY };
}
