import { pokemonCardList } from "../../../../../shared/pokemon/pokemon-card-list.js";
import { pokemonModelList } from "../../../../../shared/pokemon/pokemon-model-list.js";
import { pokemonVariables } from "../../../../../shared/pokemon/pokemon-variables.js";

function getPokemonModel() {
  const findPokemonModel = pokemonModelList[pokemonVariables.pokemonKo];
  return findPokemonModel;
}

function getPokemonCard() {
  const findPokemonCard = pokemonCardList[pokemonVariables.pokemonKo];
  return findPokemonCard;
}

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
