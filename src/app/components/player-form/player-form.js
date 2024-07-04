import { playerSelectors } from "../../shared/player/player-selectors.js";
import { playerInfos } from "../../shared/player/player-infos.js";
import { domElements } from "../../shared/dom/dom-elements.js";
import { battleSelectors } from "../../shared/battle/battle-selectors.js";
import { computerInfos } from "../../shared/computer/computer-infos.js";

document.addEventListener("DOMContentLoaded", () => {
  fetch("./src/app/components/player-form/player-form.html")
    .then((response) => response.text())
    .then((data) => {
      playerSelectors.playerFormContainer.innerHTML = data;
      initializePlayerForm();
      isPlayerFormSubmitButtonClicked();
    })
    .catch((error) => console.error("Error loading player form:", error));

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
  }

  function isPlayerFormSubmitButtonClicked() {
    playerSelectors.playerFormSubmitButton.addEventListener(
      "click",
      (event) => {
        event.preventDefault();
        playerInfos.playerContainer.innerText = ` ${playerInfos.playerName} : ${playerInfos.playerScore} points`;
        computerInfos.computerContainer.innerText = ` ${computerInfos.computerName} : ${computerInfos.computerScore} points`;
        playerSelectors.playerFormSection.style.display = "none";

        domElements.main.style.display = "block";
        battleSelectors.startBattleButton.disabled = true;
      }
    );
  }
});
