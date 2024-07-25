import {
  paralyzedStatut10PercentProbabililityAttack,
  paralyzedStatut30PercentProbabililityAttack,
  paralyzedStatut100PercentProbabililityAttack,
} from "../paralyzed-statut-probability-attack.js";

export async function paralyzedStatutProbabilitysAttack(
  secondAttacker,
  firstAttackerAttack
) {
  await paralyzedStatut10PercentProbabililityAttack(
    secondAttacker,
    firstAttackerAttack
  );

  await paralyzedStatut30PercentProbabililityAttack(
    secondAttacker,
    firstAttackerAttack
  );

  await paralyzedStatut100PercentProbabililityAttack(
    secondAttacker,
    firstAttackerAttack
  );
}
