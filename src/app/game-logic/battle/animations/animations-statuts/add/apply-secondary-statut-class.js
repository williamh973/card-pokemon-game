import { getPokemonCard, getPokemonModel } from "./get-pokemon-card-model.js";

export async function applySecondaryStatusAnimations(pokemon) {
  const pokemonCard = await getPokemonCard(pokemon.name);
  const pokemonModel = await getPokemonModel(pokemon.name);

  if (pokemonModel.secondaryStatut.isConfused) {
    pokemonCard.classList.add("confused");

    await new Promise((resolve) => {
      setTimeout(() => {
        pokemonCard.classList.remove("confused");
        resolve();
      }, 2000);
    });
  } else if (pokemonModel.secondaryStatut.isCursed) {
    pokemonCard.classList.add("cursed");

    await new Promise((resolve) => {
      setTimeout(() => {
        pokemonCard.classList.remove("cursed");
        resolve();
      }, 2000);
    });
  } else {
    pokemonCard.classList.add("scared");

    await new Promise((resolve) => {
      setTimeout(() => {
        pokemonCard.classList.remove("scared");
        resolve();
      }, 2000);
    });
  }
}
