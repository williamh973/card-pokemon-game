import { domElements } from "../shared/dom/dom-elements.js";
import { pokemonModelList } from "../shared/pokemon/pokemon-model-list.js";

export { firstAttacker, secondAttacker, determineFirstAttacker };

let firstAttacker;
let secondAttacker;

function getPokemonModel(pokemonName) {
  const model = pokemonModelList[pokemonName];
  return model;
}

function determineFirstAttacker() {
  firstAttacker = getPokemonModel(domElements.selectFirstPokemonButton.value);
  secondAttacker = getPokemonModel(
    domElements.selectSecondPokemonButton.value ||
      domElements.pokemonRandomSelectionButton.value
  );

  if (firstAttacker.stats.speed < secondAttacker.stats.speed) {
    [firstAttacker, secondAttacker] = [secondAttacker, firstAttacker];
  }
}
