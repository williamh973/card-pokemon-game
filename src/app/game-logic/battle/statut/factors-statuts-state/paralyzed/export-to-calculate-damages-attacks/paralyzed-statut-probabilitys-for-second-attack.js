import {
  paralyzedStatut10PercentProbabililityForSecondAttack,
  paralyzedStatut30PercentProbabililityForSecondAttack,
  paralyzedStatut100PercentProbabililityForSecondAttack,
} from "../paralyzed-statut-probability-for-second-attack.js";

export function paralyzedStatutProbabilitysForSecondAttack(
  firstAttacker,
  secondAttacker,
  isSecondAttackActive
) {
  paralyzedStatut10PercentProbabililityForSecondAttack(
    firstAttacker,
    secondAttacker,
    isSecondAttackActive
  );

  paralyzedStatut30PercentProbabililityForSecondAttack(
    firstAttacker,
    secondAttacker,
    isSecondAttackActive
  );

  paralyzedStatut100PercentProbabililityForSecondAttack(
    firstAttacker,
    secondAttacker,
    isSecondAttackActive
  );
}
