import { pokemonCardList } from "../../../../../shared/pokemon/pokemon-card-list.js";
import { pokemonModelList } from "../../../../../shared/pokemon/pokemon-model-list.js";

export async function getPokemonCard(pokemonName) {
  const pokemonCard = pokemonCardList[pokemonName];
  return pokemonCard;
}

export async function getPokemonModel(pokemonName) {
  const pokemonModel = pokemonModelList[pokemonName];
  return pokemonModel;
}
