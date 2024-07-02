import { playerSelectors } from "../../shared/player/player-selectors.js";
import { playerInfos } from "../../shared/player/player-infos.js";
import { domElements } from "../../shared/dom/dom-elements.js";
import { battleSelectors } from "../../shared/battle/battle-selectors.js";

document.addEventListener("DOMContentLoaded", () => {
  fetch("./src/app/components/player-form/player-form.html")
    .then((response) => response.text())
    .then((data) => {
      playerSelectors.playerFormContainer.innerHTML = data;
      initializeplayerSelectors();
      initializePlayerInfos();
      initializeMainGameContainer();
      initializePlayerForm();
    })
    .catch((error) => console.error("Error loading player form:", error));

  function initializeplayerSelectors() {
    playerSelectors.playerFormSection =
      document.getElementById("playerForm-section");
    playerSelectors.playerFormInput =
      document.getElementById("playerForm-input");
    playerSelectors.playerFormSubmitButton = document.getElementById(
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
    playerSelectors.playerFormSubmitButton.disabled = true;

    playerSelectors.playerFormInput.addEventListener("input", () => {
      if (playerSelectors.playerFormInput.value === "") {
        playerSelectors.playerFormSubmitButton.disabled = true;
      } else {
        playerInfos.playerName = playerSelectors.playerFormInput.value;
        playerSelectors.playerFormSubmitButton.disabled = false;
      }
    });

    function isPlayerFormSubmitButtonClicked() {
      playerSelectors.playerFormSubmitButton.addEventListener(
        "click",
        (event) => {
          event.preventDefault();
          playerInfos.firstPlayer.innerText = ` ${playerInfos.playerName} : ${playerInfos.firstPlayerScore} points`;
          playerSelectors.playerFormSection.style.display = "none";
          domElements.main.style.display = "block";
          battleSelectors.startBattleButton.disabled = true;
        }
      );
    }
    isPlayerFormSubmitButtonClicked();
  }
});
