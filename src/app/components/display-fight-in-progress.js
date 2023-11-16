import { domElementsFromSelectors } from './selectors.js'
    

export const displayFightInProgress = function displayFightInProgress() {

domElementsFromSelectors.titleContainer.style.display = 'none';

domElementsFromSelectors.title.style.display = 'none';

domElementsFromSelectors.menuButton.style.display = 'none';

domElementsFromSelectors.selectFirstPokemonButton.style.display = 'none';

domElementsFromSelectors.versusContainer.style.display = 'none';

domElementsFromSelectors.versus.style.display = 'none';

domElementsFromSelectors.selectSecondPokemonButton.style.display = 'none';

domElementsFromSelectors.pokemonRandomSelectionButton.style.display = 'none';

domElementsFromSelectors.fightButtonContainer.style.display = 'none';

domElementsFromSelectors.fightInProgress.style.display = 'flex';

domElementsFromSelectors.fightInProgress.textContent = 'Combat en cours';
};


export const hideFightInProgress = function hideFightInProgress() {

domElementsFromSelectors.titleContainer.style.display = 'flex';

domElementsFromSelectors.title.style.display = 'flex';

domElementsFromSelectors.menuButton.style.display = 'flex';

domElementsFromSelectors.selectFirstPokemonButton.style.display = 'flex';

domElementsFromSelectors.versusContainer.style.display = 'flex';

domElementsFromSelectors.versus.style.display = 'flex';

domElementsFromSelectors.selectSecondPokemonButton.style.display = 'flex';

domElementsFromSelectors.pokemonRandomSelectionButton.style.display = 'flex';

domElementsFromSelectors.fightButtonContainer.style.display = 'flex';

domElementsFromSelectors.fightInProgress.style.display = 'none';
};