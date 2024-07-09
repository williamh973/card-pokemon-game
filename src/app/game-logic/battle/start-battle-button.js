import { pokemonVariables } from "../../shared/pokemon/pokemon-variables.js";
import { battleSelectors } from "../../shared/battle/battle-selectors.js";
import { pokemonSelectors } from "../../shared/header/pokemon-selectors.js";
import { pokemonModelList } from "../../shared/pokemon/pokemon-model-list.js";

export function activateStartBattleButton() {
  function checkPokemonHpGreaterThanZero(
    firstPokemonModel,
    secondPokemonModel
  ) {
    if (
      !firstPokemonModel ||
      firstPokemonModel.stats.hp <= 0 ||
      (secondPokemonModel && secondPokemonModel.stats.hp <= 0)
    ) {
      battleSelectors.startBattleButton.disabled = true;
    } else {
      battleSelectors.startBattleButton.disabled = false;
    }
  }

  function checkPokemonsSelected(firstPokemonModel, secondPokemonModel) {
    if (
      pokemonVariables.isFirstPokemonSelected &&
      (pokemonVariables.isSecondPokemonSelected ||
        pokemonVariables.isRandomPokemonSelected)
    ) {
      checkPokemonHpGreaterThanZero(firstPokemonModel, secondPokemonModel);
    } else {
      battleSelectors.startBattleButton.disabled = true;
    }
  }

  function onGetPokemonModel() {
    const firstPokemonModel =
      pokemonModelList[pokemonSelectors.firstPokemonSelectionButton.value];
    let secondPokemonModel = null;

    if (pokemonVariables.isSecondPokemonSelected) {
      secondPokemonModel =
        pokemonModelList[pokemonSelectors.secondPokemonSelectionButton.value];
    } else if (pokemonVariables.isRandomPokemonSelected) {
      secondPokemonModel =
        pokemonModelList[pokemonSelectors.randomAdversarySelectionButton.value];
    }

    checkPokemonsSelected(firstPokemonModel, secondPokemonModel);
  }

  onGetPokemonModel();
}
