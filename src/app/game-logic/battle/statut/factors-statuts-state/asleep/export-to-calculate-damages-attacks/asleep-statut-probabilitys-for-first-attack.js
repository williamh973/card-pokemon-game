import {
  asleepStatut30PercentProbabililityForFirstAttack,
  asleepStatut100PercentProbabililityForFirstAttack,
} from "../asleep-statut-probability-for-first-attack.js";

export function asleepStatutProbabilitysForFirstAttack(
  firstAttacker,
  secondAttacker,
  isFirstAttackActive
) {
  asleepStatut30PercentProbabililityForFirstAttack(
    firstAttacker,
    secondAttacker,
    isFirstAttackActive
  );

  asleepStatut100PercentProbabililityForFirstAttack(
    firstAttacker,
    secondAttacker,
    isFirstAttackActive
  );
}
