import {
  confusingStatut10PercentProbabililityAttack,
  confusingStatut20PercentProbabililityAttack,
  confusingStatut100PercentProbabililityAttack,
} from "../confusing-statut-probability-attack.js";

export async function confusingStatutProbabilitysAttack(
  firstAttacker,
  secondAttacker,
  firstAttackerAttack
) {
  await confusingStatut10PercentProbabililityAttack(
    secondAttacker,
    firstAttackerAttack
  );
  await confusingStatut20PercentProbabililityAttack(
    secondAttacker,
    firstAttackerAttack
  );
  await confusingStatut100PercentProbabililityAttack(
    firstAttacker,
    secondAttacker,
    firstAttackerAttack
  );
}
