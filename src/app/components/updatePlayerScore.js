import { playerInfos } from "./game-variables/player/player-infos.js";

export function updatePlayerScore() {
  playerInfos.firstPlayerScore += 1;
  playerInfos.firstPlayer.innerText = ` ${playerInfos.playerName} : ${playerInfos.firstPlayerScore} points`;
}
