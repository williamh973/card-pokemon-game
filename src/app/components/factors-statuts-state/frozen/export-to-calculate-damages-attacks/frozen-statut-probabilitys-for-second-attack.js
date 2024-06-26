import { frozenStatut10PercentProbabililityForSecondAttack } from "../frozen-statut-probability-for-second-attack.js";

export const frozenStatutProbabilitysForSecondAttack =
  function frozenStatutProbabilitysForSecondAttack(
    firstAttacker,
    secondAttacker,
    isSecondAttackActive,
    secondAttackType,
  ) {
    frozenStatut10PercentProbabililityForSecondAttack(
      firstAttacker,
      secondAttacker,
      isSecondAttackActive,
      secondAttackType,
    );
  };
