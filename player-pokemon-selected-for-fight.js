let isPlayerSelectedThisPokemon = false;

const containerFullPopupPokemonSelected = document.getElementById('container-display-pokemon-selected');
    
const displayPopupPokemonSelected = document.getElementById('pokemon-selected');

export const pokemonSelected = function pokemonSelected(pokemon) {
  
    containerFullPopupPokemonSelected.style.display = 'flex';

switch (pokemon) {
  case 'pikachu':
   displayPopupPokemonSelected.innerText = 'Pickachu selectionné !';
   isPlayerSelectedThisPokemon = true;
    break;
  case 'evoli':
   displayPopupPokemonSelected.innerText = 'Evoli selectionné !';
    break;
  case 'roucool':
   displayPopupPokemonSelected.innerText = 'Roucool selectionné !';
   isPlayerSelectedThisPokemon = true;
    break;
  case 'racaillou':
   displayPopupPokemonSelected.innerText = 'Racaillou selectionné !';
   isPlayerSelectedThisPokemon = true;
    break;
  case 'insecateur':
    displayPopupPokemonSelected.innerText = 'Insécateur selectionné !';
    isPlayerSelectedThisPokemon = true;
  break;
};

  setTimeout(function() {
    containerFullPopupPokemonSelected.style.display = 'none';
  }, 1500);
};

