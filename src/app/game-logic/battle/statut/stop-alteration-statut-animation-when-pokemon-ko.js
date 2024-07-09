import { pokemonCardList } from "../../../shared/pokemon/pokemon-card-list.js";
import { pokemonModelList } from "../../../shared/pokemon/pokemon-model-list.js";
import { pokemonVariables } from "../../../shared/pokemon/pokemon-variables.js";

export function stopAlterationStatutAnimationWhenPokemonKo() {
  function getPokemonModel() {
    const findPokemonModel = pokemonModelList[pokemonVariables.pokemonKo];
    return findPokemonModel;
  }
  const pokemonModel = getPokemonModel();

  function getPokemonCard() {
    const findPokemonCard = pokemonCardList[pokemonVariables.pokemonKo];
    return findPokemonCard;
  }
  const pokemonCard = getPokemonCard();

  switch (pokemonModel.primaryStatut) {
    case "paralyzed":
      pokemonCard.classList.remove("paralyzed");
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
