import {
  paralyzedStatut10PercentProbabililityForFirstAttack,
  paralyzedStatut30PercentProbabililityForFirstAttack,
  paralyzedStatut100PercentProbabililityForFirstAttack,
} from "../paralyzed-statut-probability-for-first-attack.js";

export function paralyzedStatutProbabilitysForFirstAttack(
  firstAttacker,
  secondAttacker,
  isFirstAttackActive
) {
  paralyzedStatut10PercentProbabililityForFirstAttack(
    firstAttacker,
    secondAttacker,
    isFirstAttackActive
  );

  paralyzedStatut30PercentProbabililityForFirstAttack(
    firstAttacker,
    secondAttacker,
    isFirstAttackActive
  );

  paralyzedStatut100PercentProbabililityForFirstAttack(
    firstAttacker,
    secondAttacker,
    isFirstAttackActive
  );
}
