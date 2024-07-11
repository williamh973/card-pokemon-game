import {
  asleepStatut30PercentProbabililityForSecondAttack,
  asleepStatut100PercentProbabililityForSecondAttack,
} from "../asleep-statut-probability-for-second-attack.js";

export const asleepStatutProbabilitysForSecondAttack =
  function asleepStatutProbabilitysForSecondAttack(
    firstAttacker,
    secondAttacker,
    isSecondAttackActive,
    secondAttackType
  ) {
    asleepStatut30PercentProbabililityForSecondAttack(
      firstAttacker,
      secondAttacker,
      isSecondAttackActive,
      secondAttackType
    );

    asleepStatut100PercentProbabililityForSecondAttack(
      firstAttacker,
      secondAttacker,
      isSecondAttackActive,
      secondAttackType
    );
  };
