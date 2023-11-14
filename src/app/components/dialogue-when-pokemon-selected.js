const containerFullPopupPokemonSelected = document.getElementById('container-display-pokemon-selected');    
const displayPopupPokemonSelected = document.getElementById('pokemon-selected');


export const pokemonSelected = function pokemonSelected(pokemon) {
  
    containerFullPopupPokemonSelected.style.display = 'flex';

switch (pokemon) {
  case 'Pikachu':
   displayPopupPokemonSelected.innerText = 'Pickachu selectionné !';
    break;
  case 'Évoli':
   displayPopupPokemonSelected.innerText = 'Évoli selectionné !';
    break;
  case 'Roucool':
   displayPopupPokemonSelected.innerText = 'Roucool selectionné !';
    break;
  case 'Racaillou':
   displayPopupPokemonSelected.innerText = 'Racaillou selectionné !';
    break;
  case 'Insécateur':
    displayPopupPokemonSelected.innerText = 'Insécateur selectionné !';
  break;
  case 'Sabelette':
    displayPopupPokemonSelected.innerText = 'Sabelette selectionné !';
  break;
  case 'Mewtwo':
    displayPopupPokemonSelected.innerText = 'Mewtwo selectionné !';
  break;
};

  setTimeout(function() {
    containerFullPopupPokemonSelected.style.display = 'none';
  }, 1500);
};

