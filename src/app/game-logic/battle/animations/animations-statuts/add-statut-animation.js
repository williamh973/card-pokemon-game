import { pokemonCardList } from "../../../../shared/pokemon/pokemon-card-list.js";
import { pokemonModelList } from "../../../../shared/pokemon/pokemon-model-list.js";

export function addStatusAnimations(pokemon) {
  const pokemonCard = getPokemonCard(pokemon.name);
  const pokemonModel = getPokemonModel(pokemon.name);

  if (pokemonCard) {
    pokemonCard.classList.add(pokemonModel.primaryStatut);
  }
}

function getPokemonCard(pokemonName) {
  const pokemonCard = pokemonCardList[pokemonName];
  return pokemonCard;
}

function getPokemonModel(pokemonName) {
  const pokemonModel = pokemonModelList[pokemonName];
  return pokemonModel;
}
