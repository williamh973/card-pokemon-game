import { pokemonCardList } from "../../../shared/pokemon/pokemon-card-list.js";

export function addParalyzedAnimation(pokemon) {
  pokemon = getPokemonCard(pokemon.name);
  const pokemonCardFound = pokemon;
  if (pokemonCardFound) {
    pokemonCardFound.classList.add("paralyzed");
  }
}

export function removeParalyzedAnimation(pokemon) {
  pokemon = getPokemonCard(pokemon.name);
  const pokemonCardFound = pokemon;
  if (pokemonCardFound) {
    pokemonCardFound.classList.remove("paralyzed");
  }
}

function getPokemonCard(pokemonName) {
  const pokemonCard = pokemonCardList[pokemonName];
  return pokemonCard;
}
