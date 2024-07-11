import {
  burningStatut10PercentProbabililityForFirstAttack,
  burningStatut30PercentProbabililityForFirstAttack,
  burningStatut50PercentProbabililityForFirstAttack,
  burningStatut100PercentProbabililityForFirstAttack,
} from "../burning-statut-probability-for-first-attack.js";

export const burningStatutProbabilitysForFirstAttack =
  function burningStatutProbabilitysForFirstAttack(
    firstAttacker,
    secondAttacker,
    isFirstAttackActive,
    firstAttackType,
    secondAttackerType
  ) {
    burningStatut10PercentProbabililityForFirstAttack(
      firstAttacker,
      secondAttacker,
      isFirstAttackActive,
      firstAttackType,
      secondAttackerType
    );

    burningStatut30PercentProbabililityForFirstAttack(
      firstAttacker,
      secondAttacker,
      isFirstAttackActive,
      firstAttackType,
      secondAttackerType
    );

    burningStatut50PercentProbabililityForFirstAttack(
      firstAttacker,
      secondAttacker,
      isFirstAttackActive,
      firstAttackType,
      secondAttackerType
    );

    burningStatut100PercentProbabililityForFirstAttack(
      firstAttacker,
      secondAttacker,
      isFirstAttackActive,
      firstAttackType,
      secondAttackerType
    );
  };
