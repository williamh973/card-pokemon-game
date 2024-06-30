import { playerInfos } from "../shared/player/player-infos.js";

export function updatePlayerScore() {
  playerInfos.firstPlayerScore += 1;
  playerInfos.firstPlayer.innerText = ` ${playerInfos.playerName} : ${playerInfos.firstPlayerScore} points`;
}
