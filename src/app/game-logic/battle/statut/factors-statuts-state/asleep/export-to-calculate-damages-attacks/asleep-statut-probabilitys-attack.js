import {
  asleepStatut30PercentProbabililityAttack,
  asleepStatut100PercentProbabililityAttack,
} from "../asleep-statut-probability-attack.js";

export async function asleepStatutProbabilitysAttack(
  secondAttacker,
  firstAttackerAttack
) {
  await asleepStatut30PercentProbabililityAttack(
    secondAttacker,
    firstAttackerAttack
  );

  await asleepStatut100PercentProbabililityAttack(
    secondAttacker,
    firstAttackerAttack
  );
}
