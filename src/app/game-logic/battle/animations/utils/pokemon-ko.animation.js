import { pokemonCardList } from "../../../../shared/pokemon/pokemon-card-list.js";
import { pokemonVariables } from "../../../../shared/pokemon/pokemon-variables.js";

export function animationWhenPokemonKo() {
  const pokemonCard = pokemonCardList[pokemonVariables.pokemonKo];
  pokemonCard.classList.add("slide-out");

  pokemonCard.addEventListener("animationend", () => {
    pokemonCard.remove();
  });
}
