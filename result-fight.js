import { firstAttacker, secondAttacker, determineFirstAttacker } from './determineFirstAttacker.js';

import selectors from './main-game.js'


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
      selectors.fightButtonContainer.style.display = 'none';
      
        if (selectors.definiteFightMod) {
          selectors.selectFirstPokemonButton.style.display = 'flex';
          selectors.selectSecondPokemonButton.style.display = 'flex';
          selectors.pokemonRandomSelectionButton.style.display = 'none';
        } else if (selectors.randomFightMod) {
          selectors.selectFirstPokemonButton.style.display = 'flex';
          selectors.pokemonRandomSelectionButton.style.display = 'flex';
          selectors.selectSecondPokemonButton.style.display = 'none';
        }

    }, 3000);
  };