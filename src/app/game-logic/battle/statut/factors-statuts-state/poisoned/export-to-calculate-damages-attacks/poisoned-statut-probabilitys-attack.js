import {
  poisonedStatut10PercentProbabililityAttack,
  poisonedStatut20PercentProbabililityAttack,
  poisonedStatut30PercentProbabililityAttack,
  poisonedStatut40PercentProbabililityAttack,
  poisonedStatut100PercentProbabililityAttack,
} from "../poisoned-statut-probability-attack.js";

export function poisonedStatutProbabilitysAttack(
  secondAttacker,
  firstAttackerAttack
) {
  poisonedStatut10PercentProbabililityAttack(
    secondAttacker,
    firstAttackerAttack
  );

  poisonedStatut20PercentProbabililityAttack(
    secondAttacker,
    firstAttackerAttack
  );

  poisonedStatut30PercentProbabililityAttack(
    secondAttacker,
    firstAttackerAttack
  );

  poisonedStatut40PercentProbabililityAttack(
    secondAttacker,
    firstAttackerAttack
  );

  poisonedStatut100PercentProbabililityAttack(
    secondAttacker,
    firstAttackerAttack
  );
}
