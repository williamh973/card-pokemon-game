import {
  confusingStatut10PercentProbabililityForFirstAttack,
  confusingStatut20PercentProbabililityForFirstAttack,
  confusingStatut100PercentProbabililityForFirstAttack,
} from "../confusing-statut-probability-for-first-attack.js";

export function confusingStatutProbabilitysForFirstAttack(
  firstAttacker,
  secondAttacker,
  isFirstAttackActive
) {
  confusingStatut10PercentProbabililityForFirstAttack(
    firstAttacker,
    secondAttacker,
    isFirstAttackActive
  );

  confusingStatut20PercentProbabililityForFirstAttack(
    firstAttacker,
    secondAttacker,
    isFirstAttackActive
  );

  confusingStatut100PercentProbabililityForFirstAttack(
    firstAttacker,
    secondAttacker,
    isFirstAttackActive
  );
}
