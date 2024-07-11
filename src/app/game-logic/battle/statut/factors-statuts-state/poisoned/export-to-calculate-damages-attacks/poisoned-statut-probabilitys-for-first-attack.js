import {
  poisonedStatut10PercentProbabililityForFirstAttack,
  poisonedStatut20PercentProbabililityForFirstAttack,
  poisonedStatut30PercentProbabililityForFirstAttack,
  poisonedStatut40PercentProbabililityForFirstAttack,
  poisonedStatut100PercentProbabililityForFirstAttack,
} from "../poisoned-statut-probability-for-first-attack.js";

export const poisonedStatutProbabilitysForFirstAttack =
  function poisonedStatutProbabilitysForFirstAttack(
    firstAttacker,
    secondAttacker,
    isFirstAttackActive,
    firstAttackType,
    secondAttackerType
  ) {
    poisonedStatut10PercentProbabililityForFirstAttack(
      firstAttacker,
      secondAttacker,
      isFirstAttackActive,
      firstAttackType,
      secondAttackerType
    );

    poisonedStatut20PercentProbabililityForFirstAttack(
      firstAttacker,
      secondAttacker,
      isFirstAttackActive,
      firstAttackType,
      secondAttackerType
    );

    poisonedStatut30PercentProbabililityForFirstAttack(
      firstAttacker,
      secondAttacker,
      isFirstAttackActive,
      firstAttackType,
      secondAttackerType
    );

    poisonedStatut40PercentProbabililityForFirstAttack(
      firstAttacker,
      secondAttacker,
      isFirstAttackActive,
      firstAttackType,
      secondAttackerType
    );

    poisonedStatut100PercentProbabililityForFirstAttack(
      firstAttacker,
      secondAttacker,
      isFirstAttackActive,
      firstAttackType,
      secondAttackerType
    );
  };
