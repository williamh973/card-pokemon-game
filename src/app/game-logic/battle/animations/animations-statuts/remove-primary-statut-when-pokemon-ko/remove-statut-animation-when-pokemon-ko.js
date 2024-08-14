import {
  getPokemonCard,
  getPokemonModel,
} from "../add/get-pokemon-card-model.js";

export function removeStatutAnimationWhenPokemonKo() {
  const pokemonModel = getPokemonModel();
  const pokemonCard = getPokemonCard();

  switch (pokemonModel.primaryStatut) {
    case "paralyzed":
      pokemonCard.classList.remove("paralyzed");
      break;
    case "poisoned":
      pokemonCard.classList.remove("poisoned");
      break;
    case "asleep":
      pokemonCard.classList.remove("asleep");
      break;
    case "burning":
      pokemonCard.classList.remove("burning");
      break;
    case "frozen":
      pokemonCard.classList.remove("frozen");
      break;
    default:
      break;
  }
}
