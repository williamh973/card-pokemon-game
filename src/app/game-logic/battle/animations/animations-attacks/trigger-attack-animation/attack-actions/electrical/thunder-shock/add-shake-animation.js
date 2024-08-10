export function addShakeAnimation(pokemonCard) {
  pokemonCard.classList.add("shake");
  setTimeout(() => {
    pokemonCard.classList.remove("shake");
  }, 600);
}
