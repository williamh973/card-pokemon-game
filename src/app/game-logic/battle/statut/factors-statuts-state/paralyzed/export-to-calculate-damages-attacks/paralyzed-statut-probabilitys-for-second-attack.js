import {
  paralyzedStatut10PercentProbabililityForSecondAttack,
  paralyzedStatut30PercentProbabililityForSecondAttack,
  paralyzedStatut100PercentProbabililityForSecondAttack,
} from "../paralyzed-statut-probability-for-second-attack.js";

export const paralyzedStatutProbabilitysForSecondAttack =
  function paralyzedStatutProbabilitysForSecondAttack(
    firstAttacker,
    secondAttacker,
    isSecondAttackActive,
    secondAttackType,
    secondAttackerType
  ) {
    paralyzedStatut10PercentProbabililityForSecondAttack(
      firstAttacker,
      secondAttacker,
      isSecondAttackActive,
      secondAttackType,
      secondAttackerType
    );

    paralyzedStatut30PercentProbabililityForSecondAttack(
      firstAttacker,
      secondAttacker,
      isSecondAttackActive,
      secondAttackType,
      secondAttackerType
    );

    paralyzedStatut100PercentProbabililityForSecondAttack(
      firstAttacker,
      secondAttacker,
      isSecondAttackActive,
      secondAttackType,
      secondAttackerType
    );
  };
