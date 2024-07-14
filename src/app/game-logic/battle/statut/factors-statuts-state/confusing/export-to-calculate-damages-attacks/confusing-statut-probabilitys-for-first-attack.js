import {
  confusingStatut10PercentProbabililityForFirstAttack,
  confusingStatut20PercentProbabililityForFirstAttack,
  confusingStatut100PercentProbabililityForFirstAttack,
} from "../confusing-statut-probability-for-first-attack.js";

export function confusingStatutProbabilitysForFirstAttack(
  firstAttacker,
  secondAttacker
) {
  confusingStatut10PercentProbabililityForFirstAttack(
    firstAttacker,
    secondAttacker
  );

  confusingStatut20PercentProbabililityForFirstAttack(
    firstAttacker,
    secondAttacker
  );

  confusingStatut100PercentProbabililityForFirstAttack(
    firstAttacker,
    secondAttacker
  );
}
