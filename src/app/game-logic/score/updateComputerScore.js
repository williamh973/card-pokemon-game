import { computerInfos } from "../../shared/computer/computer-infos.js";

export function updateComputerScore() {
  computerInfos.computerScore += 1;
  computerInfos.computerContainer.innerText = ` ${computerInfos.computerName} : ${computerInfos.computerScore} points`;
}
