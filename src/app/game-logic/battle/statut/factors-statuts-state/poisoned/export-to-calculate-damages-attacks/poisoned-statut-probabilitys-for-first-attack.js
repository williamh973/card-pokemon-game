import {
  poisonedStatut10PercentProbabililityForFirstAttack,
  poisonedStatut20PercentProbabililityForFirstAttack,
  poisonedStatut30PercentProbabililityForFirstAttack,
  poisonedStatut40PercentProbabililityForFirstAttack,
  poisonedStatut100PercentProbabililityForFirstAttack,
} from "../poisoned-statut-probability-for-first-attack.js";

export function poisonedStatutProbabilitysForFirstAttack(
  firstAttacker,
  secondAttacker,
  isFirstAttackActive
) {
  poisonedStatut10PercentProbabililityForFirstAttack(
    firstAttacker,
    secondAttacker,
    isFirstAttackActive
  );

  poisonedStatut20PercentProbabililityForFirstAttack(
    firstAttacker,
    secondAttacker,
    isFirstAttackActive
  );

  poisonedStatut30PercentProbabililityForFirstAttack(
    firstAttacker,
    secondAttacker,
    isFirstAttackActive
  );

  poisonedStatut40PercentProbabililityForFirstAttack(
    firstAttacker,
    secondAttacker,
    isFirstAttackActive
  );

  poisonedStatut100PercentProbabililityForFirstAttack(
    firstAttacker,
    secondAttacker,
    isFirstAttackActive
  );
}
