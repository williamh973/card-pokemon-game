import { battleVariable } from "../../../shared/battle/battle-variables.js";
import { battleSelectors } from "../../../shared/battle/battle-selectors.js";

export function updateNumberOfTurns() {
  battleVariable.numberOfTurns += 1;
  battleSelectors.numberOfTurnContainer.innerHTML = ` ${battleVariable.numberOfTurns}`;
}
