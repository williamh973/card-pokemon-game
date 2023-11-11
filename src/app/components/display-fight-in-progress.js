import selectors from './main-game.js'
    

export const displayFightInProgress = function displayFightInProgress() {

selectors.titleContainer.style.display = 'none';

selectors.title.style.display = 'none';

selectors.menuButton.style.display = 'none';

selectors.selectFirstPokemonButton.style.display = 'none';

selectors.versusContainer.style.display = 'none';

selectors.versus.style.display = 'none';

selectors.selectSecondPokemonButton.style.display = 'none';

selectors.pokemonRandomSelectionButton.style.display = 'none';

selectors.fightButtonContainer.style.display = 'none';

selectors.fightInProgress.style.display = 'flex';

selectors.fightInProgress.textContent = 'Combat en cours';
};


export const hideFightInProgress = function hideFightInProgress() {

selectors.titleContainer.style.display = 'flex';

selectors.title.style.display = 'flex';

selectors.menuButton.style.display = 'flex';

selectors.selectFirstPokemonButton.style.display = 'flex';

selectors.versusContainer.style.display = 'flex';

selectors.versus.style.display = 'flex';

selectors.selectSecondPokemonButton.style.display = 'flex';

selectors.pokemonRandomSelectionButton.style.display = 'flex';

selectors.fightButtonContainer.style.display = 'flex';

selectors.fightInProgress.style.display = 'none';
};