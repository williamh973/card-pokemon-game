import { playerFormElements } from "../../shared/player/player-form.js";
import { playerInfos } from "../../shared/player/player-infos.js";
import { domElements } from "../../shared/dom/dom-elements.js";
import { battleSelectors } from "../../shared/battle/battle-selectors.js";

document.addEventListener("DOMContentLoaded", () => {
  const playerFormContainer = document.getElementById("playerForm-container");

  fetch("./src/app/components/player-form/player-form.html")
    .then((response) => response.text())
    .then((data) => {
      playerFormContainer.innerHTML = data;
      initializePlayerFormElements();
      initializePlayerInfos();
      initializeMainGameContainer();
      initializePlayerForm();
    })
    .catch((error) => console.error("Error loading player form:", error));

  function initializePlayerFormElements() {
    playerFormElements.playerFormSection =
      document.getElementById("playerForm-section");
    playerFormElements.playerFormInput =
      document.getElementById("playerForm-input");
    playerFormElements.playerFormSubmitButton = document.getElementById(
      "playerForm-submitButton"
    );
  }

  function initializePlayerInfos() {
    playerInfos.firstPlayer = document.getElementById("player-info-container");
    playerInfos.playerName = "";
    playerInfos.firstPlayerScore = 0;
  }

  function initializeMainGameContainer() {
    domElements.main = document.getElementById("main");
  }

  function initializePlayerForm() {
    playerFormElements.playerFormSubmitButton.disabled = true;

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
          playerInfos.firstPlayer.innerText = ` ${playerInfos.playerName} : ${playerInfos.firstPlayerScore} points`;
          playerFormElements.playerFormSection.style.display = "none";
          domElements.main.style.display = "block";
          battleSelectors.startBattleButton.disabled = true;
        }
      );
    }
    isPlayerFormSubmitButtonClicked();
  }
});
