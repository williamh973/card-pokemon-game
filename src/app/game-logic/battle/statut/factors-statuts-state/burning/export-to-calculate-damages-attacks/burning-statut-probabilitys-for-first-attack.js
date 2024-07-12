import {
  burningStatut10PercentProbabililityForFirstAttack,
  burningStatut30PercentProbabililityForFirstAttack,
  burningStatut50PercentProbabililityForFirstAttack,
  burningStatut100PercentProbabililityForFirstAttack,
} from "../burning-statut-probability-for-first-attack.js";

export function burningStatutProbabilitysForFirstAttack(
  firstAttacker,
  secondAttacker,
  isFirstAttackActive
) {
  burningStatut10PercentProbabililityForFirstAttack(
    firstAttacker,
    secondAttacker,
    isFirstAttackActive
  );

  burningStatut30PercentProbabililityForFirstAttack(
    firstAttacker,
    secondAttacker,
    isFirstAttackActive
  );

  burningStatut50PercentProbabililityForFirstAttack(
    firstAttacker,
    secondAttacker,
    isFirstAttackActive
  );

  burningStatut100PercentProbabililityForFirstAttack(
    firstAttacker,
    secondAttacker,
    isFirstAttackActive
  );
}
