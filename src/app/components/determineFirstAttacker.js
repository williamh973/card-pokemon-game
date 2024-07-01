import { pokemonModelList } from "../shared/pokemon/pokemon-model-list.js";
import { pokemonSelectors } from "../shared/header/pokemon-selectors.js";

export { firstAttacker, secondAttacker, determineFirstAttacker };

let firstAttacker;
let secondAttacker;

function getPokemonModel(pokemonName) {
  const model = pokemonModelList[pokemonName];
  return model;
}

function determineFirstAttacker() {
  firstAttacker = getPokemonModel(
    pokemonSelectors.selectFirstPokemonButton.value
  );
  secondAttacker = getPokemonModel(
    pokemonSelectors.selectSecondPokemonButton.value ||
      pokemonSelectors.selectRandomSelectionButton.value
  );

  if (firstAttacker.stats.speed < secondAttacker.stats.speed) {
    [firstAttacker, secondAttacker] = [secondAttacker, firstAttacker];
  }
}
