import {
  paralyzedStatut10PercentProbabililityAttack,
  paralyzedStatut30PercentProbabililityAttack,
  paralyzedStatut100PercentProbabililityAttack,
} from "../paralyzed-statut-probability-attack.js";

export function paralyzedStatutProbabilitysAttack(
  secondAttacker,
  firstAttackerAttack
) {
  paralyzedStatut10PercentProbabililityAttack(
    secondAttacker,
    firstAttackerAttack
  );

  paralyzedStatut30PercentProbabililityAttack(
    secondAttacker,
    firstAttackerAttack
  );

  paralyzedStatut100PercentProbabililityAttack(
    secondAttacker,
    firstAttackerAttack
  );
}
