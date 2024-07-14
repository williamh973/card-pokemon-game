import {
  poisonedStatut10PercentProbabililityForFirstAttack,
  poisonedStatut20PercentProbabililityForFirstAttack,
  poisonedStatut30PercentProbabililityForFirstAttack,
  poisonedStatut40PercentProbabililityForFirstAttack,
  poisonedStatut100PercentProbabililityForFirstAttack,
} from "../poisoned-statut-probability-for-first-attack.js";

export function poisonedStatutProbabilitysForFirstAttack(
  firstAttacker,
  secondAttacker
) {
  poisonedStatut10PercentProbabililityForFirstAttack(
    firstAttacker,
    secondAttacker
  );

  poisonedStatut20PercentProbabililityForFirstAttack(
    firstAttacker,
    secondAttacker
  );

  poisonedStatut30PercentProbabililityForFirstAttack(
    firstAttacker,
    secondAttacker
  );

  poisonedStatut40PercentProbabililityForFirstAttack(
    firstAttacker,
    secondAttacker
  );

  poisonedStatut100PercentProbabililityForFirstAttack(
    firstAttacker,
    secondAttacker
  );
}
