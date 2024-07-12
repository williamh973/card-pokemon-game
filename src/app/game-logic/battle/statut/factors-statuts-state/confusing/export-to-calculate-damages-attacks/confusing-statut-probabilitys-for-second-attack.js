import {
  confusingStatut10PercentProbabililityForSecondAttack,
  confusingStatut20PercentProbabililityForSecondAttack,
  confusingStatut100PercentProbabililityForSecondAttack,
} from "../confusing-statut-probability-for-second-attack.js";

export function confusingStatutProbabilitysForSecondAttack(
  firstAttacker,
  secondAttacker,
  isSecondAttackActive
) {
  confusingStatut10PercentProbabililityForSecondAttack(
    firstAttacker,
    secondAttacker,
    isSecondAttackActive
  );

  confusingStatut20PercentProbabililityForSecondAttack(
    firstAttacker,
    secondAttacker,
    isSecondAttackActive
  );

  confusingStatut100PercentProbabililityForSecondAttack(
    firstAttacker,
    secondAttacker,
    isSecondAttackActive
  );
}
