import { domElements } from "../../../shared/dom/dom-elements.js";
import { pokemonSelectors } from "../../../shared/header/pokemon-selectors.js";
import { menuSelectors } from "../../../shared/header/menu-selectors.js";

export function handleMenu(gameMod) {
  const closedMenu = () => {
    domElements.isDefiniteModActived = false;
    domElements.isRandomAdversaryModActivated = false;
    domElements.isRandomAllModActivated = false;
    domElements.definiteModTitle.style.display = "none";
    domElements.randomAdversaryModTitle.style.display = "none";
    domElements.randomAllModTitle.style.display = "none";
    pokemonSelectors.firstPokemonSelectionButton.style.display = "none";
    menuSelectors.versus.style.display = "none";
    pokemonSelectors.secondPokemonSelectionButton.style.display = "none";
    pokemonSelectors.randomAdversarySelectionButton.style.display = "none";
  };

  switch (gameMod) {
    case "default":
      closedMenu();
      break;
    case "definite-mod":
      domElements.isDefiniteModActived = true;
      domElements.isRandomAdversaryModActivated = false;
      domElements.isRandomAllModActivated = false;
      domElements.definiteModTitle.style.display = "flex";
      domElements.randomAdversaryModTitle.style.display = "none";
      domElements.randomAllModTitle.style.display = "none";
      pokemonSelectors.firstPokemonSelectionButton.style.display = "flex";
      menuSelectors.versus.style.display = "flex";
      pokemonSelectors.secondPokemonSelectionButton.style.display = "flex";
      pokemonSelectors.randomAdversarySelectionButton.style.display = "none";
      break;
    case "random-adversary-mod":
      domElements.isRandomAdversaryModActivated = true;
      domElements.isRandomAllModActivated = false;
      domElements.isDefiniteModActived = false;
      domElements.definiteModTitle.style.display = "none";
      domElements.randomAdversaryModTitle.style.display = "flex";
      domElements.randomAllModTitle.style.display = "none";
      pokemonSelectors.firstPokemonSelectionButton.style.display = "flex";
      menuSelectors.versus.style.display = "flex";
      pokemonSelectors.secondPokemonSelectionButton.style.display = "none";
      pokemonSelectors.secondPokemonSelectionButton.value = "none";
      pokemonSelectors.randomAdversarySelectionButton.style.display = "flex";
      pokemonSelectors.randomAdversarySelectionButton.disabled = true;
      break;
    case "random-all-mod":
      domElements.isRandomAllModActivated = true;
      domElements.isRandomAdversaryModActivated = false;
      domElements.isDefiniteModActived = false;
      domElements.definiteModTitle.style.display = "none";
      domElements.randomAdversaryModTitle.style.display = "none";
      domElements.randomAllModTitle.style.display = "flex";
      menuSelectors.versus.style.display = "none";
      pokemonSelectors.randomAllSelectionButton.style.display = "flex";
      pokemonSelectors.randomAdversarySelectionButton.style.display = "none";
      pokemonSelectors.randomAdversarySelectionButton.value = "none";
      pokemonSelectors.firstPokemonSelectionButton.style.display = "none";
      pokemonSelectors.firstPokemonSelectionButton.value = "none";
      pokemonSelectors.secondPokemonSelectionButton.style.display = "none";
      pokemonSelectors.secondPokemonSelectionButton.value = "none";
      break;
    case "close-menu":
      closedMenu();
      break;
  }
}
