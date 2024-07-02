export const battleSelectors = {
  get displayBattleResult() {
    return document.getElementById("result");
  },
  displayDialogueBattleContainer: document.getElementById("dialogue-container"),
  battleInProgress: document.getElementById("battle-in-progress"),
  startBattleButton: document.getElementById("start-battle-button"),
  displayDialogue: document.getElementById("dialogue"),
  displayBattleResultContainer: document.getElementById(
    "container-display-result"
  ),
};
