import { firstAttacker, secondAttacker } from './determineFirstAttacker.js';

import { domElementsFromSelectors } from './dom-elements.js'


const containerFullPopupResultFight = document.getElementById('container-display-result');
    
const displayResult = document.getElementById('result');
    
    
export const openDisplayResult = function openDisplayResult() {
  
  containerFullPopupResultFight.style.display = 'flex';

    if (firstAttacker.stats.hp <= 0) {
        displayResult.textContent = `${firstAttacker.name} est KO !`
    } else if (secondAttacker.stats.hp <= 0) {
        displayResult.textContent = `${secondAttacker.name} est KO !`
    }
       
    setTimeout(function() {
      containerFullPopupResultFight.style.display = 'none';
      domElementsFromSelectors.fightButtonContainer.style.display = 'none';
      
        if (domElementsFromSelectors.definiteFightMod) {
          domElementsFromSelectors.selectFirstPokemonButton.style.display = 'flex';
          domElementsFromSelectors.selectSecondPokemonButton.style.display = 'flex';
          domElementsFromSelectors.pokemonRandomSelectionButton.style.display = 'none';
        } else if (domElementsFromSelectors.randomFightMod) {
          domElementsFromSelectors.selectFirstPokemonButton.style.display = 'flex';
          domElementsFromSelectors.pokemonRandomSelectionButton.style.display = 'flex';
          domElementsFromSelectors.selectSecondPokemonButton.style.display = 'none';
        }

    }, 3000);
  };