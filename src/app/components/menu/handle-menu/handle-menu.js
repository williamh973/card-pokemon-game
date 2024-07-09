import { domElements } from "../../../shared/dom/dom-elements.js";
import { pokemonSelectors } from "../../../shared/header/pokemon-selectors.js";
import { menuSelectors } from "../../../shared/header/menu-selectors.js";

export function handleMenu(gameMod) {
  const closedMenu = () => {
    domElements.isDefiniteModActived = false;
    domElements.isRandomModActived = false;
    domElements.definiteModTitle.style.display = "none";
    domElements.randomModTitle.style.display = "none";
    pokemonSelectors.selectFirstPokemonButton.style.display = "none";
    menuSelectors.versus.style.display = "none";
    pokemonSelectors.selectSecondPokemonButton.style.display = "none";
    pokemonSelectors.selectRandomSelectionButton.style.display = "none";
  };

  switch (gameMod) {
    case "default":
      closedMenu();
      break;
    case "definite-mod":
      domElements.isDefiniteModActived = true;
      domElements.isRandomModActived = false;
      domElements.definiteModTitle.style.display = "flex";
      domElements.randomModTitle.style.display = "none";
      pokemonSelectors.selectFirstPokemonButton.style.display = "flex";
      menuSelectors.versus.style.display = "flex";
      pokemonSelectors.selectSecondPokemonButton.style.display = "flex";
      pokemonSelectors.selectRandomSelectionButton.style.display = "none";
      break;
    case "random-mod":
      domElements.isRandomModActived = true;
      domElements.isDefiniteModActived = false;
      domElements.definiteModTitle.style.display = "none";
      domElements.randomModTitle.style.display = "flex";
      pokemonSelectors.selectFirstPokemonButton.style.display = "flex";
      menuSelectors.versus.style.display = "flex";
      pokemonSelectors.selectSecondPokemonButton.style.display = "none";
      pokemonSelectors.selectSecondPokemonButton.value = "none";
      pokemonSelectors.selectRandomSelectionButton.style.display = "flex";
      pokemonSelectors.selectRandomSelectionButton.disabled = true;
      break;
    case "close-menu":
      closedMenu();
      break;
  }
}
