export function pokemonDisplayAnimation(pokemonCard) {
  pokemonCard.classList.add("slide-in");
  setTimeout(() => {
    pokemonCard.classList.remove("slide-in");
  }, 500);
}
