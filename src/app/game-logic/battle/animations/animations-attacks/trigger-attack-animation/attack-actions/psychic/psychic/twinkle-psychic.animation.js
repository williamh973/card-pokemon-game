export function twinklePsychicAnimation(attackName, pokemonCard) {
  if (attackName && pokemonCard) {
    pokemonCard.classList.add("twinkle-psychic");

    setTimeout(() => {
      pokemonCard.classList.remove("twinkle-psychic");
    }, 5_000);
  }
}
