import {
  asleepStatut30PercentProbabililityAttack,
  asleepStatut100PercentProbabililityAttack,
} from "../asleep-statut-probability-for-first-attack.js";

export function asleepStatutProbabilitysAttack(
  secondAttacker,
  firstAttackerAttack
) {
  asleepStatut30PercentProbabililityAttack(secondAttacker, firstAttackerAttack);

  asleepStatut100PercentProbabililityAttack(
    secondAttacker,
    firstAttackerAttack
  );
}
