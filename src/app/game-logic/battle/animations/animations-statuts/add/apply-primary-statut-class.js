import { getPokemonCard, getPokemonModel } from "./get-pokemon-card-model.js";

export async function applyPrimaryStatusAnimations(pokemon) {
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
  });
}
