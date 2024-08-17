export function applyClassHorizontalShake(pokemonCard) {
  pokemonCard.classList.add("horizontal-shake");
  setTimeout(() => {
    pokemonCard.classList.remove("horizontal-shake");
  }, 500);
}
