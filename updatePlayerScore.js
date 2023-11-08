import { domElementInFormPlayer } from './player-form-container-for-start.js';
import selectors from './main-game.js';


export const updatePlayerScore = function updatePlayerScore() {
  
  switch (selectors.selectSecondPokemonButton.value) {
    case 'pikachu':
      updateScore()
      break;
    case 'evoli':
      updateScore()
      break;
    case 'roucool':
      updateScore()
      break;
    case 'racaillou':
      updateScore()
      break;
  };
  
function updateScore() {
  
  domElementInFormPlayer.firstPlayerScore += 1;
  domElementInFormPlayer.firstPlayer.innerText = ` ${domElementInFormPlayer.playerNameInput.value} :  ${domElementInFormPlayer.firstPlayerScore} points`;
};

};