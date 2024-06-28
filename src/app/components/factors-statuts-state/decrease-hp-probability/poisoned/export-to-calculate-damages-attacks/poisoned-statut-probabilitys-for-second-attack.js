import {
  poisonedStatut10PercentProbabililityForSecondAttack,
  poisonedStatut20PercentProbabililityForSecondAttack,
  poisonedStatut30PercentProbabililityForSecondAttack,
  poisonedStatut40PercentProbabililityForSecondAttack,
  poisonedStatut100PercentProbabililityForSecondAttack,
} from "../poisoned-statut-probability-for-second-attack.js";

export const poisonedStatutProbabilitysForSecondAttack =
  function poisonedStatutProbabilitysForSecondAttack(
    firstAttacker,
    secondAttacker,
    isSecondAttackActive,
    secondAttackType,
    secondAttackerType,
  ) {
    poisonedStatut10PercentProbabililityForSecondAttack(
      firstAttacker,
      secondAttacker,
      isSecondAttackActive,
      secondAttackType,
      secondAttackerType,
    );

    poisonedStatut20PercentProbabililityForSecondAttack(
      firstAttacker,
      secondAttacker,
      isSecondAttackActive,
      secondAttackType,
      secondAttackerType,
    );

    poisonedStatut30PercentProbabililityForSecondAttack(
      firstAttacker,
      secondAttacker,
      isSecondAttackActive,
      secondAttackType,
      secondAttackerType,
    );

    poisonedStatut40PercentProbabililityForSecondAttack(
      firstAttacker,
      secondAttacker,
      isSecondAttackActive,
      secondAttackType,
      secondAttackerType,
    );

    poisonedStatut100PercentProbabililityForSecondAttack(
      firstAttacker,
      secondAttacker,
      isSecondAttackActive,
      secondAttackType,
      secondAttackerType,
    );
  };
