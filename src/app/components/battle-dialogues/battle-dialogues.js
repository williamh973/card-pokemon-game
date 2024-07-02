import { battleSelectors } from "../../shared/battle/battle-selectors.js";

document.addEventListener("DOMContentLoaded", () => {
  fetch("./src/app/components/battle-dialogues/battle-dialogues.html")
    .then((response) => response.text())
    .then((data) => {
      battleSelectors.displayDialogueBattleContainer.innerHTML = data;
    })
    .catch((error) =>
      console.error("Error loading battle dialogue container:", error)
    );
});
