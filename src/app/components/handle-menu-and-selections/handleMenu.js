import selectors from '../main-game.js';


export const handleMenu = function handleMenu(gameMod) {
  switch (gameMod) {
    case 'default':
      selectors.definiteFighTitle.style.display = 'none';
      selectors.randomFighTitle.style.display = 'none';
      selectors.selectFirstPokemonButton.style.display = 'none';
      selectors.versusContainer.style.display = 'none';
      selectors.selectSecondPokemonButton.style.display = 'none';
      selectors.pokemonRandomSelectionButton.style.display = 'none';
      selectors.definiteFightMod = false;
      selectors.randomFightMod = false;
      break;
    case 'definite-fight':
      selectors.definiteFighTitle.style.display = 'flex';
      selectors.randomFighTitle.style.display = 'none';
      selectors.selectFirstPokemonButton.style.display = 'flex';
      selectors.versusContainer.style.display = 'flex';
      selectors.selectSecondPokemonButton.style.display = 'flex';
      selectors.pokemonRandomSelectionButton.style.display = 'none';
      selectors.definiteFightMod = true;
      selectors.randomFightMod = false;
      break;
      
    case 'random-fight':
      selectors.definiteFighTitle.style.display = 'none';
      selectors.randomFighTitle.style.display = 'flex';
      selectors.selectFirstPokemonButton.style.display = 'flex';
      selectors.versusContainer.style.display = 'flex';
      selectors.pokemonRandomSelectionButton.style.display = 'flex';
      selectors.selectSecondPokemonButton.style.display = 'none';
      selectors.randomFightMod = true;
      selectors.definiteFightMod = false;
      break;
      
    case 'close-menu':
      selectors.definiteFighTitle.style.display = 'none';
      selectors.randomFighTitle.style.display = 'none';
      selectors.selectFirstPokemonButton.style.display = 'none';
      selectors.versusContainer.style.display = 'none';
      selectors.selectSecondPokemonButton.style.display = 'none';
      selectors.pokemonRandomSelectionButton.style.display = 'none';
      selectors.definiteFightMod = false;
      selectors.randomFightMod = false;
      break;
  }

}