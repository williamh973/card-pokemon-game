import {
  asleepStatut30PercentProbabililityAttack,
  asleepStatut100PercentProbabililityAttack,
} from "../asleep-statut-probability-attack.js";

export async function asleepStatutProbabilitysAttack(
  firstAttacker,
  secondAttacker,
  firstAttackerAttack
) {
  await asleepStatut30PercentProbabililityAttack(
    firstAttacker,
    secondAttacker,
    firstAttackerAttack
  );

  await asleepStatut100PercentProbabililityAttack(
    firstAttacker,
    secondAttacker,
    firstAttackerAttack
  );
}
