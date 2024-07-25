import {
  poisonedStatut10PercentProbabililityAttack,
  poisonedStatut20PercentProbabililityAttack,
  poisonedStatut30PercentProbabililityAttack,
  poisonedStatut40PercentProbabililityAttack,
  poisonedStatut100PercentProbabililityAttack,
} from "../poisoned-statut-probability-attack.js";

export async function poisonedStatutProbabilitysAttack(
  secondAttacker,
  firstAttackerAttack
) {
  await poisonedStatut10PercentProbabililityAttack(
    secondAttacker,
    firstAttackerAttack
  );

  await poisonedStatut20PercentProbabililityAttack(
    secondAttacker,
    firstAttackerAttack
  );

  await poisonedStatut30PercentProbabililityAttack(
    secondAttacker,
    firstAttackerAttack
  );

  await poisonedStatut40PercentProbabililityAttack(
    secondAttacker,
    firstAttackerAttack
  );

  await poisonedStatut100PercentProbabililityAttack(
    secondAttacker,
    firstAttackerAttack
  );
}
