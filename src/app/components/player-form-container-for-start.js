import { playerFormElements } from "./game-variables/player/player-form.js";
import { playerInfos } from "./game-variables/player/player-infos.js";

const mainContainer = document.getElementById("main");

function initFormPlayerSubmitButton() {
  playerFormElements.playerFormSubmitButton.disabled = true;
}
initFormPlayerSubmitButton();

playerFormElements.playerFormInput.addEventListener("input", () => {
  if (playerFormElements.playerFormInput.value === "") {
    playerFormElements.playerFormSubmitButton.disabled = true;
  } else {
    playerInfos.playerName = playerFormElements.playerFormInput.value;
    playerFormElements.playerFormSubmitButton.disabled = false;
  }
});

function isPlayerFormSubmitButtonClicked() {
  playerFormElements.playerFormSubmitButton.addEventListener(
    "click",
    (event) => {
      event.preventDefault();
      console.log("Form submitted");

      playerInfos.firstPlayer.innerText = ` ${playerInfos.playerName} : ${playerInfos.firstPlayerScore} points`;
      playerFormElements.playerFormSection.style.display = "none";
      mainContainer.style.display = "block";
    }
  );
}
isPlayerFormSubmitButtonClicked();
