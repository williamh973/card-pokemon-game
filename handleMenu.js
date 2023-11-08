import selectors from './main-game.js';


export const handleMenu = function handleMenu(gameMod) {
  switch (gameMod) {
    case 'definite-fight':
    selectors.selectFirstPokemonButton.style.display = 'flex';
    selectors.versusContainer.style.display = 'flex';
      selectors.selectSecondPokemonButton.style.display = 'flex';
      break;
      
    case 'random-fight':
    selectors.selectFirstPokemonButton.style.display = 'flex';
    selectors.versusContainer.style.display = 'flex';
    selectors.pokemonRandomSelectionButton.style.display = 'flex';
    selectors.selectSecondPokemonButton.style.display = 'none';
      break;
      
    case 'close-menu':
    selectors.selectFirstPokemonButton.style.display = 'none';
    selectors.versusContainer.style.display = 'none';
    selectors.selectSecondPokemonButton.style.display = 'none';
      break;
  }
  
}