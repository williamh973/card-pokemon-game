import { pokemonCardList } from "../../../../shared/pokemon/pokemon-card-list.js";
import { pokemonModelList } from "../../../../shared/pokemon/pokemon-model-list.js";

async function getPokemonCard(pokemonName) {
  const pokemonCard = pokemonCardList[pokemonName];
  return pokemonCard;
}

async function getPokemonModel(pokemonName) {
  const pokemonModel = pokemonModelList[pokemonName];
  return pokemonModel;
}

export async function addStatusAnimations(pokemon) {
  const pokemonCard = await getPokemonCard(pokemon.name);
  const pokemonModel = await getPokemonModel(pokemon.name);

  if (pokemonCard && pokemonModel) {
    return new Promise((resolve) => {
      pokemonCard.classList.add(pokemonModel.primaryStatut);

      setTimeout(() => {
        pokemonCard.classList.remove(pokemonModel.primaryStatut);
        resolve();
      }, 2000);
    });
  }
}
