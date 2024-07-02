export const battleSelectors = {
  displayBattleResultContainer: document.getElementById(
    "container-display-result"
  ),
  get displayBattleResult() {
    return document.getElementById("result");
  },
  displayDialogueBattleContainer: document.getElementById("dialogue-container"),
  get displayDialogue() {
    return document.getElementById("dialogue");
  },
  battleInProgress: document.getElementById("battle-in-progress"),
  startBattleButton: document.getElementById("start-battle-button"),
};
