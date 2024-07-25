export function getCardRectangles(
  firstPokemonCardId,
  secondPokemonCardId,
  randomPokemonCardId
) {
  const firstPokemonCard = document.getElementById(firstPokemonCardId);
  const secondPokemonCard = document.getElementById(secondPokemonCardId);
  const randomPokemonCard = document.getElementById(randomPokemonCardId);

  if (!firstPokemonCard) {
    console.error("First Pokémon card not found.");
    return null;
  }

  const firstRect = firstPokemonCard.getBoundingClientRect();
  let secondRect = null;
  let randomRect = null;

  if (secondPokemonCard) {
    secondRect = secondPokemonCard.getBoundingClientRect();
  } else {
    console.warn("Second Pokémon card not found.");
  }

  if (randomPokemonCard) {
    randomRect = randomPokemonCard.getBoundingClientRect();
  } else {
    // console.warn("Random Pokémon card not found.");
  }

  return {
    firstRect,
    secondRect,
    randomRect,
  };
}
