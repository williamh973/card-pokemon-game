let firstPlayerScore = 0;

const mainContainer = document.getElementById("main");

export const domElementInFormPlayer = {
  playerFormContainer: document.getElementById("playerForm-section"),
  playerFormsubmitButton: document.getElementById("playerForm-submitButton"),
  firstPlayer: document.getElementById("first-player"),
  secondPlayer: document.getElementById("second-player"),
  playerName: "",
  firstPlayerScore,
  playerNameInput: document.getElementById("playerForm-input"),
};

function initFormPlayerSubmitButton() {
  domElementInFormPlayer.playerFormsubmitButton.disabled = true;
}
initFormPlayerSubmitButton();

function isCheckPlayerFormInputCompleted() {
  domElementInFormPlayer.playerNameInput.addEventListener("input", () => {
    if (domElementInFormPlayer.playerNameInput.value === "") {
      domElementInFormPlayer.playerFormsubmitButton.disabled = true;
    } else {
      domElementInFormPlayer.playerName =
        domElementInFormPlayer.playerNameInput.value;
      domElementInFormPlayer.playerFormsubmitButton.disabled = false;
    }
  });
}
isCheckPlayerFormInputCompleted();

function isPlayerFormSubmitButtonClicked() {
  domElementInFormPlayer.playerFormsubmitButton.addEventListener(
    "click",
    (event) => {
      event.preventDefault();
      domElementInFormPlayer.firstPlayer.innerText = ` ${domElementInFormPlayer.playerName} : ${domElementInFormPlayer.firstPlayerScore} points`;
      domElementInFormPlayer.playerFormContainer.style.display = "none";
      mainContainer.style.display = "block";
    }
  );
}
isPlayerFormSubmitButtonClicked();
