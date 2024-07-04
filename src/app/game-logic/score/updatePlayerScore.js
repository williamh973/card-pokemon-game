import { playerInfos } from "../../shared/player/player-infos.js";

export function updatePlayerScore() {
  playerInfos.playerScore += 1;
  playerInfos.playerContainer.innerText = ` ${playerInfos.playerName} : ${playerInfos.playerScore} points`;
}
