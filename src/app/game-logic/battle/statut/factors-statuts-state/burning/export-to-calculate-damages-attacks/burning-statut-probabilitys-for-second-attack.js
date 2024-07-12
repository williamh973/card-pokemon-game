import {
  burningStatut10PercentProbabililityForSecondAttack,
  burningStatut30PercentProbabililityForSecondAttack,
  burningStatut50PercentProbabililityForSecondAttack,
  burningStatut100PercentProbabililityForSecondAttack,
} from "../burning-statut-probability-for-second-attack.js";

export function burningStatutProbabilitysForSecondAttack(
  firstAttacker,
  secondAttacker,
  isSecondAttackActive
) {
  burningStatut10PercentProbabililityForSecondAttack(
    firstAttacker,
    secondAttacker,
    isSecondAttackActive
  );

  burningStatut30PercentProbabililityForSecondAttack(
    firstAttacker,
    secondAttacker,
    isSecondAttackActive
  );

  burningStatut50PercentProbabililityForSecondAttack(
    firstAttacker,
    secondAttacker,
    isSecondAttackActive
  );

  burningStatut100PercentProbabililityForSecondAttack(
    firstAttacker,
    secondAttacker,
    isSecondAttackActive
  );
}
