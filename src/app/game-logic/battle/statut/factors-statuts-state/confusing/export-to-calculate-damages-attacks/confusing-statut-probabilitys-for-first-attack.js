import {
  confusingStatut10PercentProbabililityForFirstAttack,
  confusingStatut20PercentProbabililityForFirstAttack,
  confusingStatut100PercentProbabililityForFirstAttack,
} from "../confusing-statut-probability-for-first-attack.js";

export const confusingStatutProbabilitysForFirstAttack =
  function confusingStatutProbabilitysForFirstAttack(
    firstAttacker,
    secondAttacker,
    isFirstAttackActive,
    firstAttackType
  ) {
    confusingStatut10PercentProbabililityForFirstAttack(
      firstAttacker,
      secondAttacker,
      isFirstAttackActive,
      firstAttackType
    );

    confusingStatut20PercentProbabililityForFirstAttack(
      firstAttacker,
      secondAttacker,
      isFirstAttackActive,
      firstAttackType
    );

    confusingStatut100PercentProbabililityForFirstAttack(
      firstAttacker,
      secondAttacker,
      isFirstAttackActive,
      firstAttackType
    );
  };
