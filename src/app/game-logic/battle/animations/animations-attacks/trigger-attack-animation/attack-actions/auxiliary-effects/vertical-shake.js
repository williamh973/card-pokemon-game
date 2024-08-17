export function applyClassVerticalShake(pokemonCard) {
  pokemonCard.classList.add("vertical-shake");
  setTimeout(() => {
    pokemonCard.classList.remove("vertical-shake");
  }, 500);
}
