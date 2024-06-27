import { domElementsFromSelectors } from "../../shared/game-variables/dom/dom-elements.js";

export function handleMenu(gameMod) {
  switch (gameMod) {
    case "default":
      domElementsFromSelectors.definiteFighTitle.style.display = "none";
      domElementsFromSelectors.randomFighTitle.style.display = "none";
      domElementsFromSelectors.selectFirstPokemonButton.style.display = "none";
      domElementsFromSelectors.versusContainer.style.display = "none";
      domElementsFromSelectors.selectSecondPokemonButton.style.display = "none";
      domElementsFromSelectors.pokemonRandomSelectionButton.style.display =
        "none";
      domElementsFromSelectors.definiteFightMod = false;
      domElementsFromSelectors.randomFightMod = false;
      break;
    case "definite-fight":
      domElementsFromSelectors.definiteFighTitle.style.display = "flex";
      domElementsFromSelectors.randomFighTitle.style.display = "none";
      domElementsFromSelectors.selectFirstPokemonButton.style.display = "flex";
      domElementsFromSelectors.versusContainer.style.display = "flex";
      domElementsFromSelectors.selectSecondPokemonButton.style.display = "flex";
      domElementsFromSelectors.pokemonRandomSelectionButton.style.display =
        "none";
      domElementsFromSelectors.definiteFightMod = true;
      domElementsFromSelectors.randomFightMod = false;
      break;

    case "random-fight":
      domElementsFromSelectors.definiteFighTitle.style.display = "none";
      domElementsFromSelectors.randomFighTitle.style.display = "flex";
      domElementsFromSelectors.selectFirstPokemonButton.style.display = "flex";
      domElementsFromSelectors.versusContainer.style.display = "flex";
      domElementsFromSelectors.pokemonRandomSelectionButton.style.display =
        "flex";
      domElementsFromSelectors.selectSecondPokemonButton.style.display = "none";
      domElementsFromSelectors.randomFightMod = true;
      domElementsFromSelectors.definiteFightMod = false;
      break;

    case "close-menu":
      domElementsFromSelectors.definiteFighTitle.style.display = "none";
      domElementsFromSelectors.randomFighTitle.style.display = "none";
      domElementsFromSelectors.selectFirstPokemonButton.style.display = "none";
      domElementsFromSelectors.versusContainer.style.display = "none";
      domElementsFromSelectors.selectSecondPokemonButton.style.display = "none";
      domElementsFromSelectors.pokemonRandomSelectionButton.style.display =
        "none";
      domElementsFromSelectors.definiteFightMod = false;
      domElementsFromSelectors.randomFightMod = false;
      break;
  }
}
