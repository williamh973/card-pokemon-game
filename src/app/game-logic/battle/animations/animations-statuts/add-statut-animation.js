import { pokemonCardList } from "../../../../shared/pokemon/pokemon-card-list.js";
import { pokemonModelList } from "../../../../shared/pokemon/pokemon-model-list.js";

function getPokemonCard(pokemonName) {
  const pokemonCard = pokemonCardList[pokemonName];
  return pokemonCard;
}

function getPokemonModel(pokemonName) {
  const pokemonModel = pokemonModelList[pokemonName];
  return pokemonModel;
}

export function addStatusAnimations(pokemon) {
  const pokemonCard = getPokemonCard(pokemon.name);
  const pokemonModel = getPokemonModel(pokemon.name);

  if (pokemonCard && pokemonModel) {
    pokemonCard.classList.add(pokemonModel.primaryStatut);
  }
}
