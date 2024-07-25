import {
  burningStatut10PercentProbabililityAttack,
  burningStatut30PercentProbabililityAttack,
  burningStatut50PercentProbabililityAttack,
  burningStatut100PercentProbabililityAttack,
} from "../burning-statut-probability-attack.js";

export async function burningStatutProbabilitysAttack(
  secondAttacker,
  firstAttackerAttack
) {
  await burningStatut10PercentProbabililityAttack(
    secondAttacker,
    firstAttackerAttack
  );
  await burningStatut30PercentProbabililityAttack(
    secondAttacker,
    firstAttackerAttack
  );
  await burningStatut50PercentProbabililityAttack(
    secondAttacker,
    firstAttackerAttack
  );
  await burningStatut100PercentProbabililityAttack(
    secondAttacker,
    firstAttackerAttack
  );
}
