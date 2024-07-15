import {
  confusingStatut10PercentProbabililityAttack,
  confusingStatut20PercentProbabililityAttack,
  confusingStatut100PercentProbabililityAttack,
} from "../confusing-statut-probability-for-first-attack.js";

export function confusingStatutProbabilitysAttack(
  secondAttacker,
  firstAttackerAttack
) {
  confusingStatut10PercentProbabililityAttack(
    secondAttacker,
    firstAttackerAttack
  );
  confusingStatut20PercentProbabililityAttack(
    secondAttacker,
    firstAttackerAttack
  );
  confusingStatut100PercentProbabililityAttack(
    secondAttacker,
    firstAttackerAttack
  );
}
