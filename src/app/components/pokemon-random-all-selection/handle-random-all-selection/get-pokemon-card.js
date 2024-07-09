import { pokemonSelectors } from "../../../shared/header/pokemon-selectors.js";
import { pokemonCardList } from "../../../shared/pokemon/pokemon-card-list.js";
import { updateDisplayPokemonCard } from "./update-display-pokemon-card.js";

export function getPokemonCard() {
  const firstPokemonCard =
    pokemonCardList[pokemonSelectors.firstPokemonSelectionButton.value];
  const secondPokemonCard =
    pokemonCardList[pokemonSelectors.secondPokemonSelectionButton.value];

  updateDisplayPokemonCard(firstPokemonCard, secondPokemonCard);
}
