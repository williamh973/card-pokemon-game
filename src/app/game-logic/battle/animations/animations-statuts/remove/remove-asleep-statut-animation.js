import { pokemonCardList } from "../../../../../shared/pokemon/pokemon-card-list.js";

function getPokemonCard(pokemonName) {
  const findPokemonCard = pokemonCardList[pokemonName];
  return findPokemonCard;
}

export function removeAsleepStatutAnimation(pokemon) {
  const pokemonCard = getPokemonCard(pokemon.name);
  console.log(pokemonCard);
  pokemonCard.classList.remove("asleep");
}
