import {
  asleepStatut30PercentProbabililityForSecondAttack,
  asleepStatut100PercentProbabililityForSecondAttack,
} from "../asleep-statut-probability-for-second-attack.js";

export function asleepStatutProbabilitysForSecondAttack(
  firstAttacker,
  secondAttacker,
  isSecondAttackActive
) {
  asleepStatut30PercentProbabililityForSecondAttack(
    firstAttacker,
    secondAttacker,
    isSecondAttackActive
  );

  asleepStatut100PercentProbabililityForSecondAttack(
    firstAttacker,
    secondAttacker,
    isSecondAttackActive
  );
}
