import {
  poisonedStatut10PercentProbabililityForSecondAttack,
  poisonedStatut20PercentProbabililityForSecondAttack,
  poisonedStatut30PercentProbabililityForSecondAttack,
  poisonedStatut40PercentProbabililityForSecondAttack,
  poisonedStatut100PercentProbabililityForSecondAttack,
} from "../poisoned-statut-probability-for-second-attack.js";

export function poisonedStatutProbabilitysForSecondAttack(
  firstAttacker,
  secondAttacker,
  isSecondAttackActive
) {
  poisonedStatut10PercentProbabililityForSecondAttack(
    firstAttacker,
    secondAttacker,
    isSecondAttackActive
  );

  poisonedStatut20PercentProbabililityForSecondAttack(
    firstAttacker,
    secondAttacker,
    isSecondAttackActive
  );

  poisonedStatut30PercentProbabililityForSecondAttack(
    firstAttacker,
    secondAttacker,
    isSecondAttackActive
  );

  poisonedStatut40PercentProbabililityForSecondAttack(
    firstAttacker,
    secondAttacker,
    isSecondAttackActive
  );

  poisonedStatut100PercentProbabililityForSecondAttack(
    firstAttacker,
    secondAttacker,
    isSecondAttackActive
  );
}
