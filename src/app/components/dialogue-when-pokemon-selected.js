const containerFullPopupPokemonSelected = document.getElementById(
  "container-display-pokemon-selected",
);
const displayPopupPokemonSelected = document.getElementById("pokemon-selected");

export const pokemonSelected = function pokemonSelected(pokemon) {
  containerFullPopupPokemonSelected.style.display = "flex";

  switch (pokemon) {
    case "Spectrum":
      displayPopupPokemonSelected.innerText = "Spectrum sélectionné !";
      break;
    case "Ectoplasma":
      displayPopupPokemonSelected.innerText = "Ectoplasma sélectionné !";
      break;
    case "Fantominus":
      displayPopupPokemonSelected.innerText = "Fantominus sélectionné !";
      break;
    case "Crustabri":
      displayPopupPokemonSelected.innerText = "Crustabri sélectionné !";
      break;
    case "Pikachu":
      displayPopupPokemonSelected.innerText = "Pickachu sélectionné !";
      break;
    case "Évoli":
      displayPopupPokemonSelected.innerText = "Évoli sélectionné !";
      break;
    case "Roucool":
      displayPopupPokemonSelected.innerText = "Roucool sélectionné !";
      break;
    case "Racaillou":
      displayPopupPokemonSelected.innerText = "Racaillou sélectionné !";
      break;
    case "Insécateur":
      displayPopupPokemonSelected.innerText = "Insécateur sélectionné !";
      break;
    case "Sabelette":
      displayPopupPokemonSelected.innerText = "Sabelette sélectionné !";
      break;
    case "Mewtwo":
      displayPopupPokemonSelected.innerText = "Mewtwo sélectionné !";
      break;
    case "Scarabrute":
      displayPopupPokemonSelected.innerText = "Scarabrute sélectionné !";
      break;
    case "Krabboss":
      displayPopupPokemonSelected.innerText = "Krabboss sélectionné !";
      break;
    case "Salamèche":
      displayPopupPokemonSelected.innerText = "Salamèche sélectionné !";
      break;
    case "Nidoran♂":
      displayPopupPokemonSelected.innerText = "Nidoran♂ sélectionné !";
      break;
  }

  setTimeout(function () {
    containerFullPopupPokemonSelected.style.display = "none";
  }, 1500);
};
