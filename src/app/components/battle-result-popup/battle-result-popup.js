import { battleSelectors } from "../../shared/battle/battle-selectors.js";

document.addEventListener("DOMContentLoaded", () => {
  fetch("./src/app/components//battle-result-popup/battle-result-popup.html")
    .then((response) => response.text())
    .then((data) => {
      battleSelectors.displayBattleResultContainer.innerHTML = data;
    })
    .catch((error) =>
      console.error("Error loading battle result container:", error)
    );
});
