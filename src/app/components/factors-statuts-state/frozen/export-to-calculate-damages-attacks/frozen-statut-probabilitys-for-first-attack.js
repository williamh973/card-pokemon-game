import { frozenStatut10PercentProbabililityForFirstAttack } from "../frozen-statut-probability-for-first-attack.js";

export const frozenStatutProbabilitysForFirstAttack =
  function frozenStatutProbabilitysForFirstAttack(
    firstAttacker,
    secondAttacker,
    isFirstAttackActive,
    firstAttackType,
  ) {
    frozenStatut10PercentProbabililityForFirstAttack(
      firstAttacker,
      secondAttacker,
      isFirstAttackActive,
      firstAttackType,
    );
  };
