import { updatePlayerScore } from "../score/updatePlayerScore.js";
import { pokemonCardList } from "../../shared/pokemon/pokemon-card-list.js";
import { updateComputerScore } from "../score/updateComputerScore.js";
import { pokemonVariables } from "../../shared/pokemon/pokemon-variables.js";
import { domElements } from "../../shared/dom/dom-elements.js";

export function handleScores() {
  function getPokemonCard() {
    const pokemonCard = pokemonCardList[pokemonVariables.pokemonKo];
    return pokemonCard;
  }

  if (domElements.pokemonLeftLocation.contains(getPokemonCard())) {
    updateComputerScore();
  } else {
    updatePlayerScore();
  }
}
