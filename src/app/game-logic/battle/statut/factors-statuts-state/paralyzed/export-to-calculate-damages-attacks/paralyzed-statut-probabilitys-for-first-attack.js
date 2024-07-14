import {
  paralyzedStatut10PercentProbabililityForFirstAttack,
  paralyzedStatut30PercentProbabililityForFirstAttack,
  paralyzedStatut100PercentProbabililityForFirstAttack,
} from "../paralyzed-statut-probability-for-first-attack.js";

export function paralyzedStatutProbabilitysForFirstAttack(
  firstAttacker,
  secondAttacker
) {
  paralyzedStatut10PercentProbabililityForFirstAttack(
    firstAttacker,
    secondAttacker
  );

  paralyzedStatut30PercentProbabililityForFirstAttack(
    firstAttacker,
    secondAttacker
  );

  paralyzedStatut100PercentProbabililityForFirstAttack(
    firstAttacker,
    secondAttacker
  );
}
