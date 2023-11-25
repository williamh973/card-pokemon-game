import { domElementInFormPlayer } from './player-form-container-for-start.js';



export const updatePlayerScore = function updatePlayerScore() {
  
  domElementInFormPlayer.firstPlayerScore += 1;
  domElementInFormPlayer.firstPlayer.innerText =
   ` ${domElementInFormPlayer.playerNameInput.value} : 
   ${domElementInFormPlayer.firstPlayerScore} points`;


};