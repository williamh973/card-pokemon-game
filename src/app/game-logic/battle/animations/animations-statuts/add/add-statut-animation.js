import { pokemonCardList } from "../../../../../shared/pokemon/pokemon-card-list.js";
import { pokemonModelList } from "../../../../../shared/pokemon/pokemon-model-list.js";

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

  return new Promise((resolve) => {
    if (pokemonModel.primaryStatut !== "normal") {
      pokemonCard.classList.add(pokemonModel.primaryStatut);

      setTimeout(() => {
        pokemonCard.classList.remove(pokemonModel.primaryStatut);
        resolve();
      }, 2000);
    }

    if (pokemonModel.secondaryStatut.isConfused) {
      pokemonCard.classList.add("confused");

      setTimeout(() => {
        pokemonCard.classList.remove("confused");
        resolve();
      }, 2000);
    } else if (pokemonModel.secondaryStatut.isCursed) {
      pokemonCard.classList.add("cursed");

      setTimeout(() => {
        pokemonCard.classList.remove("cursed");
        resolve();
      }, 2000);
    } else {
      pokemonCard.classList.add("scared");

      setTimeout(() => {
        pokemonCard.classList.remove("scared");
        resolve();
      }, 2000);
    }
  });
}
